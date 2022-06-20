<template>
  <div class="sabout">
    <div class="sabout__wrap">
      <h3>Архангельский областной суд</h3>

      <div class="sabout__grid">
        <div class="sabout__item">
          <b>Статистика</b>
          <ul>
            <li>Произведено заседаний: 2</li>
            <li>Аудиозаписей: 2</li>
            <li>Видеозаписей: 2</li>
            <li>Проведено ВКС конференций: 2</li>
            <li>Локальное хранилище: C://local-storage</li>
            <li>Свободное место: 14,5 GB</li>
          </ul>

<!--          <b>Техническая поддержка</b>-->
<!--          <ul>-->
<!--            <li>Почта: admin@example.com</li>-->
<!--            <li>Версия ПО: 1.11</li>-->
<!--          </ul>-->
        </div>
        <div class="sabout__item">
          <b>Ключ активации</b>
          <input
          placeholder="DKLW-DMW3-DDMA-2LD2"
          class="input-block input-block--placeholder"
          />
          <span>Срок лицензии: бессрочная</span>

          <div class="sabout__list-ico">
            <ul>
              <li class="active">
                <BaseIcon ico="record-min"></BaseIcon>
                <span>Аудио-видеофиксация</span>
              </li>

              <li class="active">
                <BaseIcon ico="audio-track"></BaseIcon>
                <span>Система распознавания речи</span>
              </li>

              <li>
                <BaseIcon ico="videoconf"></BaseIcon>
                <span>Видеоконференция</span>
              </li>

              <li>
                <BaseIcon ico="disc"></BaseIcon>
                <span>Система хранения данных</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="sabout__item sabout__item-last --full">
          <b>Техническая поддержка</b>
          <ul>
            <li>Почта: admin@example.com</li>
            <li>
              Версия ПО: 1.11
            </li>
            <li>
              Доступно обновление
              <button class="active">
                <span>Загрузить и установить</span>
                <BaseIcon ico="download2"></BaseIcon>
              </button>
              <button class="active">
                <span>Загрузить и установить</span>
                <radial-progress-bar
                  :diameter="24"
                  :completed-steps="44"
                  :total-steps="100"
                  :strokeWidth="2.5"
                  :innerStrokeWidth="2.5"
                  innerStrokeColor="#C4C4C4"
                  startColor="#FF8484"
                  stopColor="#FF8484"
                ></radial-progress-bar>
              </button>
              <button>
                <span>Загрузить и установить</span>
                <BaseIcon ico="download2"></BaseIcon>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import RadialProgressBar from "vue-radial-progress";

export default {
  name: "TheAbout",
  components: { BaseIcon, RadialProgressBar }
};
</script>

<style scoped></style>
