<template>
  <div class="list-roles__item list-roles__item--meeting" :class="{'--edit': showEdit}">
    <div class="list-roles__item-text">
        <b>Истец 1</b>
        <span
            class-names="--color-silver --max"
            v-if="!showEdit"
        >{{ inputValue }}</span>

        <div class="list-roles__edit" v-if="showEdit">
            <input type="text" ref="editInput" :value="inputValue" @keyup.enter="editItem">
        </div>
    </div>

    <div class="meetingparticip__control">
        <BaseSelectIsPresent
            :list="[{ text:'Отсутствует', is: false}, { text:'Присутствует', is: true}]"
            :min="true"
            class="--fz-16 --arrow-min"
        ></BaseSelectIsPresent>

        <button @click="editItem({ target: $refs.editInput })" v-if="showEdit">
        <BaseIcon ico="check"></BaseIcon>
        </button>

        <button :data-index="index" @click="showEdit = !showEdit" v-if="!showEdit">
        <BaseIcon ico="redact"></BaseIcon>
        </button>

        <button :data-index="index" @click="deleteItem">
        <BaseIcon ico="delete"></BaseIcon>
        </button>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import BaseSelectIsPresent from "@/components/global/BaseSelectIsPresent";

export default {
  name: "ListRolesMeetingItem",
  components: { BaseSelectIsPresent, BaseIcon },
  data() {
    return {
      showInput: false,
      showEdit: false,
      value: ""
    };
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    inputValue() {
      return this.value || this.text
    }
  },
  methods: {
    deleteItem(e) {
      this.$emit("deleteListItem", e);
    },
    onChange(value) {
        console.log(value);
    },
    editItem(e) {
      console.log(e)
      this.$emit("editListItem", {
        text: e.target.value,
        index: this.index
      });
      this.value = e.target.value;
      this.showEdit = false;
    }
  }
};
</script>
