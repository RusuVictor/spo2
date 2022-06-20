<template>
  <div class="lanuch">
    <div class="logo">
      <img src="@/assets/ico/svg/logo.svg" alt="IMG" />
    </div>

    <form @submit.prevent="submit" class="lanuch__form">
      <h2>Внесите необходимые данные</h2>

      <h3>Данные объекта</h3>
      <div class="grid">
<!--        <BaseSelect-->
<!--          class="&#45;&#45;full"-->
<!--          :list="[-->
<!--            'Субъект РФ',-->
<!--            'Субъект РФ 1',-->
<!--            'Субъект РФ 2',-->
<!--            'Субъект РФ 3',-->
<!--            'Субъект РФ 4'-->
<!--          ]"-->
<!--        ></BaseSelect>-->

        
          <BaseSelect
            :list="['Субъект РФ 1', 'Субъект РФ 2', 'Субъект РФ 3', 'Субъект РФ 4']"
            :firstselect="true"
            placeholder="Субъект РФ"
            :simple="false"
            :selectPlaceholder="true"
            class=" --full-width --firstselect-min"
          ></BaseSelect>

        <div class="group">
<!--          <BaseInput class="&#45;&#45;full" placeholder="Помещение"></BaseInput>-->
          <BaseSelect
            :list="['Помещение 1', 'Помещение 2', 'Помещение 3', 'Помещение 4']"
            :firstselect="true"
            placeholder="Помещение"
            :simple="false"
            :selectPlaceholder="true"
            class="--small --list-min --firstselect-min"
          ></BaseSelect>
          <BaseInput class="--full" placeholder="№"></BaseInput>
        </div>
        <BaseInput class="--full" placeholder="Классификационный код"></BaseInput>
        <BaseInput class="--full" placeholder="Наименование суда"></BaseInput>
        <BaseInput
          class="--full --last-item"
          placeholder="Юридичиский адрес"
        ></BaseInput>
      </div>

      <!--      <BaseSelect-->
      <!--        :list="[-->
      <!--          'Добавить локальное хранилище',-->
      <!--          'Добавить локальное хранилище 2',-->
      <!--          'Добавить локальное хранилище 3',-->
      <!--          'Добавить локальное хранилище 4',-->
      <!--          '5'-->
      <!--        ]"-->
      <!--        placeholder="Добавить локальное хранилище"-->
      <!--        class="&#45;&#45;select-add"-->
      <!--        select-add="Добавить локальное хранилище"-->
      <!--        :min="true"-->
      <!--      ></BaseSelect>-->

      <div>
        <button type="button" class="btn-add">
          <BaseIcon ico="plus"></BaseIcon>
          <span>Путь к локальному хранилищу</span>
        </button>
        <button class="btn-edit">
          <BaseIcon ico="redact"></BaseIcon>
        </button>
      </div>

      <div class="lanuch__user-data">
        <h3 v-if="ifDataUser">Данные пользователя</h3>
        <div class="grid" v-if="ifDataUser">
          <BaseInput class="--full" placeholder="ФИО"></BaseInput>

          <BaseSelect
            class="--full"
            placeholder="Должность"
            :list="[
              'Должность',
              'Должность 1',
              'Должность 2',
              'Должность 3',
              'Должность 4',
              'Должность 5',
              'Должность 1',
              'Должность 2',
              'Должность 3',
              'Должность 4'
            ]"
          ></BaseSelect>

          <BaseInput class="--full" placeholder="Логин"></BaseInput>
          <BaseInput class="--full" placeholder="Пароль"></BaseInput>
          <BaseInput
            class="--full"
            placeholder="Подтверждение пароля"
          ></BaseInput>
        </div>
      </div>

      <BaseChecbox
        @eventChange="showHide"
        text="Использовать авторизацию при входе"
      ></BaseChecbox>

      <div class="btn-group">
        <BaseButton type="submit" text="Готово"></BaseButton>
        <BaseButton type="button" text="Отмена" class="--silver"></BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";
import BaseChecbox from "@/components/global/BaseChecbox";
import BaseButton from "@/components/global/BaseButton";
import BaseIcon from "@/components/global/BaseIcon";
import { minLength, required } from "vuelidate/lib/validators";

export default {
  name: "Launch",
  components: { BaseButton, BaseChecbox, BaseInput, BaseSelect, BaseIcon },
  data() {
    return {
      subjectrf: "",
      ifDataUser: false
    };
  },
  methods: {
    validatorModel(e) {
      this.$v.subjectrf.$model = e.target.value;
      console.log(e.target, this.$v.subjectrf, this.$v.subjectrf.$model);

    },
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false;
      } else {
        console.log("Submit");
      }
    },
    validationModel(e) {
      console.log(e, e.target.value);
    },
    showHide(e) {
      this.ifDataUser = e.target.checked;
    }
  },
  validations: {
    subjectrf: {
      required,
      minLength: minLength(3)
    }
  }
};
</script>
