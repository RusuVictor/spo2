<template>
  <draggable
    class="drag-group"
    tag="ul"
    v-model="items"
    v-bind="dragOptions"
    handle=".handle"
    @start="drag = true"
    @end="drag = false"
  >
    <transition-group type="transition" :name="!drag ? 'flip-list' : null">
      <DragDropItem
        v-for="item in items"
        :key="item.name"
        :list="item"
      ></DragDropItem>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import DragDropItem from "@/components/Settings/DragDropItem";

// const message = [
//   "Открытие судебного заседания",
//   "draggable",
//   "component",
//   "for",
//   "vue.js 2.0",
//   "based",
//   "on",
//   "Sortablejs",
//   "vue.draggable",
//   "draggable",
//   "component",
//   "for",
//   "vue.js 2.0",
//   "based",
//   "on",
//   "Sortablejs"
// ];

export default {
  name: "DragDrop",
  components: {
    DragDropItem,
    draggable,
  },
  data() {
    return {
      // list: message.map((name, index) => {
      //   return { name, order: index + 1 };
      // }),
      drag: false,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
