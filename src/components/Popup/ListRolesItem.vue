<template>
  <div class="list-roles__item" :class="{'--edit': showEdit}">
    <BaseChecbox
      class-names="--color-silver --max"
      :text="inputValue"
      v-if="!showEdit"
    ></BaseChecbox>

    <div class="list-roles__edit" v-if="showEdit">
      <input type="text" ref="editInput" :value="inputValue" @keyup.enter="editItem">
    </div>

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
</template>

<script>
import BaseChecbox from "@/components/global/BaseChecbox";
import BaseIcon from "@/components/global/BaseIcon";

export default {
  name: "ListRolesItem",
  components: { BaseChecbox, BaseIcon },
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
