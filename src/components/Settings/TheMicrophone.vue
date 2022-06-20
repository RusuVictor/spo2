<template>
  <div class="microphone">
    <div class="microphone__list">
      <ul>
        <li
          v-for="(item, index) in [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ]"
          :key="index"
          :class="{ active: index === 2 }"
        >
          <em>A</em>
          <span>{{ item }}</span>
        </li>
        <li class="--plus">+</li>
      </ul>
    </div>

    <div class="microphone__test">
      <em>Говорите</em>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="microphone__control">
      <button>
        <BaseIcon ico="mic-o"></BaseIcon>
        <span>Проверить микрофон</span>
      </button>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
export default {
  name: "TheMicrophone",
  components: { BaseIcon },
  data() {
    return {
      activeMic: 0
    };
  }
};
</script>
