<template>
  <svg class="icon" :class="classNames">
    <use
      :xlink:href="require('@/assets/ico/sprite/sprite.svg') + '#' + ico"
    ></use>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    ico: String,
    classNames: String
  }
};
</script>
