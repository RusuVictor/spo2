<template>
  <div class="cameras">
    <!--Num of Cam-->
    <div class="cameras__numofcam">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="toggleCam(index)"
          :class="[{ active: index === activeCam }, '--hover-name']"
          :data-name="item.name"
        >
          {{ item.id }}
        </li>
        <li class="--plus">+</li>
      </ul>
    </div>

    <!--Grid-->
    <div class="cameras__grid" :class="{ '--min': gridMin }">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          @click="toggleCam(index)"
          :class="{ active: index === activeCam }"
        >
          <img :src="item.url" alt="img" />
        </li>
      </ul>
    </div>

    <!--Control-->
    <div class="cameras__control">
      <!--      <button>-->
      <!--        <BaseIcon ico="camera"></BaseIcon>-->
      <!--        <span>Проверить видеокамеру</span>-->
      <!--      </button>-->

      <!--      <button @click="gridMin = !gridMin" :class="{ active: gridMin }">-->
      <!--        <BaseIcon ico="grid"></BaseIcon>-->
      <!--        <span>отображение</span>-->
      <!--      </button>-->

      <BaseInput
        placeholder="IP-адрес видеокамеры 2"
        class="--full"
      ></BaseInput>

      <BaseInput
        :value="list[activeCam].name"
        placeholder="Имя камеры"
        class="--full"
      ></BaseInput>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/global/BaseInput";
export default {
  name: "TheCamera",
  components: { BaseInput },
  data() {
    return {
      activeCam: 0,
      list: [
        {
          id: 1,
          url: require("@/assets/img/camvid.jpg"),
          name: "Name Camera 1 Name Camera 1"
        },
        {
          id: 2,
          url: require("@/assets/img/camvid.jpg"),
          name: "Name Camera 2 Name Camera 2 Name Camera 2"
        },
        {
          id: 3,
          url: require("@/assets/img/camvid.jpg"),
          name: "Name Camera 3"
        },
        {
          id: 4,
          url: require("@/assets/img/camvid.jpg"),
          name: "Name Camera 4"
        },
        {
          id: 5,
          url: require("@/assets/img/camvid.jpg"),
          name: "Name Camera 5"
        }
      ],
      gridMin: false
    };
  },
  methods: {
    toggleCam(index) {
      this.activeCam = index;
    }
  }
};
</script>
