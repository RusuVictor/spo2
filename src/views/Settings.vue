<template>
  <div class="settings --hfull">
    <div class="tabs">
      <div class="tabs__head">
        <button
          v-for="(item, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="{ active: activeTab === index }"
        >
          <span>{{ item.title }}</span>
        </button>
      </div>

      <div class="tabs__content">
        <div
          class="tabs__item"
          v-for="(item, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
        >
          <component :is="item.component"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheSoundVideo from "@/components/Settings/TheSoundVideo";
import TheLocalStorage from "@/components/Settings/TheLocalStorage";
import TheAbout from "@/components/Settings/TheAbout";
import TheTemplate from "@/components/Settings/TheTemplate";
import { mapMutations } from "vuex";
import { CHANGE_HEAD_TITLE } from "@/store/type";
import TheVideoConf from "@/components/Settings/TheVideoConf";

export default {
  name: "Setings",
  components: { TheTemplate, TheAbout, TheLocalStorage, TheSoundVideo, TheVideoConf },
  data() {
    return {
      tabs: [
        {
          title: "Видеоконференция",
          component: TheVideoConf
        },
        {
          title: "Звук и видео",
          component: TheSoundVideo
        },
        {
          title: "Хранение данных",
          component: TheLocalStorage
        },
        {
          title: "О программе",
          component: TheAbout
        },
        {
          title: "Шаблоны",
          component: TheTemplate
        }
      ],
      activeTab: 0
    };
  },
  created() {
    this.CHANGE_HEAD_TITLE("Настройки");
  },
  methods: {
    selectTab(i) {
      this.activeTab = i;
    },
    ...mapMutations([CHANGE_HEAD_TITLE])
  }
};
</script>

<style scoped></style>
