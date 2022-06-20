<template>
  <div
    class="select-block"
    :class="[
      {
        active: openedSelect,
        /*'--full-width': fullWidth,*/
        '--firstselect': !wasClicked,
        '--arrow': arrow,
      },
      classNames,
    ]"
    v-click-outside="hideSelect"
  >
    <button type="button" class="select-block__button" @click="selectToggle">
      <!--Placeholder-->
      <div
        class="select-block__placeholder"
        v-if="!wasClicked"
        :style="{ top: '50%', transform: 'translateY(-50%)' }"
      >
        {{ placeholder }}
      </div>

      <div
        class="select-block__placeholder"
        v-else
        :style="{ top: '30%', transform: 'translateY(-50%)' }"
      >
        {{ placeholder }}
      </div>

      <!--Selected Input-->
      <input
        class="select-block__selected--input"
        type="text"
        v-if="wasClicked"
        :width="{ top: this.widthSelected }"
        :value="selected"
        :placeholder="'Поиск...'"
      />

      <!--Arrow-->
      <div class="select-block__arrow">
        <BaseIcon ico="arrow-down"></BaseIcon>
      </div>
    </button>

    <!--List-->
    <div class="select-block__list" v-show="openedSelect">
      <ul>
        <li
          v-for="(item, index) in newList"
          :key="index"
          :class="{ active: selectedIndex === index }"
          @click="selectItem(item, index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import ClickOutside from "vue-click-outside";

export default {
  name: "BaseSearchSelect",
  components: { BaseIcon },
  props: {
    firstselect: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
    classNames: {
      type: String,
      default: "",
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    selectPlaceholder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: this.firstselect ? false : "",
      selectedIndex: this.list.indexOf(this.list[0]),
      openedSelect: false,
      focus: false,
      wasClicked: false,
    };
  },
  computed: {
    newList(e) {
      return e.list.filter((item) => {
        if (item) return item;
      });
    },
  },
  methods: {
    selectToggle() {
      this.openedSelect = !this.openedSelect;
      this.wasClicked = true;
    },
    selectItem(item, index) {
      this.selected = item;
      this.selectedIndex = index;
      this.openedSelect = false;
      this.$emit("update:value", index);
    },
    hideSelect() {
      this.openedSelect = false;
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
