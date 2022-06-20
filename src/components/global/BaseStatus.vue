<template>
  <div class="status-block" :class="['--' + type]">
    <i v-if="type === 'complete'">
      <BaseIcon ico="check-circle"></BaseIcon>
    </i>

    <i v-if="type === 'pending'">
      <BaseIcon ico="clock"></BaseIcon>
    </i>

    <i class="record" v-if="type === 'record'" ref="record-el">
      <radial-progress-bar
        :diameter="diameter"
        :completed-steps="progress"
        :total-steps="totalSteps"
        :strokeWidth="strokeWidth"
        :innerStrokeWidth="strokeWidth"
        innerStrokeColor="#C4C4C4"
        startColor="#FF8484"
        stopColor="#FF8484"
      ></radial-progress-bar>
    </i>

    <i v-if="type === 'break'">
      <BaseIcon ico="time"></BaseIcon>
    </i>
    <span>{{ text }}</span>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import BaseIcon from "@/components/global/BaseIcon";

export default {
  name: "BaseStatus",
  components: { BaseIcon, RadialProgressBar },
  props: {
    // complete | pending | record | break
    type: String,
    text: String,
    progress: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.resizeWidth();
    });

    this.resizeWidth();
  },
  data() {
    return {
      completedSteps: 66,
      totalSteps: 100,
      diameter: 24,
      strokeWidth: 2.5
    };
  },
  methods: {
    resizeWidth() {
      if (this.type === "record") {
        this.diameter = this.$refs["record-el"].clientWidth;
        this.strokeWidth = this.$refs["record-el"].clientWidth / 10;
      }
    }
  }
};
</script>
