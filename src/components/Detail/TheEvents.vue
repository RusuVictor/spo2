<template>
  <div class="bevents" :class="selected">
    <div class="bevents__btns">
      <button
        @click="selected = 'table'"
        :class="{ active: selected === 'table' }"
      >
        <BaseIcon ico="list"></BaseIcon>
      </button>

      <button
        @click="selected = 'video'"
        class="video bevents__btns-video small-icon"
        :class="{ active: selected === 'video' }"
      >
        <BaseIcon ico="video"></BaseIcon>
      </button>

      <button
        @click="selected = 'search-word'"
        class="audio"
        :class="{ active: selected === 'search-word' }"
      >
        <BaseIcon ico="audio-track"></BaseIcon>
      </button>
    </div>

    <!--Table-->
    <table class="table" v-if="selected === 'table'">
      <thead>
      <tr>
        <th>
          <!--            <button class="btn-add &#45;&#45;blue">-->
          <!--            <BaseIcon ico="plus"></BaseIcon>-->
          <!--            <span>Создать событие</span>-->
          <!--            </button>-->

          <BaseSelect
            :list="eventCreateList"
            :min="true"
            placeholder="Создать событие"
            selectAdd="Создать событие"
            :select-add="true"
            :arrow="false"
            :value.sync="selectedCreateEvent"
            class-names="--color-blue --fz-18 --list-adaptive --arrow-blue"
          ></BaseSelect>
        </th>

        <th></th>

        <th></th>

        <th style="width: 60px;">
          <span>Начало</span>
        </th>

        <th>
          <span>Окончание</span>
        </th>

        <th></th>
      </tr>
      </thead>
      <tbody style="border-left: 3px solid #555867;">
        <EventsItem
          v-for="event of eventList"
          :key="event.id"
          :text.sync="event.event"
          :notes.sync="event.notes"
          :id="event.id"
          :time="{start: event.start, end: event.end}"
          @removeEvent="removeEvent"
        >
          
        </EventsItem>
        <!-- <EventsItem text="Проверка докумен|" :play="true"></EventsItem>
        <EventsItem text="Пример строки" :disabled="true"></EventsItem>

        <EventsItem text="Открытие судебного заседания"></EventsItem>
        <EventsItem text="Проверка докумен|" :play="true"></EventsItem>
        <EventsItem text="Пример строки" :disabled="true"></EventsItem>
        <EventsItem text="Открытие судебного заседания"></EventsItem>
        <EventsItem text="Проверка докумен|" :play="true"></EventsItem>
        <EventsItem text="Пример строки" :disabled="true"></EventsItem>

        <EventsItem text="Открытие судебного заседания"></EventsItem>
        <EventsItem text="Проверка докумен|" :play="true"></EventsItem>
        <EventsItem text="Пример строки" :disabled="true"></EventsItem> -->
      </tbody>
    </table>

    <!--Search word-->
    <div class="search-word" v-if="selected === 'search-word'">
      <BaseInput
        placeholder="Поиск по ключевым словам"
        icon="search"
        :min="true"
        class-names="--full"
      ></BaseInput>

      <!--Grid-->
      <div class="search-word__grid">

        <!--Event-->
        <div class="search-word__event">
          <span>Распознавание по событию</span>

          <ul>
            <li class="active">Открытие судебного заседания</li>
            <li>Проверка явки</li>
            <li>Речь судьи</li>
            <li>Пример строки</li>
          </ul>
        </div>

        <!--Interval-->
        <div class="search-word__interval">
          <span>Интервал записи</span>

          <div class="interval-items">
            <div class="interval-item">
              <span class="text">Начало</span>
              <!--              <b>00:11:42</b>-->
              <vue-timepicker format="HH:mm:ss" placeholder="__:__:__"></vue-timepicker>
            </div>
            <span></span>
            <div class="interval-item right">
              <span class="text">Конец</span>
              <!--              <b>00:12:39</b>-->
              <vue-timepicker format="HH:mm:ss" placeholder="__:__:__" class="right"></vue-timepicker>
            </div>
          </div>

          <div class="meet-text">
            <div class="meet-text__head">
              <span>Распознанный текст</span>

              <ul>
                <li class="left disabled">
                  <BaseIcon ico="arrow-down"></BaseIcon>
                </li>
                <li class="active">1</li>
                <li>2</li>
                <li>3</li>
                <li class="right">
                  <BaseIcon ico="arrow-down"></BaseIcon>
                </li>
              </ul>
            </div>
            <div class="meet-text__text">
              <p>Lorem ipsum dolor sit amet, <span data-time="00:11:42">consectetur</span> adipiscing elit. At laoreet
                morbi odio semper non tempus. Nisi, pretium urna, egestas scelerisque turpis mattis etiam venenatis,
                fames. Accumsan donec integer risus et egestas tellus pharetra, cursus. Odio scelerisque amet fames
                varius eu sollicitudin bibendum enim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At <span data-time="00:11:42">laoreet</span>
                morbi odio semper non tempus. Nisi, pretium urna, egestas scelerisque turpis mattis etiam venenatis,
                fames. Accumsan donec integer risus et egestas tellus pharetra, cursus. Odio scelerisque amet fames
                varius eu sollicitudin bibendum enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. At laoreet
                morbi odio semper non tempus. Nisi, pretium urna, egestas scelerisque turpis mattis etiam venenatis,
                fames. Accumsan donec integer risus et egestas tellus pharetra, cursus. Odio scelerisque amet fames
                varius eu sollicitudin bibendum enim.Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="select-video" v-if="selected === 'video'">
      <div class="select-video__grid">
        <div
          class="select-video__item"
          v-for="(item, index) in cameras"
          :key="index"
          :class="{ active: item.active }"
        >
          <img src="@/assets/img/video.jpg" alt="IMG">
        </div>
      </div>
      <div class="select-video__pagination">
        <ul>
          <li
            v-for="(item, index) in cameras"
            :key="index"
            :class="{ active: item.active }"
            @click="selectVideo(item)"
          >
            <em>Камера</em>
            <span>{{ item.id }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSelect from "@/components/global/BaseSelect";
import BaseIcon from "@/components/global/BaseIcon";
import BaseInput from "@/components/global/BaseInput";
import EventsItem from "@/components/Detail/EventsItem";
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  name: "TheEvents",
  components: { EventsItem, BaseSelect, BaseIcon, BaseInput, VueTimepicker },
  mounted() {
    this.$api.createEvents.getEvents()
      .then(res => {
        this.eventCreateList = res.data
      })
  },
  data() {
    return {
      selected: "video",
      eventCreateList: [],
      selectedCreateEvent: '',
      eventList: [
         {
          id: "07028d5d-82f3-4ddf-887f-857224427f8d",
          hearing: "df6abe05-67ec-494e-8a91-3fc169862b0b",
          event: "Открытие заседания",
          start: 20,
          end: 72,
          notes: "Довольно быстро провели открытие заседания"
        }
      ],
      
      cameras: [
        {
          id: 1,
          active: true,
          content: "@/assets/img/video.jpg"
        },
        {
          id: 2,
          active: false,
          content: "@/assets/img/camvid.jpg"
        },
        {
          id: 3,
          active: false,
          content: "@/assets/img/video.jpg"
        }
      ]
    };
  },
  methods: {
    selectVideo(value) {
      this.cameras.map(item => {
        item.active = value === item;
      });
    },
    removeEvent(eventId) {
      this.$api.hearingEvents.removeEvent({id: eventId})
      
      const startIndex = this.eventList.indexOf(this.eventList.find(item => item.id == eventId))
      this.eventList.splice(startIndex, 1)
    }
  },
  watch: {
    selectedCreateEvent(newValue) {
      if (newValue) {
        const sendData = {
            id: "07028d5d-82f3-4ddf-887f-857424427f8d",
            hearing: "df6abe05-67ec-494e-8a91-3fc169862b0b",
            event: newValue,
            start: 1,
            end: 60,
            notes: ""
          }
          
        this.$api.hearingEvents.createEvent(sendData)
        this.eventList.push(sendData)
      }
      this.selectedCreateEvent = ""
    }
  }
};
</script>
