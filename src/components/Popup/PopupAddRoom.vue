<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --dialog">
    <template slot="close-icon"></template>

    <h2 style="margin-bottom: 1.62rem">Добавить помещение</h2>

    <BaseSelect
      :list="roomsType"
      placeholder="Тип помещения"
      :simple="false"
      :selectPlaceholder="true"
      :firstselect="true"
      :value.sync="room.type"
      class-names="--full --border --small --list-min "
    ></BaseSelect>

    <BaseInput
      placeholder="№"
      :small="true"
      :border="true"
      :value.sync="room.name"
      class-names="--full"
    ></BaseInput>

    <div class="btn-group" style="margin-top: 0.62rem">
      <BaseButton @eventclick="createRoom" text="Добавить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";
import { mapMutations } from "vuex";
import { ADD_ROOM } from "@/store/type";
export default {
  name: "PopupEvents",
  components: { BaseButton, BaseSelect, BaseInput },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      room: {
        type: "",
        name: "",
      },
    };
  },
  computed: {
    roomsType() {
      if (this.$store.state.rooms.length) {
        const uniqueTypes = Array.from(
          new Set(this.$store.state.rooms.map((item) => item.type))
        );
        const types = uniqueTypes.filter((item) => item?.trim().toLowerCase());

        return types;
      } else {
        return ["Нет типа помещений"];
      }
    },
  },
  methods: {
    ...mapMutations([ADD_ROOM]),

    hideModal() {
      this.$emit("hidePopup");
    },

    createRoom() {
      if (this.room.type !== "" && this.room.name) {
        this.ADD_ROOM(this.room);
        this.hideModal();
      } else {
        alert("Заполните поля");
      }
    },
  },
};
</script>
