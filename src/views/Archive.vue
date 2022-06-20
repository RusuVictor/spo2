<template>
  <div class="archive --hfull">
    <div class="gridblock --margin-min">
      <div class="gridblock__item">
        <div class="archive__filter">
          <div class="archive__filter-item">
            <BaseInput
              placeholder="Номер дела"
              class="--min --full"
              @eventInput="caseNumberHandle"
            ></BaseInput>
          </div>
          <div class="archive__filter-item">
            <BaseSelect
              :list="list"
              :paddingArchive="paddingTop"
              placeholder="Вид производства"
              class="--full --variant2"
              @update:value="caseTypeHandle"
            ></BaseSelect>
          </div>

          <div class="archive__filter-item">
            <BaseSearchSelect
              :paddingArchive="paddingTop"
              :list="['Судья', 'Судья 2', 'Судья 3']"
              placeholder="Судья"
              class="--full --variant2"
              @update:value="caseJudgeHandle"
            ></BaseSearchSelect>
          </div>

          <div class="archive__filter-item">
            <BaseSearchSelect
              :paddingArchive="paddingTop"
              :list="['Секретарь', 'Секретарь 2', 'Секретарь 3']"
              placeholder="Секретарь"
              class="--full --variant2"
              @update:value="caseSecretaryHandle"
            ></BaseSearchSelect>
          </div>

          <div class="archive__filter-item">
            <BaseButton
              text="Найти"
              class="--middle --full"
              @eventclick="filterCases"
            ></BaseButton>
          </div>
        </div>
      </div>

      <div class="gridblock__item archive__height-auto">
        <v-table-archive
          v-if="!casesLoading"
          :cases="filteredCases"
        ></v-table-archive>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/global/BaseInput";
import BaseSelect from "@/components/global/BaseSelect";
import BaseSearchSelect from "@/components/global/BaseSearchSelect";
import BaseButton from "@/components/global/BaseButton";
import VTableArchive from "@/components/Table/Table";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { CHANGE_HEAD_TITLE } from "@/store/type";

export default {
  name: "Archive",
  components: {
    VTableArchive,
    BaseButton,
    BaseSearchSelect,
    BaseSelect,
    BaseInput,
  },
  data() {
    return {
      list: ["Административное", "Уголовное", "Гражданское", "Арбитражное"],
      paddingTop: "1.425rem !important",
      cases: [],
      casesLoading: false,
      caseNumber: "",
      caseType: "",
      caseJudge: "",
      caseSecretary: "",
    };
  },
  created() {
    this.CHANGE_HEAD_TITLE("Архив заседаний");
    // this.$api.cases.getCases().then((res) => {
    //   console.log(res.data.body);
    //   this.cases = res.data.body.cases;
    // });
  },
  methods: {
    ...mapMutations([CHANGE_HEAD_TITLE]),
    ...mapActions(["fetchCases", "clearCases"]),
    caseNumberHandle(event) {
      this.caseNumber = event.target.value;
    },
    caseTypeHandle(value) {
      this.caseType = value + 1;
    },
    caseJudgeHandle(value) {
      this.caseJudge = value;
    },
    caseSecretaryHandle(value) {
      this.caseSecretary = value;
    },
    filterCases() {
      this.casesLoading = true;
      this.clearCases();
      this.fetchCases({
        number: this.caseNumber,
        type: this.caseType,
        judge: this.caseJudge,
        secretary: this.caseSecretary,
      });
      this.$nextTick(() => {
        this.casesLoading = false;
      });
    },
  },
  mounted() {
    this.fetchCases();
  },
  computed: {
    ...mapGetters(["filteredCases"]),
  },
};
</script>
