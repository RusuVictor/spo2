<template>
  <div class="blogin">
    <form @submit.prevent="submit">
      <h2>Авторизация</h2>

      <em class="validation-error-text --margin-bottom --text-center"
        >Неверный логин или пароль</em
      >
      <input
        type="text"
        class="simple-input"
        placeholder="Логин"
        v-model="$v.login.$model"
      />

<!--      <em-->
<!--        class="validation-error-text &#45;&#45;margin-bottom &#45;&#45;text-center"-->
<!--        v-show="$v.password.$error"-->
<!--        >Обязательное поле</em-->
<!--      >-->
      <input
        type="text"
        class="simple-input"
        placeholder="Пароль"
        v-model="$v.password.$model"
      />
      <span
        @click="showResetPassText = !showResetPassText"
        class="link"
        v-if="!showResetPassText"
        :class="{ '--min-margin': showResetPassText }"
        >Забыли пароль?</span
      >
      <p v-if="showResetPassText">
        Для восстановления пароля, необходимо обратиться к системному
        администратору, или отправить письмо на электронный адрес технической
        поддержки SDiAlog@system-r.ru с просьбой восстановить пароль
      </p>
      <BaseButton
        type="submit"
        text="Войти"
        @click.prevent="submitForm"
      ></BaseButton>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  components: { BaseButton },
  data() {
    return {
      login: "",
      password: "",
      showResetPassText: false
    };
  },
  created() {
    console.log(this.$v);
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return false;
      } else {
        console.log("Submit");
      }
    }
  },
  validations: {
    login: {
      required,
      minLength: minLength(3)
    },
    password: {
      required,
      minLength: minLength(3)
    }
  }
};
</script>

<style scoped></style>
