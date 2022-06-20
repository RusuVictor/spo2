<template>
  <div class="input-calendar">
    <div class="input-calendar__wrap">
      <BaseInput
        :placeholder="placeholder"
        :small="true"
        :border="true"
        :class-names="classNames"
        :disabled="true"
        :value="date.toLocaleDateString()"
      ></BaseInput>
      <div
        class="input-calendar__icon"
        v-click-outside="hideCalendar"
        :class="{ active: calendar }"
      >
        <i @click="calendar = !calendar">
          <BaseIcon ico="calelndar-2" class-names="icon-calendar"></BaseIcon>
        </i>

        <v-date-picker v-model="date" v-show="calendar" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/global/BaseInput";
import BaseIcon from "@/components/global/BaseIcon";
import ClickOutside from "vue-click-outside";

export default {
  name: "BaseInputCalendar",
  components: { BaseIcon, BaseInput },
  props: {
    placeholder: {
      type: String,
      default: "Дата"
    },
    classNames: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      calendar: false,
      date: new Date()
    };
  },
  methods: {
    hideCalendar() {
      this.calendar = false;
    }
  },
  watch: {
    date() {
      this.calendar = false;
      this.$emit('update:value', this.date)
    }
  },
  directives: {
    ClickOutside
  }
};
</script>
