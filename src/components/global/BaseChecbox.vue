<template>
  <label :for="name + id" class="checkbox-block" :class="classNames">
    <input
      :id="name + id"
      type="checkbox"
      :checked="checked"
      :disabled="disabled"
      @change="eventChange"
    />
    <span>{{ text }}</span>
  </label>
</template>

<script>
export default {
  name: "BaseChecbox",
  props: {
    classNames: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "input-checkbox"
    },
    checked: {
      tpye: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this._uid;
  },
  methods: {
    eventChange(e) {
      this.$emit("eventChange", e);
    }
  }
};
</script>
