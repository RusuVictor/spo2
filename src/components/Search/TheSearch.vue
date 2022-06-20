<template>
  <div class="search-block" :class="{ active: appsectionLayout }">
    <BaseInput
      placeholder="Добавить заседание на текущую дату по делу №"
      icon="search"
      :min="true"
      class-names="--full"
      @eventFocus="openSearch"
      @eventBlur="closeSearch"
    ></BaseInput>

    <table class="table" :class="{ active: searchActive }" ref="table-search">
      <tr v-for="(item, index) in [1, 2, 3, 4, 5]" :key="index">
        <td>
          <span>АД 12/231-20</span>
        </td>

        <td>
          <span>15.11.20</span>
        </td>

        <td class="search-block__table-admin">
          <span>Административное</span>
        </td>

        <td class="search-block__table-time">
          <span>Время</span>

          <BaseSelect
            :list="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
            :min="true"
          ></BaseSelect>
          <em>:</em>
          <BaseSelect
            :list="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
            :min="true"
          ></BaseSelect>
        </td>

        <td>
          <BaseButton text="добавить" class="--min"></BaseButton>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TOGGLE_APP_LAYOUT } from "@/store/type";
import BaseInput from "@/components/global/BaseInput";
import BaseSelect from "@/components/global/BaseSelect";
import BaseButton from "@/components/global/BaseButton";

export default {
  name: "TheSearch",
  components: { BaseButton, BaseInput, BaseSelect },
  data() {
    return {
      searchActive: false
    };
  },
  computed: {
    ...mapState(["appsectionLayout"])
  },
  methods: {
    openSearch() {
      this.searchActive = true;
      this.$store.commit(TOGGLE_APP_LAYOUT, true);
    },
    closeSearch(e) {
      if (!e.target.value) {
        this.searchActive = false;
        this.$store.commit(TOGGLE_APP_LAYOUT, false);
      }
    }
  }
};
</script>
