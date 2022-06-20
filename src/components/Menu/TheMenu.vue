<template>
  <div id="nav" class="nav" >
    <div class="nav__avatar">
      <picture>
        <img src="@/assets/img/avatar.jpg" alt="IMG" />
      </picture>
      <span>Колесников Валерий Андреевич</span>
      <button>
        <span>Выйти</span>
        <BaseIcon ico="logout"></BaseIcon>
      </button>
    </div>

    <nav>
      <ul>
        <li v-for="(link, index) in list" :key="index">
          <router-link :to="link.path" v-if="link.path !== '/video'">
            <BaseIcon :ico="link.data.ico"></BaseIcon>
            <span>{{ link.data.text }}</span>
          </router-link>

          <button v-else @click="opeModalNewContact">
            <BaseIcon :ico="link.data.ico"></BaseIcon>
            <span>{{ link.data.text }}</span>
          </button>
        </li>

        <li>
          <button class="active-video">
            <BaseIcon ico="video"></BaseIcon>
            <span>Видеоконференция <em>0:15</em></span>
          </button>
        </li>
      </ul>

      <router-link to="/popups" tag="button">
        <span>Popups</span>
      </router-link>
      <router-link to="/login" tag="button">
        <span>Login</span>
      </router-link>
      <router-link to="/launch" tag="button">
        <span>Launch</span>
      </router-link>
    </nav>

    <!--Mic-->
    <div class="nav__mic">
      <img src="@/assets/ico/svg/mic.svg" alt="mic" />
    </div>

    <!--Video-->
    <div class="nav__video">
      <BaseIcon ico="video"></BaseIcon>
    </div>

    <!--Time-->
    <div class="nav__time">
      <span>Сб,</span>
      <em>18:15</em>
    </div>

    <!--Bottom-->
    <div class="nav__bottom">
      <div class="nav__bottom-text">
        <div class="nav__bottom-text-wrapper">
          <span>АД 12/231-20</span>
          <span>Идет запись: 22 мин 11 сек</span>
        </div>
        <span class="nav__bottom-text-mb">
          Запись:
          <br />
          22:11
        </span>
      </div>

      <div class="nav__button" @click="menuOpenClose">
        <BaseIcon ico="arrow-down"></BaseIcon>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import { mapMutations } from "vuex";
import { OPEN_POPUP } from "@/store/type";

export default {
  name: "ThisMenu",
  components: { BaseIcon },
  data: () => {
    return {};
  },
  computed: {
    list(e) {
      return e.$router.options.routes.filter(item => {
        if (!item.data.hide) return item;
      });
    }
  },
  methods: {
    ...mapMutations([OPEN_POPUP]),
    menuOpenClose() {
      document.body.classList.toggle("menu-closed");
    },
    opeModalNewContact() {
      this.OPEN_POPUP("VideoReference");
    }
  }
};
</script>
