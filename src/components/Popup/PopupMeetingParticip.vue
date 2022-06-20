<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup --meetingparticip"
  >
    <template slot="close-icon"></template>
    <h2>Участники заседания</h2>

    <div style="margin-bottom: 1rem;">
<!--      <BaseSelect-->
<!--        :list="['Зал 11', 'Зал 12', 'Судебный пристав', 'Зал 14', 'Зал 15']"-->
<!--        :min="true"-->
<!--        placeholder="Добавить"-->
<!--        selectAdd="Добавить"-->
<!--        :select-add="true"-->
<!--        class="&#45;&#45;right"-->
<!--      ></BaseSelect>-->

      <button
        type="button"
        class="btn-add --min"
        @click="openPopupListRoles"
      >
        <BaseIcon ico="plus"></BaseIcon>
        <span>Добавить</span>
      </button>
    </div>

    <ul class="meetingparticip">
      <ListRolesMeetingItem
        v-for="(item, index) in ['Максимов Артем Аркадьевич1', 'Максимов Артем Аркадьевич2', 'Максимов Артем Аркадьевич3', 'Максимов Артем Аркадьевич4', 5, 6, 7, 8, 9]"
        :text="item"
        :index="index"
        :key="index"
        @deleteListItem="deleteItem"
        @editListItem="editItem"
      >
      </ListRolesMeetingItem>
    </ul>

    <div class="btn-group">
      <BaseButton text="Сохранить"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseIcon from "@/components/global/BaseIcon";
import ListRolesMeetingItem from "@/components/Popup/ListRolesMeetingItem";
import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "PopupMeetingParticip",
  components: { ListRolesMeetingItem, BaseIcon, BaseButton },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      date: new Date()
    };
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
    },
    openPopupListRoles() {
      this.OPEN_POPUP("popupListRoles");
    }
  }
};

// <li v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index">
//   <div class="meetingparticip__text">
//     <em>Истец {{ item }}</em>
//     <span>Максимов Артем Аркадьевич</span>
//   </div>
//   <div class="meetingparticip__control">
//     <em class="--green"></em>
//     <BaseSelect
//       :list="['Отсутствует', 'Присутствует']"
//       :min="true"
//       class="--fz-16 --arrow-min"
//     ></BaseSelect>

//     <button class="redact">
//       <BaseIcon ico="redact"></BaseIcon>
//     </button>

//     <button class="delete">
//       <BaseIcon ico="delete"></BaseIcon>
//     </button>
//   </div>
// </li>
</script>
