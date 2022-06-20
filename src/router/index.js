import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Archive from "../views/Archive.vue";
import Users from "../views/Users.vue";
import Settings from "../views/Settings.vue";
import Detail from "../views/Detail.vue";
import Launch from "@/views/Launch";
import Login from "@/views/Login";
import Popups from "@/views/Popups";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    data: {
      text: "Список заседаний",
      ico: "books"
    }
  },
  {
    path: "/archive",
    name: "Archive",
    component: Archive,
    data: {
      text: "Архив заседаний",
      ico: "archive"
    }
  },
  {
    path: "/video",
    name: "Video",
    data: {
      text: "Видеоконференция",
      ico: "video"
    }
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
    data: {
      text: "Объекты и пользователи",
      ico: "people"
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    data: {
      text: "Настройки",
      ico: "gears"
    }
  },
  {
    path: "/reference",
    name: "Reference",
    data: {
      text: "Справка",
      ico: "reference"
    }
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    data: {
      hide: true
    }
  },
  {
    path: "/launch",
    name: "Launch",
    component: Launch,
    data: {
      hide: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    data: {
      hide: true
    }
  },
  {
    path: "/popups",
    name: "Popups",
    component: Popups,
    data: {
      hide: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
