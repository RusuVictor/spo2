import Vue from "vue";
import Vuex from "vuex";
import api from "../api/index";

import {
  TOGGLE_APP_LAYOUT,
  CHANGE_HEAD_TITLE,
  OPEN_POPUP,
  CLOSE_POPUP,
  ADD_EDIT_ITEM,
  REMOVE_EDIT_ITEM,
  ADD_ROOM,
  REMOVE_ROOM,
  SELECT_ROOM,
  SELECT_TIME,
} from "./type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    default: "default",
    appsectionLayout: false,
    titlePage: "",
    activePopup: false,
    lastActivePopup: false,
    editItemId: null,
    rooms: [],
    selectedRoomName: "",
    selectedTime: "",
    hearings: [],
    roles: [],
    events: [],
    users: [],
    cases: [],
  },
  mutations: {
    [TOGGLE_APP_LAYOUT](state, payload) {
      state.appsectionLayout = payload;
    },
    [CHANGE_HEAD_TITLE](state, payload) {
      state.titlePage = payload;
    },
    [OPEN_POPUP](state, payload) {
      state.lastActivePopup = state.activePopup;
      state.activePopup = payload;
    },
    [CLOSE_POPUP](state, payload) {
      state.activePopup = payload;
    },
    [ADD_EDIT_ITEM](state, payload) {
      state.editItemId = payload;
    },
    [REMOVE_EDIT_ITEM](state) {
      state.editItemId = null;
    },
    [ADD_ROOM](state, payload) {
      payload.type = payload.type.type;
      this.state.rooms.push(payload);
      api.rooms.createRoom(payload).then();
    },
    [REMOVE_ROOM](state, payload) {
      state.rooms.splice(state.rooms.indexOf(payload), 1);

      api.rooms.removeRooms({ name: payload.name }).then((res) => {
        state.rooms = res.data;
      });
    },
    [SELECT_ROOM](state, payload) {
      state.selectedRoomName = payload;
    },
    [SELECT_TIME](state, payload) {
      state.selectedTime = payload;
    },
    updateCases(state, cases) {
      state.cases = cases;
    },
  },
  actions: {
    fetchRooms({ state }) {
      api.rooms.getRooms().then((res) => {
        state.rooms = res.data.body.rooms;
      });
    },
    fetchRoles({ state }) {
      api.roles.getRoles().then((res) => {
        state.roles = res.data.body.roles;
      });
    },
    fetchHearings({ state }) {
      const date = new Date();
      const [onlyDate] = date.toISOString().split("T");

      api.hearings
        .getHearings({
          date: state.selectedTime || onlyDate,
          room: state.selectedRoomName,
        })
        .then((res) => {
          state.hearings = res.data.body.hearings;
        });
    },
    fetchEvents({ state }) {
      api.createEvents.getEvents().then((res) => {
        state.events = res.data.body.events;
      });
    },
    fetchUsers({ state }) {
      api.users.getUSers().then((res) => {
        state.users = res.data.body.users;
      });
    },
    fetchCases({ commit }, obj = {}) {
      api.cases.getCases(obj).then((res) => {
        commit("updateCases", res.data.body.cases);
      });
    },
    clearCases({ commit }) {
      commit("updateCases", []);
    },
  },
  getters: {
    allEventsTypes(state) {
      return state.events;
    },
    allUsers(state) {
      return state.users;
    },
    filteredCases(state) {
      return state.cases;
    },
  },
  modules: {},
});
