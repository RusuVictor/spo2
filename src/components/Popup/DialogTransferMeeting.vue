<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --dialog">
    <template slot="close-icon"></template>

    <h2>Для начала записи необходимо перенести заседание на текущую дату</h2>

    <div class="btn-group">
      <BaseButton text="Завершить" class="--h84"></BaseButton>
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
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>