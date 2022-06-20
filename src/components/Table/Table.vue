<template>
  <div class="table-block archive__table">
    <table class="table">
      <thead class="archive__table-head">
        <tr>
          <th class="table-first-item">
            <span>Номер дела</span>
          </th>
          <th class="table-second-item" >
            <span>Вид производства</span>
          </th>
          <th class="table-third-item">
            <span  >Судья</span>
          </th>
          <th>
            <span >Секретарь</span>
          </th>
          
        </tr>
      </thead>

      <tbody class="archive__table-body">
        <!--Row-->
        <TableArchiveRow
          v-for="(item, index) in cases"
          :key="index"
          :item="item"
        ></TableArchiveRow>
      </tbody>
    </table>
  </div>
</template>

<script>

import TableArchiveRow from "@/components/Table/TableArchiveRow";
export default {
  name: "Table",
  components: { TableArchiveRow },
  data() {
    return {
      detailRow: false
    };
  },
  props: {
    cases: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
