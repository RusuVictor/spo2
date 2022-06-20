<template>
  <fragment>
    <tr class="meetings__table-head">
      <td style="padding-right: 0">
        <span>АД 12/231-20</span>
      </td>
      <td style="padding-right: 0">
        <span>15.11.20 / 12:20</span>
      </td>
      <td style="padding-right: 0">
        <span>Административное</span>
      </td>
      <td style="padding-right: 0">
        <BaseStatus
          text="Завершена: 00:22 мин"
          :progress="progress"
          :type="status"
        ></BaseStatus>
      </td>
      <td class="--width-minimal --btn-ctrl --btn-min --dot-center --align-center">
        <div class="dot --margin-right" :class="{active: animation, '--red': dotStatus}"></div>

        <span @click="menuOpenClose">
          <router-link class="btn btn--home-row --min " to="/detail" tag="button">
            <span>открыть</span>
          </router-link>
        </span>

        <button type="button" class="btn --min" @click="$emit('clickTransfer')">
          <span>Перенести</span>
        </button>
      </td>
      <td class="--align-left" style="width: 11rem;">
        <button
          class="btn-more"
          @click="detail = !detail"
          :class="{ active: detail }"
        >
          <span>Подробнее</span>
          <BaseIcon ico="arrow-down"></BaseIcon>
        </button>

        <button class="redact" @click="popupRedactSession()" style="margin-right: 1rem;">
          <BaseIcon ico="redact"></BaseIcon>
        </button>
      </td>
    </tr>

    <TableHomeDetail v-show="detail"></TableHomeDetail>
  </fragment>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import { Fragment } from "vue-fragment";
import TableHomeDetail from "@/components/Table/TableHomeDetail";
import BaseStatus from "@/components/global/BaseStatus";
import { mapMutations } from "vuex";
import { OPEN_POPUP, ADD_EDIT_ITEM } from "@/store/type";

export default {
  name: "TableHomeRow",
  components: { BaseStatus, TableHomeDetail, BaseIcon, Fragment },
  props: {
    status: {
      type: String,
      default: "complete"
    },
    dotStatus: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      detail: false,
      progress: 0,
    };
  },
  mounted() {
    let interval = setInterval(() => {
      if (this.progress >= 100) clearInterval(interval);
      this.progress += Math.round(Math.random() * 10);

      if (this.progress > 100) this.progress = 100;
    }, 500);
  },
  methods: {
    ...mapMutations([OPEN_POPUP, ADD_EDIT_ITEM]),
    popupRedactSession() {
      this.ADD_EDIT_ITEM(2)
      this.OPEN_POPUP("popupRedactSession");
    },
    menuOpenClose() {
      document.body.classList.add("menu-closed");
    },
  }
};
</script>

<style scoped></style>
