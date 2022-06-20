<template>
  <button
    @click="eventclick"
    :type="type"
    class="btn"
    :disabled="disabled"
    :class="classNames"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
    classNames: String,
    disabled: [String, Boolean],
    type: {
      type: String,
      default: "button"
    }
  },
  methods: {
    eventclick() {
      this.$emit("eventclick");
    }
  }
};
</script>
