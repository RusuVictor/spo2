<template>
  <div class="localstorage">
    <div class="localstorage__wrap">
      <div class="localstorage__item">
        <button class="localstorage__btn">
          <span>Путь к сетевому хранилищу</span>
          <BaseIcon ico="plus"></BaseIcon>
        </button>
      </div>

      <div class="localstorage__item localstorage__repo">
        <span>Период сохранения на сетевое хранилище</span>
        <div>
          <BaseChecbox
            text="После завершения записи"
          ></BaseChecbox>
        </div>
        <div class="checkbox-timepicker">
          <BaseChecbox
            text="Выбор временного интервала сохранения записи"
          ></BaseChecbox>
          <span class="timepicker">
            <vue-timepicker placeholder="__:__"></vue-timepicker>
          </span>
          <em>-</em>
          <span class="timepicker">
            <vue-timepicker placeholder="__:__"></vue-timepicker>
          </span>
        </div>
      </div>

      <div class="localstorage__item">
        <button class="localstorage__btn">
          <span>Путь к локальному хранилищу</span>
          <BaseIcon ico="plus"></BaseIcon>
        </button>
      </div>

      <div class="localstorage__item">
        <button class="localstorage__btn">
          <span>Путь к DVD-приводу</span>
          <BaseIcon ico="plus"></BaseIcon>
        </button>
      </div>

<!--      <div class="localstorage__item">-->
<!--        <BaseChecbox-->
<!--          text="Автоматическое копирование на сетевое хранилище"-->
<!--        ></BaseChecbox>-->
<!--      </div>-->

      <div class="localstorage__item">
        <BaseButton text="Применить"></BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import BaseChecbox from "@/components/global/BaseChecbox";
import BaseButton from "@/components/global/BaseButton";
import VueTimepicker from 'vue2-timepicker';
import 'vue2-timepicker/dist/VueTimepicker.css';

export default {
  name: "TheLocalStorage",
  components: { BaseButton, BaseChecbox, BaseIcon, VueTimepicker }
};
</script>

<style scoped></style>
