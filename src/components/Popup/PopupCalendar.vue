<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --calendar"
  >
    <template slot="close-icon"></template>
    <h2>Заседание по делу</h2>
    <h3 style="">АД 12/231-20</h3>

    <v-date-picker
      class="block-popup__calendar"
      v-model="date"
      title-position="left"
    />

    <div class="block-popup__time">
      <h5>Время</h5>
      <div class="block-popup__time-item">
        <BaseSelect
          :list="[
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
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
          ]"
          :min="true"
          class="--list-min-width --list-center"
        ></BaseSelect>
      </div>
      <span>:</span>
      <div class="block-popup__time-item">
        <BaseSelect
          :list="[
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
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
          ]"
          :min="true"
          class="--list-min-width --list-center"
        ></BaseSelect>
      </div>

      <h5>Помещение</h5>
      <div class="block-popup__time-item --full" style="margin-top: 0">
        <span></span>
        <BaseSelect
          :list="[
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
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23
          ]"
          :min="true"
          class="--list-min-width --list-center --list-full-center"
        ></BaseSelect>
      </div>
    </div>

    <BaseButton text="Перенести"></BaseButton>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseSelect from "@/components/global/BaseSelect";

export default {
  name: "PopupCalendar",
  components: { BaseButton, BaseSelect },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
