<template>
  <fragment>
    <ul class="interactive-list" :class="{ '--fixed': fixed }">
      <li v-for="(item, index) in list" :key="index">
        <input
          :id="'check-item-' + id + index"
          type="checkbox"
          v-if="!nocheck"
        />

        <label :for="'check-item-' + id + index">
          <i>
            <BaseIcon ico="check"></BaseIcon>
          </i>

          <span>{{ item.title || item.name }}</span>

          <em v-if="item.second">{{ item.second }}</em>

          <div class="interactive-list__actions" v-if="button && !restore">
            <button v-on:click="list.splice(index, 1)">
              <BaseIcon ico="delete"></BaseIcon>
            </button>

            <button @click="openPopupAddUser">
              <BaseIcon ico="redact"></BaseIcon>
            </button>
          </div>

          <div class="interactive-list__actions" v-if="restore">
            <button class="icon-replace">
              <BaseIcon ico="replace"></BaseIcon>
            </button>
          </div>
        </label>
      </li>
    </ul>
  </fragment>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import { Fragment } from "vue-fragment";
import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "v-interactive-list",
  components: { BaseIcon, Fragment },
  props: {
    list: Array,
    button: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: false
    },
    restore: {
      type: Boolean,
      default: false
    },
    nocheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: null,
      popupAddObj: false
    };
  },
  mounted() {
    this.id = this._uid;
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    openPopupAddUser() {
      this.OPEN_POPUP("PopupAddUserRedact");
    },
  }
};
</script>
