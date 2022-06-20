<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --list-roles"
  >
    <button class="block-popup__back">
      <BaseIcon ico="arrow-left"></BaseIcon>
      <span>Назад</span>
    </button>

    <h2>Список ролей</h2>

    <div class="line --end">
      <button
        type="button"
        class="btn-add --fz14 --fw500"
        @click="showInput = !showInput"
      >
        <BaseIcon ico="plus"></BaseIcon>
        <span>Новая роль</span>
      </button>
    </div>

    <div class="list-roles --scrolbar-min" v-if="list.length || showInput">
      <input
        class="list-roles-add"
        type="text"
        placeholder="Новая роль"
        name="new-item"
        v-model="listInput"
        v-if="showInput"        
        @keyup.enter="addItem"
      />

      <ListRolesItem
        v-for="(item, index) in list"
        :text="item"
        :index="index"
        :key="index"
        @deleteListItem="deleteItem"
        @editListItem="editItem"
      ></ListRolesItem>
    </div>

    <div class="center" v-if="showInput" @click='addItem'>
      <BaseButton text="Добавить"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseIcon from "@/components/global/BaseIcon";
import ListRolesItem from "@/components/Popup/ListRolesItem";
export default {
  name: "PopupAddObj",
  components: { BaseIcon, BaseButton, ListRolesItem },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      showInput: false,
      listInput: "",
    };
  },
  methods: {
    addItem() {
      console.log(this.listInput);
      if (this.listInput) {
        this.list.push(this.listInput);
        this.listInput = "";
        this.showInput = false;
      }
    },
    deleteItem(e) {
      let index = e.target.dataset.index;
      this.list.remove(index);
      e.target.parentNode.remove();
    },
    editItem(e) {
      console.log(e)
      this.list[e.index] = e.text;
    },
    hideModal() {
      this.$emit("hidePopup");
    },
    updateList(e) {
      console.log(e);
    }
  }
};
</script>
