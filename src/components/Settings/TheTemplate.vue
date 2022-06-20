<template>
  <div class="template">
    <div class="template__grid">
      <div class="template__item">
        <div class="template__head">
          <span>Вид производства: </span>
          <BaseSelect
            :min="true"
            :list="[
              'Административное',
              'Административное2',
              'Административное3',
              'Административное4',
            ]"
          ></BaseSelect>
        </div>

        <div class="template__content">
          <TheEditor></TheEditor>
        </div>
      </div>

      <div class="template__item">
        <div class="template__head">
          <span>Тип события</span>
        </div>

        <div class="template__content-search">
          <BaseInput
            placeholder="Поиск"
            icon="search"
            :min="true"
            class-names="--full"
          ></BaseInput>
        </div>

        <div class="template__content">
          <div class="template__content-btn">
            <button
              class="btn-add --min --blue"
              @click="popupEvents = !popupEvents"
            >
              <BaseIcon ico="plus"></BaseIcon>
              <span>Добавить</span>
            </button>
          </div>

          <div class="template__drag">
            <DragDrop :items="allEventsTypes"></DragDrop>
          </div>
        </div>
      </div>
    </div>

    <PopupEvents
      :show="popupEvents"
      @hidePopup="popupEvents = false"
    ></PopupEvents>
  </div>
</template>

<script>
import BaseSelect from "@/components/global/BaseSelect";
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";
import DragDrop from "@/components/Settings/DragDrop";
import TheEditor from "@/components/Editor/TheEditor";
import PopupEvents from "@/components/Popup/PopupEvents";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TheTemplate",
  components: {
    TheEditor,
    DragDrop,
    BaseIcon,
    BaseSelect,
    BaseInput,
    PopupEvents,
  },
  data() {
    return {
      popupEvents: false,
    };
  },
  methods: {
    ...mapActions(["fetchEvents"]),
  },
  mounted() {
    this.fetchEvents();
  },
  computed: {
    ...mapGetters(["allEventsTypes"]),
  },
};
</script>
