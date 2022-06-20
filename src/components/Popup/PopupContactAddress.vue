<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup --contact --contact-address">
    <template slot="close-icon"></template>

    <h2>Видеоконференция</h2>

    <span class="setnum">Набор</span>
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
import { CLOSE_POPUP } from "@/store/type";
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";

export default {
  name: "PopupEvents",
  components: { BaseInput, BaseIcon },
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
    ...mapMutations([CLOSE_POPUP]),
    hideModal() {
      this.CLOSE_POPUP(false);
      this.$emit("hidePopup");
    }
  }
};
</script>
