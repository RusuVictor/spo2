<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --calendar --croprecord"
  >
    <template slot="close-icon"></template>
    <h2>Создать фрагмент записи</h2>

    <BaseInput
      placeholder="Время начала"
      :border="true"
      maskpattern="99:99"
      class-names="--full --center --max-height"
    ></BaseInput>

    <BaseInput
      placeholder="Время окончания"
      :border="true"
      maskpattern="99:99"
      class-names="--full --center --max-height"
    ></BaseInput>

    <div class="btn-group">
      <BaseChecbox text="аудиозапись" class="--center"></BaseChecbox>
      <BaseChecbox text="видеозапись" class="--center"></BaseChecbox>
    </div>

    <BaseButton text="Сохранить" class-names="--h84"></BaseButton>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseInput from "@/components/global/BaseInput";
import BaseChecbox from "@/components/global/BaseChecbox";

export default {
  name: "PopupCropRecord",
  components: { BaseChecbox, BaseButton, BaseInput },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
