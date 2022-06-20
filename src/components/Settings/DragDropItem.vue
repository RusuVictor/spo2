<template>
  <li class="drag-group__item">
    <div class="drag-group__line">
      <i class="handle">
        <BaseIcon ico="dragdrop"></BaseIcon>
      </i>

      <span>{{ list.name }}</span>

      <div class="drag-group__control">
        <button class="more" @click="detail = !detail">
          <BaseIcon ico="arrow-down"></BaseIcon>
        </button>

        <button class="delete">
          <BaseIcon ico="delete"></BaseIcon>
        </button>

        <button class="redact">
          <BaseIcon ico="redact"></BaseIcon>
        </button>
      </div>
    </div>

    <div class="drag-group__textarea" v-show="detail">
      <textarea name="detail" id="detail" placeholder="Примечание"></textarea>
    </div>
  </li>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";

export default {
  name: "DragDropItem",
  components: { BaseIcon },
  props: {
    list: [Object, Array]
  },
  data() {
    return {
      detail: false
    };
  }
};
</script>

<style scoped></style>
