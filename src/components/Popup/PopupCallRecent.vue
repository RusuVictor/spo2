<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --btn-back --contact --contact-address --contact-recent">
    <template slot="close-icon"></template>
    <button class="block-popup__back">
      <BaseIcon ico="arrow-left"></BaseIcon>
      <span>Отменить</span>
    </button>

    <h2>Добавить участника</h2>

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
            <button>
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
    hideModal() {
      this.$emit("hidePopup");
    }
  }
};
</script>
