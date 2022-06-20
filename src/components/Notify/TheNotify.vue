<template>
  <div class="notify" :class="{ active: opened }" v-click-outside="hideList">
    <div class="notify__ico active" @click="toggleList">
      <div class="notify__ico-inner">
        <BaseIcon ico="bell"></BaseIcon>
      </div>
    </div>

    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :class="{ active: item.active }"
      >
        <time>12:20</time>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import ClickOutside from "vue-click-outside";

export default {
  name: "TheNotify",
  components: { BaseIcon },
  data() {
    return {
      list: [
        {
          active: true,
          text: "Нет сигнала с видеокамеры"
        },
        {
          active: true,
          text: "Ошибка сохранения"
        },
        {
          active: false,
          text: "Скоро начнется заседание"
        },
        {
          active: false,
          text: "Данное дело не найдено"
        },
        {
          active: false,
          text: "Нет сигнала с видеокамеры"
        },
        {
          active: false,
          text: "Ошибка сохранения"
        },
        {
          active: false,
          text: "Скоро начнется заседание"
        },
        {
          active: false,
          text: "Данное дело не найдено"
        },
        {
          active: false,
          text: "Нет сигнала с видеокамеры"
        },
        {
          active: false,
          text: "Ошибка сохранения"
        },
        {
          active: false,
          text: "Скоро начнется заседание"
        },
        {
          active: false,
          text: "Данное дело не найдено"
        },
        {
          active: false,
          text: "Недостаточно памяти"
        }
      ],
      opened: false
    };
  },
  methods: {
    toggleList() {
      this.opened = !this.opened;
    },
    hideList() {
      this.opened = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>
