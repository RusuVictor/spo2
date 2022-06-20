<template>
  <vue-modaltor :visible="show" @hide="hideModal" class="block-popup" >
    <template slot="close-icon"></template>
    <h2>{{ title }}</h2>

    <BaseInput
      placeholder="Номер дела"
      :small="true"
      :border="true"
      class-names="--full redact__session-input"
      :value.sync="redactSession.caseNumber"
    ></BaseInput>

    <!--Data/Time-->
    <div class="group">
      <BaseInputCalendar
        class-names="--full"
        :value.sync="dateTime.date"
      ></BaseInputCalendar>

      <BaseSelect
        :list="[11, 2, 3, 4, 5, 6]"
        placeholder="Часов"
        :value.sync="dateTime.hour"
        class-names="--full --border --small --list-min redact__session-input"
      ></BaseSelect>

      <BaseSelect
        :list="[15, 2, 3, 4, 5, 6]"
        placeholder="Минут"
        :value.sync="dateTime.minute"
        class-names="--full --border --small --list-min redact__session-input"
      ></BaseSelect>
    </div>

    <BaseSelect
      :list="['Вид производства', 2, 3, 4, 5, 6]"
      placeholder="Вид производства"
      :widthSelected="topPlaceholder"
      :value.sync="redactSession.caseType"
      class-names="--full --border --small --list-min redact__session-input"
    ></BaseSelect>

    <BaseInput
      placeholder="Истец"
      :small="true"
      :border="true"
      :value.sync="redactSession.plaintiffs[0]"
      class-names="--full redact__session-input"
    ></BaseInput>

    <BaseSelect
      :list="['Истец 1', 'Истец 2', 'Истец 3', 'Истец 4', 'Истец 5']"
      :min="true"
      placeholder="Добавить участника"
      selectAdd="Добавить участника"
      :select-add="true"
      :arrow="true"
      class="redact__session-input"
    ></BaseSelect>
    <br />
    <BaseInput
      placeholder="Ответчик"
      :small="true"
      :border="true"
      :value.sync="redactSession.lawyers[0]"
      class-names="--full redact__session-input"
    ></BaseInput>

    <BaseSelect
      :list="['Ответчик 1', 'Ответчик 2', 'Ответчик 3', 'Ответчик 4', 'Ответчик 5']"
      :min="true"
      placeholder="Добавить участника"
      selectAdd="Добавить участника"
      :select-add="true"
      :arrow="true"
      class-names="redact__session-input"
    ></BaseSelect>
    <br />
    <BaseSelect
      :list="['Секретарь', 2, 3, 4, 5, 6]"
      placeholder="Секретарь"
      :widthSelected="topPlaceholder"
      :value.sync="redactSession.secretaryID"
      class-names="--full --border --small --list-min redact__session-input"
    ></BaseSelect>

    <BaseSelect
      :list="['Судья', 'Судья 2', 'Судья 3', 'Судья 4', 'Судья 5', 'Судья 6']"
      placeholder="Судья"
      :widthSelected="topPlaceholder"
      :value.sync="redactSession.judgeID"
      class-names="--full --border --small --list-min --top redact__session-input"
    ></BaseSelect>

    <BaseSelect
      :list="rooms"
      placeholder="Помещение"
      :widthSelected="topPlaceholder"
      :value.sync="redactSession.room"
      class-names="--full --border --small --list-min --top redact__session-input"
    ></BaseSelect>

    <div class="btn-group">
      <BaseButton @eventclick="createRedactSession" :text="buttonText"></BaseButton>
      <BaseButton text="Отмена" class="--silver"></BaseButton>
    </div>
  </vue-modaltor>
</template>

<script>
import BaseButton from "@/components/global/BaseButton";
import BaseInputCalendar from "@/components/global/BaseInputCalendar";
import BaseSelect from "@/components/global/BaseSelect";
import BaseInput from "@/components/global/BaseInput";
import { mapMutations } from "vuex";
import { REMOVE_EDIT_ITEM } from "@/store/type";

export default {
  name: "PopupRedactSession",
  data() {
    return {
      placeholder: "Вид производства",
      topPlaceholder: "1.525rem",

      dateTime: {
        date: '',
        hour: '',
        minute: ''
      },

      redactSession: {
        caseNumber: '',
        caseType: '',
        dateTime: '',
        plaintiffs: [],
        lawyers: [],
        secretaryID: '',
        judgeID: '',
        room:'',

        status: "waiting",

        prosecutors: [
          "prosecutor_1",
          "prosecutor_2"
        ],
        defendants: [
          "defendant_1",
          "defendant_2"
        ],
      }
    }
  },
  components: { BaseInputCalendar, BaseButton, BaseSelect, BaseInput },
  props: {
    title: {
      type: String,
      default: "Редактировать"
    },
    show: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: "Сохранить"
    }
  },
  computed: {
    rooms() {
      return this.$store.state.rooms.length ? this.$store.state.rooms : ["Нет помещений"];
    },
    dateTimeFormated() {
      if (this.dateTime.date) {
        this.dateTime.date.setHours(this.dateTime.hour)
        this.dateTime.date.setMinutes(this.dateTime.minute)
        this.dateTime.date.setSeconds(0)
        return this.dateTime.date.toISOString().slice(0, -1) + "+0000"
      } else {
        const nowDateTime = new Date(Date.now())
        nowDateTime.setHours(this.dateTime.hour)
        nowDateTime.setMinutes(this.dateTime.minute)
        nowDateTime.setSeconds(0)
        return nowDateTime.toISOString().slice(0, -1) + "+0000"
      }
    }
  },
  methods: {
    ...mapMutations([REMOVE_EDIT_ITEM]),

    hideModal() {
      this.$emit("hidePopup");
    },

    async createRedactSession() {
      this.redactSession.dateTime = this.dateTimeFormated

      const fullContainedForm = Object.values(this.redactSession).filter(item => {
        return Boolean(item.toString().toLowerCase().trim())
      })

      if (fullContainedForm.length === Object.values(this.redactSession).length) {
        let res = "";
        this.hideModal()
        this.redactSession.room = this.redactSession.room.name
        if (this.title.toLowerCase() === "редактировать") {
          res = await this.$api.hearings.updateHearing({body: this.redactSession})
        } else {
          console.log(this.redactSession)
          res = await this.$api.hearings.createHearing({id: this.redactSession.id, body: this.redactSession})
        }

        if (res) {
          res.then(res => {
            console.log(res)
          })
        }

        this.redactSession = {
          caseNumber: '',
          caseType: '',
          dateTime: '',
          plaintiffs: [],
          lawyers: [],
          secretaryID: '',
          judgeID: '',
          room:'',

          status: "waiting",

          prosecutors: [
            "prosecutor_1",
            "prosecutor_2"
          ],
          defendants: [
            "defendant_1",
            "defendant_2"
          ],
        }
      } else {
        alert("Заполните поля")
      }

    },

  },

  watch: {
    show(newValue) {
      if(!newValue) this.REMOVE_EDIT_ITEM()
    }
  }
};
</script>
