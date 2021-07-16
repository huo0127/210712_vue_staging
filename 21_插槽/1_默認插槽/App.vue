<template>
  <div class="container">
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>
    <Category title="遊戲">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="卡通">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火鍋", "炭烤", "牛排", "拉麵"],
      games: ["暴雪英霸", "英雄聯盟", "魔力寶貝", "仙境傳說"],
      cartoons: ["《咒術迴戰》", "《排球少年》", "《海賊王》", "《火影忍者》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
