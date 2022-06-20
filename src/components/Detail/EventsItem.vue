<template>
  <fragment>
    <tr :class="{ '--play': play, '--disabled': disabled }">
      <td style="padding-right: 1rem; padding-left: 1rem" class="bevents-td --first">
        <div class="bevents-td__item">
          <div class="line">
            <input
              :disabled="!redact" 
              type="text"
              v-model="text"
            />
            <!--          <BaseSelect-->
            <!--            v-if="!redact"-->
            <!--            :simple="true"-->
            <!--            :min="true"-->
            <!--            class="&#45;&#45;full &#45;&#45;no-selected"-->
            <!--            :list="[-->
            <!--              '',-->
            <!--              'Открытие судебного заседания',-->
            <!--              'Проверка явки',-->
            <!--              'Пример строки'-->
            <!--            ]"-->
            <!--          ></BaseSelect>-->

            <button
              class="bevents-btn arrow"
              :class="{ '--active': detail }"
              @click="detail = !detail"
              v-if="!redact"
            >
              <BaseIcon ico="arrow-down"></BaseIcon>
            </button>

            <button class="bevents-btn" v-show="!redact" @click="redact = true">
              <BaseIcon ico="redact"></BaseIcon>
            </button>

            <button class="bevents-btn redact" v-show="redact" @click="changeEvent(true)">
              <BaseIcon ico="check-o"></BaseIcon>
            </button>

            <button class="bevents-btn" v-show="redact" @click="changeEvent(false)">
              <BaseIcon ico="delete"></BaseIcon>
            </button>
          </div>
        </div>
      </td>

      <td  style="padding-right: 0" class="bevents-td --start">
        <div class="bevents-td__item --vert-center">
          <span>{{timeFormate(time.start)}}</span>
        </div>
      </td>

      <td class="bevents-td --end" style="padding-right: 0; width: 5rem !important;">
        <div class="bevents-td__item --vert-center" style="width: 5rem !important;">
          <span class="time-to" style="padding-left: 30px;;">{{timeFormate(time.end)}}</span>
        </div>
      </td>

      <td class="bevents-td --control">
        <div class="bevents-td__item --vert-center --no-wrap">
<!--          <button class="bevents-btn &#45;&#45;play" style="margin-right: 2rem">-->
<!--            <BaseIcon ico="delete"></BaseIcon>-->
<!--          </button>-->

          <div class="status-block">
            <i>
              <BaseIcon ico="clock"></BaseIcon>
            </i>
          </div>

          <button style="margin-right: 1rem;" class="bevents-btn --play">
            <BaseIcon ico="play"></BaseIcon>
          </button>
        </div>
      </td>
    </tr>
    <tr :class="{ '--play': play, '--disabled': disabled }" v-show="redact || detail">
      <td class="bevents-td --first --textarea" colspan="4">
        <div class="bevents-td__item">
          <div class="line">
            <textarea :disabled="!redact" v-model="notes" placeholder="Примечание"></textarea>
          </div>
        </div>
      </td>
    </tr>
  </fragment>
</template>

<script>
import BaseIcon from "@/components/global/BaseIcon";
import { Fragment } from "vue-fragment";

export default {
  name: "EventsItem",
  components: { BaseIcon, Fragment },
  props: {
    id: String,
    play: Boolean,
    disabled: Boolean,
    text: String,
    notes: String,
    time: Object
  },
  data() {
    return {
      redact: false,
      detail: false
    };
  },
  methods: {
    timeFormate(minutes) {
      const hours = Math.floor(minutes / 60)
      const minute = minutes % 60
      return `${hours.toString().length == 1 ? '0' + hours : hours}:${minute.toString().length == 1 ? '0' + minute : minute}`
    },
    changeEvent(save) {
      if (save) {
        this.$api.hearingEvents.updateEvent(
          {
            id: this.id,
            hearing: "df6abe05-67ec-494e-8a91-3fc169862b0b",
            event: this.text,
            start: 1,
            end: 60,
            notes: this.notes
          }
        )
        this.$emit('update:text', this.text)
        this.$emit('update:notes', this.notes)
      } else {
        this.$emit('removeEvent', this.id)
      }
      this.redact = false
    }
  }
};
</script>


