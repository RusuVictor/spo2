<template>
  <div
    v-if="itVisible"
    class="input-block"
    ref="input-block-root"
    :class="[
      {
        error,
        '--min': min,
        '--icon': icon,
        '--border': border,
        '--small': small,
        '--textarea': textarea,
        focus,
      },
      classNames,
    ]"
  >
    <input
      ref="inputBlockInput"
      :type="inputType"
      :value="value"
      :disabled="disabled ? '' : disabled"
      @input="eventInput"
      @focus="focusInput"
      @blur="blurInput"
      v-if="!textarea"
    />

    <textarea
      name=""
      :value="value"
      @input="eventInput"
      @focus="focusInput"
      @blur="blurInput"
      v-if="textarea"
      :placeholder="placeholder"
    ></textarea>

    <span
      v-if="!textarea"
      class="input-block__placeholder"
      ref="input-block-input"
      >{{ placeholder }}</span
    >
    <span class="input-block__error" v-if="error">{{ errorText }}</span>
    <BaseIcon :ico="icon" v-if="icon" class-names="input-block__ico"></BaseIcon>

    <button v-if="remove" @click="removeSelf" class="input-block__remove">
      <BaseIcon ico="delete"></BaseIcon>
    </button>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import Inputmask from "inputmask";

export default {
  name: "BaseInput",
  components: { BaseIcon },
  props: {
    maskpattern: {
      type: String,
      default: "",
    },
    remove: {
      type: Boolean,
      default: false,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: "Некорректное заполнение",
    },
    classNames: String,
    min: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    border: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      focus: this.value ?? false,
      itVisible: true,
      mask: {
        mask: this.maskpattern,
        lazy: false,
        autofix: true,
      },
    };
  },
  mounted() {
    if (this.maskpattern) {
      let im = new Inputmask(this.maskpattern, {
        placeholder: "",
      });
      im.mask(this.$refs.inputBlockInput);
    }
  },
  methods: {
    focusInput(e) {
      this.focus = true;
      this.$emit("eventFocus", e);
    },
    eventInput(e) {
      this.$emit("eventInput", e);
      this.$emit("update:value", e.target.value);
    },
    blurInput(e) {
      if (e.target.value === "") {
        this.focus = false;
      }
      this.$emit("eventBlur", e);
    },
    removeSelf() {
      this.itVisible = false;
    },
  },
};
</script>
