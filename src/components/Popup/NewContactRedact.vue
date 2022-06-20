<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --new-contact --btn-back"
  >
    <template slot="close-icon"></template>

    <button class="block-popup__back">
      <BaseIcon ico="arrow-left"></BaseIcon>
      <span>Отменить</span>
    </button>

    <h2>Редактировать</h2>
    <form action="">
      <div class="other-input --error">
        <span class="other-input__error">Контакт с таким IP-адресом есть в списке</span>
        <BaseInput
          class="--full"
          name="IP"
          placeholder="IP-адрес"
        ></BaseInput>
      </div>

      <div class="other-input">
        <span class="other-input__error"
          >Контакт с таким наименованием есть в списке</span
        >
        <BaseInput
          class="--full --border"
          name="name"
          placeholder="Наименование"
        ></BaseInput>
      </div>

      <div class="center">
        <BaseButton text="Сохранить"></BaseButton>
      </div>
    </form>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "NewContact",
  components: { BaseInput, BaseButton, BaseIcon },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
