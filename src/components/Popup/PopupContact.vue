<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --contact">
    <template slot="close-icon"></template>

    <h2>Видеоконференция</h2>


    <!--    contact-->
    <div v-if="openTab == 'contact'">
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

    <!--    setnum-->
    <div v-if="openTab == 'setnum'">
      <span class="setnum">Набор</span>
      <div class="block-popup__add-address">
        <div>
          <h3>Введите адрес контакта</h3>

          <div class="other-input --icon">
            <input type="text" name="IP" placeholder="IP-адрес">

            <button @click="openModalConference">
              <BaseIcon ico="phone"></BaseIcon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--    Recent-->
    <div v-if="openTab == 'recent'">
      <span class="setnum">Недавние</span>
      <div class="block-popup__recent">
        <ul>
          <li>
            <BaseIcon ico="callout" class-names="call"></BaseIcon>
            <span>СИЗО №12 г. Норильск</span>
            <span>26.04 12:32 32 мин.</span>
            <div>
              <button @click="openModalAddContact">
                <BaseIcon ico="plus" class-names="plus"></BaseIcon>
              </button>

              <button @click="openModalConference">
                <BaseIcon ico="phone" class-names="phone"></BaseIcon>
              </button>
            </div>
          </li>
          <li v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
            <BaseIcon ico="callin" class-names="call"></BaseIcon>
            <span>СИЗО №12 г. Норильск {{ item }}</span>
            <span>26.04 12:32 32 мин.</span>
            <div>
              <button @click="openModalAddContact">
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
      <button @click="openTab = 'contact'">
        <BaseIcon ico="users"></BaseIcon>
        <span>Контакты</span>
      </button>

      <button @click="openTab = 'setnum'">
        <BaseIcon ico="setnum"></BaseIcon>
        <span>Набор</span>
      </button>

      <button @click="openTab = 'recent'">
        <BaseIcon ico="clock2"></BaseIcon>
        <span>Недавние</span>
      </button>
    </footer>
  </vue-modaltor>
</template>

<script>
import { mapMutations } from "vuex";
import { CLOSE_POPUP, OPEN_POPUP } from "@/store/type";
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "PopupEvents",
  components: { BaseIcon, BaseInput },
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      openTab: "contact"
    };
  },
  methods: {
    ...mapMutations([OPEN_POPUP, CLOSE_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
      this.CLOSE_POPUP(false);
    },
    opeModalNewContact() {
      this.OPEN_POPUP("newContact");
    },
    openModalRedact() {
      this.OPEN_POPUP("newContact");
    },
    openModalConference() {
      this.OPEN_POPUP("popupReference");
    },
    openModalAddContact() {
      this.OPEN_POPUP("popupAddParticipant");
    },
  }
};
</script>
