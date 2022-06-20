<template>
  <div
    class="select-block"
    :class="[
      {
        active: openedSelect,
        '--simple': simple,
        '--min': min,
        '--arrow': arrow
      },
      classNames
    ]"
    v-click-outside="hideSelect"
  >
    <em :class="selected.is === true ? '--green' : null"></em>

    <button type="button" class="select-block__button" @click="selectToggle">
      <!--Selected-->
      <div class="select-block__selected" v-if="selected" :width="{top: this.widthSelected}">{{ selected.text }}</div>

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
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import ClickOutside from "vue-click-outside";

export default {
  name: "BaseSelectIsPresent",
  components: { BaseIcon },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    classNames: {
      type: String,
      default: ""
    },
    simple: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    },
    min: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      selected: this.firstselect ? false : "",
      selectedIndex: this.list.indexOf(this.list[0]),
      openedSelect: false,
      focus: false
    };
  },
  computed: {
    newList(e) {
      return e.list.filter(item => {
        if (item) return item;
      });
    }
  },
  methods: {
    selectToggle() {
      this.openedSelect = !this.openedSelect;
    },
    selectItem(item, index) {
      this.selected = item;
      this.selectedIndex = index;
      this.openedSelect = false;
    },
    hideSelect() {
      this.openedSelect = false;
    },
  },
  directives: {
    ClickOutside
  }
};
</script>
