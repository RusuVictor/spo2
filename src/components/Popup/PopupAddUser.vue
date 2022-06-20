<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup">
    <template slot="close-icon"></template>
    <h2>{{ title }}</h2>

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
      placeholder="Наименование суда"
      :small="true"
      :border="true"
      class-names="--full"
      :disabled="true"
      value="Судебный участок"
    ></BaseInput>

    <BaseSelect
      :placeholder="placeholder"
      :list="roles"
      :simple="false"
      :selectPlaceholder="true"
      :firstselect="true"
      class-names="--full --border --small --thin --list-min "
    ></BaseSelect>

    <BaseInput
      placeholder="ФИО"
      :small="true"
      :border="true"
      class-names="--full"
      @eventInput="passName"
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
import { mapMutations } from "vuex";
import { CLOSE_POPUP } from "@/store/type";

export default {
  name: "PopupAddUser",
  components: { BaseInput, BaseSelect, BaseButton },
  props: {
    title: {
      type: String,
      default: "Новый пользователь",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      placeholder: "Должность",
      date: new Date(),
      roles: [],
      name: "",
      password: "",
      passwordError: "",
      repeatPass: "",
    };
  },
  mounted() {
    this.$api.roles.getRoles().then((res) => {
      this.roles = res.data.body.roles;
    });
  },
  computed: {
    // repeatPassError() {
    //   // return this.repeatPass !== this.password;
    // }
  },
  methods: {
    ...mapMutations([CLOSE_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
      this.CLOSE_POPUP(false);
    },
    passValue(event) {
      this.password = event.target.value;
    },
    passRepeatValue(event) {
      this.repeatPass = event.target.value;
    },
    passName(event) {
      this.name = event.target.value;
    },
  },
};
</script>
