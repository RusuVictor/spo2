<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup">
    <template slot="close-icon"></template>
    <h2>Редактировать пользователя</h2>

<!--    <BaseSelect-->
<!--      :list="[-->
<!--        'Судебный участок',-->
<!--        'Судебный участок 2',-->
<!--        'Судебный участок 3',-->
<!--        'Судебный участок 4',-->
<!--        'Судебный участок 5'-->
<!--      ]"-->
<!--      class-names="&#45;&#45;simple &#45;&#45;full &#45;&#45;border &#45;&#45;small &#45;&#45;list-min"-->
<!--    ></BaseSelect>-->

    <BaseInput
      placeholder="Судебный участок"
      :small="true"
      :border="true"
      class-names="--full"
      :disabled="true"
      value="Судебный участок"
    ></BaseInput>

    <BaseSelect
      :list="[
        'Должность',
        'Должность 2',
        'Должность 3',
        'Должность 4',
        'Должность 5'
      ]"
      class-names="--simple --full --border --small --list-min"
    ></BaseSelect>

    <BaseInput
      placeholder="ФИО"
      :small="true"
      :border="true"
      class-names="--full"
    ></BaseInput>

    <BaseInput
      placeholder="Логин"
      :small="true"
      :border="true"
      class-names="--full"
    ></BaseInput>

    <BaseInput
      placeholder="Пароль"
      :small="true"
      :border="true"
      class-names="--full"
      @eventInput="passValue"
    ></BaseInput>

    <BaseInput
      placeholder="Подтверждение пароля"
      :small="true"
      :border="true"
      class-names="--full"
      @eventInput="passRepeatValue"
    ></BaseInput>

<!--    :error="repeatPassError"-->
<!--    :error-text="-->
<!--    repeatPassError-->
<!--    ? 'Пароль не совпадает'-->
<!--    : 'Некорректное заполнение'-->
<!--    "-->

    <div class="btn-group">
      <BaseButton text="Добавить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "PopupAddUser",
  components: { BaseInput, BaseSelect, BaseButton },
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      date: new Date(),
      password: "",
      passwordError: "",
      repeatPass: ""
    };
  },
  computed: {
    // repeatPassError() {
    //   // return this.repeatPass !== this.password;
    // }
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    },
    passValue(event) {
      this.password = event.target.value;
    },
    passRepeatValue(event) {
      this.repeatPass = event.target.value;
    }
  }
};
</script>
