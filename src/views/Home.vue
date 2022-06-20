<template>
  <div class="home">
    <TableHome></TableHome>
  </div>
</template>

<script>
import TableHome from "@/components/Table/TableHome";
import { mapActions, mapMutations } from "vuex";
import { CHANGE_HEAD_TITLE, OPEN_POPUP } from "@/store/type";

export default {
  name: "Home",
  components: { TableHome },
  data() {
    return {
      inputErr: false,
      dataSelect: [
        "Помошник судьи",
        "Судебный пристав",
        "Адвокат",
        "Обвинитель",
        "Секретарь",
        "Помошник судьи",
        "Судебный пристав",
        "Адвокат",
        "Обвинитель",
        "Секретарь",
      ],
      open: false,
    };
  },
  created() {
    this.CHANGE_HEAD_TITLE("Список заседаний");
  },
  methods: {
    ...mapMutations([CHANGE_HEAD_TITLE, OPEN_POPUP]),
    ...mapActions(["fetchHearings"]),
    popupRedactSession() {
      this.OPEN_POPUP("popupRedactSession");
    },
  },
  mounted() {
    this.fetchHearings();
  },
};
</script>

<style scoped lang="scss">
.home {
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  .search-block {
    width: 67.7%;
  }
}
</style>
