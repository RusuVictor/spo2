<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --dialog --reference"
  >
    <template slot="close-icon"></template>

    <h2>Конференция</h2>

    <div class="block-popup__reference">
      <div class="block-popup__reference-item">
        <div style="width: 35%;">
          <span>СИЗО №12 г. Норильск</span>
          <span>192.168.212.2</span>
        </div>

        <span style="margin-right: auto; font-size: 11px;">Входящий вызов</span>

        <button class="button-accept">
          <span>Принять</span>
          <BaseIcon ico="phone"></BaseIcon>
        </button>

        <button class="button-decline" style="margin-left: 15px">
          <span>Отклонить</span>
          <BaseIcon ico="close-strong"></BaseIcon>
        </button>
      </div>

      <div class="block-popup__reference-item">
        <div style="width: 35%;">
          <span>СИЗО №12 г. Норильск</span>
          <span>192.168.212.2</span>
        </div>

        <span style="margin-right: auto; font-size: 11px;">Исходящий вызов</span>

        <span style="width: 9.7rem; text-align: center">00:32</span>

        <button style="width: 10.4rem; margin-left: 1rem; text-align: center; display: flex; justify-content: center;">
          <span>Завершить</span>
          <BaseIcon ico="close-strong"></BaseIcon>
        </button>
      </div>
    </div>

    <div class="center">
      <BaseButton
        @eventclick="openAddParticipant"
        text="Добавить участника"
        class="--max-padding --h84"
      ></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseIcon from "@/components/global/BaseIcon";
import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "PopupEvents",
  components: { BaseIcon, BaseButton },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
    },
    openPopupAddParticipant() {
      this.OPEN_POPUP("popupAddParticipant");
    },
    openAddParticipant() {
      this.OPEN_POPUP("AddParticipant");
    }
  }
};
</script>
