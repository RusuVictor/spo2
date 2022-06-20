<template>
    <div class="select-add-participant">
        <div
        class="select-block"
        :class="[
            {
            active: openedSelect,
            '--simple': simple,
            '--min': min,
            '--select-add': selectAdd,
            '--arrow': arrow
            },
            classNames
        ]"
        v-click-outside="hideSelect"
        >

            <button type="button" class="select-block__button" @click="selectToggle">
                <!--Add-->
                <span class="select-block__add" style="padding-left: 1rem;">
                    <BaseIcon ico="plus"></BaseIcon>
                    <span style="max-width: 152px">{{ selectAdd || "Добавить" }}</span>
                </span>

                <!--Arrow-->
                <div class="select-block__arrow">
                    <BaseIcon ico="arrow-down"></BaseIcon>
                </div>
            </button>

            <!--List-->
            <div class="select-block__list" v-show="openedSelect">
                <ul>
                    <li
                        v-for="(item, index) in newList"
                        :key="index"
                        :class="{ active: selectedIndex === index }"
                        @click="selectItem(item, index)"
                    >
                        {{ item.role }}
                    </li>
                </ul>
            </div>
        </div>

        <BaseSelect
          :list="['Лучший Секретарь', 'Ответственный Секретарь', 'Неприятный Секретарь', 'Секретарь Гос.уровня', 'Образованный Секретарь', 'Забывчивый Секретарь']"
          placeholder="Секретарь"
          :widthSelected="topPlaceholder"
          class-names="--full --border --small --list-min redact__session-input"
        ></BaseSelect>

        <BaseSelect
          :list="['Смелый Ответчик', 'Неуверенный Ответчик', 'Потерянный Ответчик', 'Загадочный Ответчик', 'Безимянный Ответчик']"
          placeholder="Ответчик"
          :widthSelected="topPlaceholder"
          class-names="--full --border --small --list-min redact__session-input"
        ></BaseSelect>

        <BaseSelect
          :list="['Истец 1', 'Истец 2', 'Истец 3', 'Истец 4', 'Istets']"
          placeholder="Истец"
          :widthSelected="topPlaceholder"
          class-names="--full --border --small --list-min redact__session-input"
        ></BaseSelect>

        <BaseSelect
          :list="['Судья', 'Скучный Судья', 'Странны Судья', 'Интересный Судья', 'Судья Изгой', 'Главный Судья']"
          placeholder="Судья"
          :widthSelected="topPlaceholder"
          class-names="--full --border --small --list-min --top redact__session-input"
        ></BaseSelect>
    </div>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import BaseSelect from "@/components/global/BaseSelect";
import ClickOutside from "vue-click-outside";

export default {
  name: "AddParticipantSelect",
  components: { BaseSelect, BaseIcon },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    classNames: {
      type: String,
      default: ""
    },
    arrow: {
      type: Boolean,
      default: false
    },
    min: {
      type: Boolean,
      default: false
    },
    selectAdd: {
      type: String,
      default: ""
    },
    selectPlaceholder: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      selected: this.firstselect ? false : "",
      selectedIndex: this.list.indexOf(this.list[0]),
      openedSelect: false,
      focus: false,
      wasOpenSecretary: false,
      wasOpenDefendant: false,
      wasOpenPlaintiff: false,
      wasOpenJudge: false,
    };
  },
  computed: {
    newList(e) {
      return e.list.filter(item => {
        if (item) return item;
      });
    }
  },
  methods: {
    selectToggle() {
      this.openedSelect = !this.openedSelect;
    },
    selectItem(item, index) {
      this.selected = item;
      this.selectedIndex = index;
      this.openedSelect = false;
    },
    hideSelect() {
      this.openedSelect = false;
    },
  },
  directives: {
    ClickOutside
  }
};
</script>
