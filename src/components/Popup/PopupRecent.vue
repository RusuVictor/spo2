<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --contact --contact-address">
    <template slot="close-icon"></template>

    <h2>Видеоконференция</h2>

    <span class="setnum">Недавние</span>
    <div class="block-popup__recent">
      <ul>
        <li>
          <BaseIcon ico="callout" class-names="call"></BaseIcon>
          <span>СИЗО №12 г. Норильск</span>
          <data>
            <span>26.04</span>
            <span>12:32</span>
            <span>32 мин.</span>
          </data>
          <div>
            <button>
              <BaseIcon ico="plus" class-names="plus"></BaseIcon>
            </button>

            <button>
              <BaseIcon ico="phone" class-names="phone"></BaseIcon>
            </button>
          </div>
        </li>
        <li v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
          <BaseIcon ico="callin" class-names="call"></BaseIcon>
          <span>СИЗО №12 г. Норильск {{ item }}</span>
          <data>
            <span>26.04</span>
            <span>12:32</span>
            <span>32 мин.</span>
          </data>
          <div>
            <button @click="opeModalNewContact">
              <BaseIcon ico="plus" class-names="plus"></BaseIcon>
            </button>

            <button @click="openModalConference">
              <BaseIcon ico="phone" class-names="phone"></BaseIcon>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <footer class="block-popup__footer">
      <button>
        <BaseIcon ico="users"></BaseIcon>
        <span>Контакты</span>
      </button>

      <button>
        <BaseIcon ico="setnum"></BaseIcon>
        <span>Контакты</span>
      </button>

      <button>
        <BaseIcon ico="clock2"></BaseIcon>
        <span>Контакты</span>
      </button>
    </footer>
  </vue-modaltor>
</template>

<script>
import { mapMutations } from "vuex";
import { CLOSE_POPUP, OPEN_POPUP } from "@/store/type";
import BaseIcon from "@/components/global/BaseIcon";

export default {
  name: "PopupEvents",
  components: { BaseIcon },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapMutations([OPEN_POPUP, CLOSE_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
      this.CLOSE_POPUP(false);
    },
    openModalConference() {
      this.OPEN_POPUP("popupReference");
    },
    opeModalNewContact() {
      this.OPEN_POPUP("newContact");
    },
  }
};
</script>
