<template>
  <vue-modaltor
    :visible="show"
    @hide="hideModal"
    class="block-popup"
    :class="{
      '--add-participant --btn-back': opened === 'contact',
      '--contact --contact-address --call-contact --show-close-btn':
        opened === 'recent',
      '--contact --contact-address': opened === 'setnum'
    }"
  >
    <template slot="close-icon"></template>

    <button @click="backTo" class="block-popup__back">
      <BaseIcon ico="arrow-left"></BaseIcon>
      <span>Отменить</span>
    </button>

    <div v-if="opened === 'contact'">
      <h2>Добавить участника</h2>
      <form action="">
        <div class="other-input">
          <BaseInput
            placeholder="IP-адрес"
            :small="true"
            :border="true"
            class-names="--full"
          ></BaseInput>
        </div>
      </form>
    </div>

    <div v-if="opened === 'setnum'">
      <h2>Видеоконференция</h2>

      <span class="setnum">Набор</span>
      <div class="block-popup__add-address">
        <div>
          <h3>Введите адрес контакта</h3>

          <div class="other-input --icon">
            <input type="text" name="IP" placeholder="Поиск">

            <button>
              <BaseIcon ico="phone"></BaseIcon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="opened === 'recent'">
      <h2>Добавить участника</h2>

      <div class="other-input">
        <input type="text" name="IP" placeholder="IP-адрес" />
      </div>

      <div class="block-popup__recent">
        <div class="block-popup__recent-head">
          <span>Контакт</span>
          <span>IP-адрес</span>
        </div>
        <ul>
          <li v-for="(item, index) in [1, 2, 3, 4, 5, 6]" :key="index">
            <span style="width: 36%;">СИЗО №12 г. Норильск {{ item }}</span>
            <span>192.168.212.2</span>
            <div>
              <button>
                <BaseIcon ico="phone" class-names="phone"></BaseIcon>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <footer class="block-popup__footer">
      <button @click="opened = 'contact'">
        <BaseIcon ico="users"></BaseIcon>
        <span>Контакты</span>
      </button>

      <button @click="opened = 'setnum'">
        <BaseIcon ico="setnum"></BaseIcon>
        <span>Набор</span>
      </button>

      <button @click="opened = 'recent'">
        <BaseIcon ico="clock2"></BaseIcon>
        <span>недавние</span>
      </button>
    </footer>
  </vue-modaltor>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";
import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "NewContact",
  components: { BaseInput, BaseIcon },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opened: "contact"
    };
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    hideModal() {
      this.$emit("hidePopup");
    },
    backTo() {
      this.OPEN_POPUP("popupReference");
    }
  }
};
</script>
