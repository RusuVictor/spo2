<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --dialog">
    <template slot="close-icon"></template>

    <h2>Чтобы закрыть СПО Диалог необходимо завершить запись судебного заседания</h2>

    <div class="btn-group">
      <BaseButton text="Завершить" class="--red --h84"></BaseButton>
      <BaseButton text="Отмена" class="--silver --h84"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";

export default {
  name: "PopupEvents",
  components: { BaseButton },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>

<style scoped>
/*.flip-list-move {*/
/*  transition: transform 0.5s;*/
/*}*/
/*.no-move {*/
/*  transition: transform 0s;*/
/*}*/
/*.ghost {*/
/*  opacity: 0.5;*/
/*  background: #c8ebfb;*/
/*}*/
/*.list-group {*/
/*  min-height: 20px;*/
/*}*/
/*.list-group-item {*/
/*  cursor: move;*/
/*}*/
.list-group-item i {
  cursor: pointer;
}
</style>
