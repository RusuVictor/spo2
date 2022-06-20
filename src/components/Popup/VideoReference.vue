<template>
<!--  &#45;&#45;btn-back &#45;&#45;contact &#45;&#45;contact-address &#45;&#45;call-contact-->
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup "
    :class="{
      '--btn-back --contact --contact-address --call-contact --pt-equal':
        selected === 'contact',
      '--btn-back --contact --contact-address --contact-recent --pt-equal':
        selected === 'recent',
      '--contact --contact-address --pt-equal': selected === 'setnum'
    }"
  >
    <template slot="close-icon"></template>
<!--    <button class="block-popup__back">-->
<!--      <BaseIcon ico="arrow-left"></BaseIcon>-->
<!--      <span>Отменить</span>-->
<!--    </button>-->

    <h2 style="text-align: left;">Видеоконференция</h2>

    <div  v-if="selected === 'contact'">
      <div class="block-popup__search">
        <div class="line --between">
          <span>Контакты</span>

          <button
            type="button"
            class="btn-add --fz14 --fw500"
            @click="opeModalNewContact"
          >
            <BaseIcon ico="plus"></BaseIcon>
            <span>Добавить новый контакт</span>
          </button>
        </div>

        <BaseInput
          placeholder="Поиск"
          icon="search"
          :min="true"
          class-names="--full --border"
        ></BaseInput>
      </div>

      <div class="block-popup__table">
        <div class="block-popup__table-head">
          <span>Контакт</span>
          <span>IP-адрес</span>
        </div>

        <div class="block-popup__table-content">
          <table>
            <tr
              v-for="(item, index) in [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ]"
              :key="index"
            >
              <td>
                <span>СИЗО №12 г. Норильск {{ item }}</span>
              </td>
              <td>
                <span>192.168.212.2</span>
              </td>
              <td>
                <button @click="openModalRedact">
                  <BaseIcon ico="redact"></BaseIcon>
                </button>

                <button>
                  <BaseIcon ico="delete"></BaseIcon>
                </button>

                <button class="phone" @click="openModalConference">
                  <BaseIcon ico="phone" class-names="--green"></BaseIcon>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div  v-if="selected === 'setnum'">
      <div class="block-popup__add-address">
        <div>
          <h3>Введите адрес контакта</h3>

          <div class="other-input --icon">
            <BaseInput
              placeholder="IP-адрес"
              :small="true"
              :border="true"
              class-names="--full"
            ></BaseInput>

            <button>
              <BaseIcon ico="phone"></BaseIcon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div  v-if="selected === 'recent'" :class="'recent__section'">
      <span class="setnum">Недавние</span>
      <div class="block-popup__recent">
        <ul>
          <li>
            <BaseIcon ico="callout" class-names="call"></BaseIcon>
            <span>СИЗО №12 г. Норильск</span>
            <span>26.04 12:32 32 мин.</span>
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
            <span>26.04 12:32 32 мин.</span>
            <div>
              <button>
                <BaseIcon ico="plus" class-names="plus"></BaseIcon>
              </button>

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
import BaseInput from "@/components/global/BaseInput";
import { mapMutations } from "vuex";
import { CLOSE_POPUP, OPEN_POPUP } from "@/store/type";

export default {
  name: "PopupEvents",
  components: { BaseIcon, BaseInput },
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
      this.CLOSE_POPUP(false);
    },
    openModalAddContact() {
      this.OPEN_POPUP("popupAddParticipant");
    },
    openModalRedact() {
      this.OPEN_POPUP("NewContactRedact");
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
