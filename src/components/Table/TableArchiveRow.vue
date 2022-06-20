<template>
  <fragment>
    <tr class="archive__table-body-grid">
      <td class="table-first-item">
        <span>{{ item.number }}</span>
      </td>
      <td class="table-second-item">
        <span>{{ item.type }}</span>
      </td>
      <td class="table-third-item">
        <BaseIcon ico="replace" class-names="table-td-icon"></BaseIcon>
        <span>{{ item.judge }}</span>
      </td>
      <td>
        <BaseIcon ico="replace" class-names="table-td-icon"></BaseIcon>
        <span>{{ item.secretary }}</span>
      </td>
      <td class="--align-left">
        <button
          class="btn-more"
          @click="detail = !detail"
          :class="{ active: detail }"
        >
          <span>Заседания по делу</span>
          <BaseIcon ico="arrow-down"></BaseIcon>
        </button>
      </td>
    </tr>

    <TableArchiveDetail v-show="detail"></TableArchiveDetail>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import BaseIcon from "@/components/global/BaseIcon";
import TableArchiveDetail from "@/components/Table/TableArchiveDetail";

export default {
  name: "TableArchiveRow",
  components: { TableArchiveDetail, BaseIcon, Fragment },
  data() {
    return {
      detail: false
    };
  },
  props: {
    item: {
      required: true,
    }
  }
};
</script>
