<template>
  <div class="videoconf">
    <div class="videoconf__wrapper">
    <div class="videoconf__wrapper-item">
        <span class="videoconf__wrapper-item-title">Подключение</span>
        <BaseInput
          placeholder="Адрес SIP"
          class="--min --full videoconf__wrapper-item"
        ></BaseInput>
      </div>

      <BaseInput
        placeholder="Адрес сервера"
        class="--min --full videoconf__wrapper-item"
      ></BaseInput>
      
      <BaseInput
        placeholder="Ключ"
        class="--min --full videoconf__wrapper-item"
      ></BaseInput>

      <div class="videoconf__wrapper-item">
        <span class="videoconf__wrapper-item-title">Доступ</span>
        <BaseInput
          placeholder="Логин"
          class="--min --full"
        ></BaseInput>
      </div>

      <BaseInput
        placeholder="Пароль"
        class="--min --full videoconf__wrapper-item"
      ></BaseInput>
    </div>
    <div class="videoconf__wrapper">
      <BaseInput
        placeholder="Адрес RTMP трансляции"
        class="--min --full videoconf__wrapper-item"
      ></BaseInput>
    </div> 
  </div>
</template>

<script>
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "TheCamera",
  components: { BaseInput },
  data() {
    return {};
  },
  methods: {}
};
</script>
