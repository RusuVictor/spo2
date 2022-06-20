<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --events">
    <template slot="close-icon"></template>
    <h2>События</h2>

    <button
      type="button"
      class="btn-add --min"
      @click="addItem"
      style="margin-bottom: 1rem"
    >
      <BaseIcon ico="plus"></BaseIcon>
      <span>Создать событие</span>
    </button>

    <div class="block-popup__dragdrop">
      <draggable
        class="drag-events"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        handle=".handle"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <DragDropPopupItem
            v-for="(item, index) in list"
            :key="'transition-' + index"
            :data="item"
          ></DragDropPopupItem>
        </transition-group>
      </draggable>
    </div>

    <!--    <BaseSelect-->
    <!--      :list="[-->
    <!--        'Добавить событие',-->
    <!--        'Добавить событие 2',-->
    <!--        'Добавить событие 3',-->
    <!--        'Добавить событие 4',-->
    <!--        'Добавить событие 5'-->
    <!--      ]"-->
    <!--      :min="true"-->
    <!--      placeholder="Добавить событие"-->
    <!--      selectAdd="Добавить событие"-->
    <!--      :select-add="true"-->
    <!--    ></BaseSelect>-->

    <div class="btn-group">
      <BaseButton text="Добавить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import BaseButton from "@/components/global/BaseButton";
import draggable from "vuedraggable";
import DragDropPopupItem from "@/components/Popup/DragDropPopupItem";

const message = [
  "Открытие судебного заседания",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
  "fdsa",
];

export default {
  name: "PopupEvents",
  components: { DragDropPopupItem, BaseButton, BaseIcon, draggable },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: new Date().toLocaleDateString(),
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    hideModal() {
      this.$emit("hidePopup");
    },
    addItem() {
      console.log("New Item");
    }
  }
};
</script>

<style scoped>
/*.flip-list-move {*/
/*  transition: transform 0.5s;*/
/*}*/
/*.no-move {*/
/*  transition: transform 0s;*/
/*}*/
/*.ghost {*/
/*  opacity: 0.5;*/
/*  background: #c8ebfb;*/
/*}*/
/*.list-group {*/
/*  min-height: 20px;*/
/*}*/
/*.list-group-item {*/
/*  cursor: move;*/
/*}*/
.list-group-item i {
  cursor: pointer;
}
</style>
