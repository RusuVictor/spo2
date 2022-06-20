<template>
  <div class="table-block">
    <table class="table meetings__table">
      <thead>
        <tr>
          <th>
            <span>Номер дела</span>
          </th>
          <th>
            <span>Дата / Время</span>
          </th>
          <th>
            <span>Вид производства</span>
          </th>
          <th>
            <span>Статус</span>
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <!--Row-->
        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="complete"
          :dotStatus="true"
          :animation="true"
          
          v-for="hearing of hearings"
          :key="hearing.title"
        />

        <!-- <TableHomeRow
          @clickTransfer="btnTransfer"
          status="pending"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="record"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="break"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="complete"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="pending"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="record"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="break"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="complete"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="pending"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="record"
        ></TableHomeRow>

        <TableHomeRow
          @clickTransfer="btnTransfer"
          status="break"
        ></TableHomeRow> -->
      </tbody>
    </table>

    <PopupCalendar
      :show="popupCalendar"
      @hidePopup="popupCalendar = false"
    ></PopupCalendar>
  </div>
</template>

<script>
import TableHomeRow from "@/components/Table/TableHomeRow";
import PopupCalendar from "@/components/Popup/PopupCalendar";

export default {
  name: "TableHome",
  data() {
    return {
      popupCalendar: false,
      statusType: ["complete", "pending", "record", "break"]
    };
  },
  components: { TableHomeRow, PopupCalendar },
  computed: {
    hearings() {
      return this.$store.hearings?.length ? this.$store.hearings : false 
    }
  },
  methods: {
    btnTransfer() {
      this.popupCalendar = !this.popupCalendar;
    }
  }
};
</script>
