<template>
  <li>
    <div class="drag-events__line" :class="{ '--detail': detail }">
      <input
        type="checkbox"
        :name="'drag-events-check-' + id"
        :id="'drag-events-check-' + id"
      />
      <i class="drag-events__handle handle">
        <BaseIcon ico="dragdrop"></BaseIcon>
      </i>

      <label :for="'drag-events-check-' + id" class="drag-events__check">
        <span v-if="!detail">{{ data.name }}</span>
        <input
          type="text"
          :value="data.name"
          v-if="detail"
          :name="'drag-events-input-' + id"
        />
      </label>

      <div class="drag-events__control">
        <button class="delete" :class="{ '--active': detail }">
          <BaseIcon ico="delete"></BaseIcon>
        </button>

        <button
          class="check"
          :class="{ '--active': detail }"
          v-if="detail"
          @click="detail = false"
        >
          <BaseIcon ico="check"></BaseIcon>
        </button>

        <button class="redact" @click="detail = true" v-if="!detail">
          <BaseIcon ico="redact"></BaseIcon>
        </button>
      </div>

      <div class="drag-events__textarea" v-if="detail">
        <textarea name="detail" id="detail" placeholder="Примечание"></textarea>
      </div>
    </div>
  </li>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";

export default {
  name: "DragDropPopupItem",
  components: { BaseIcon },
  props: {
    data: [Array, Object]
  },
  data() {
    return {
      id: null,
      detail: false
    };
  },
  mounted() {
    this.id = this._uid;
  }
};
</script>
