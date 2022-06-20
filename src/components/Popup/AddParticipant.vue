<template>
  <!--  &#45;&#45;btn-back &#45;&#45;contact &#45;&#45;contact-address &#45;&#45;call-contact-->
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup "
    :class="{
      '--btn-back --contact --contact-address --call-contact':
        selected === 'contact',
      '--btn-back --contact --contact-address --contact-recent':
        selected === 'recent',
      '--add-participant --btn-back': selected === 'setnum'
    }"
  >
    <template slot="close-icon"></template>
    <button class="block-popup__back">
      <BaseIcon ico="arrow-left"></BaseIcon>
      <span>Отменить</span>
    </button>

    <h2>Добавить участника</h2>

    <div v-if="selected === 'contact'">
      <div class="other-input">
        <BaseInput
          class="--full --border"
          name="IP"
          placeholder="IP-адрес"
        ></BaseInput>
      </div>

      <div class="block-popup__recent">
        <div class="block-popup__recent-head">
          <span>Контакт</span>
          <span>IP-адрес</span>
        </div>
        <ul>
          <li v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
            <span>СИЗО №12 г. Норильск {{ item }}</span>
            <span>192.168.212.2</span>
            <div>
              <button @click="openModalConference">
                <BaseIcon ico="phone" class-names="phone"></BaseIcon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="selected === 'setnum'">
      <form action="">
        <div class="other-input">
          <input type="text" name="IP" placeholder="IP-адрес" />
        </div>
      </form>
    </div>

    <div v-if="selected === 'recent'">
      <div class="block-popup__recent">
        <ul>
          <li>
            <BaseIcon ico="callin" class-names="call"></BaseIcon>
            <span class="first">СИЗО №12 г. Норильск</span>
            <span>26.04 12:32 32 мин.</span>
            <div>
              <button>
                <BaseIcon ico="phone" class-names="phone"></BaseIcon>
              </button>
            </div>
          </li>
          <li v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
            <BaseIcon ico="callout" class-names="call"></BaseIcon>
            <span class="first">СИЗО №12 г. Норильск {{ item }}</span>
            <span>26.04 12:32 32 мин.</span>
            <div>
              <button @click="openModalConference">
                <BaseIcon ico="phone" class-names="phone"></BaseIcon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <footer class="block-popup__footer">
      <button @click="selected = 'contact'">
        <BaseIcon ico="users"></BaseIcon>
        <span>Контакты</span>
      </button>

      <button @click="selected = 'setnum'">
        <BaseIcon ico="setnum"></BaseIcon>
        <span>Набор</span>
      </button>

      <button @click="selected = 'recent'">
        <BaseIcon ico="clock2"></BaseIcon>
        <span>Недавние</span>
      </button>
    </footer>
  </vue-modaltor>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import { mapMutations } from "vuex";
import { CLOSE_POPUP, OPEN_POPUP } from "@/store/type";

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
    return {
      selected: "contact"
    };
  },
  computed: {},
  methods: {
    ...mapMutations([OPEN_POPUP, CLOSE_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
    },
    openModalAddContact() {
      this.OPEN_POPUP("popupAddParticipant");
    },
    openModalRedact() {
      this.OPEN_POPUP("newContact");
    },
    openModalConference() {
      this.OPEN_POPUP("popupReference");
    },
    opeModalNewContact() {
      this.OPEN_POPUP("newContact");
    }
  }
};
</script>
