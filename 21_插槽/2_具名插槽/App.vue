<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.google.com/?hl=zh-tw">更多美食</a>
    </Category>
    <Category title="遊戲">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.google.com/?hl=zh-tw">單機遊戲</a>
        <a href="https://www.google.com/?hl=zh-tw">網路遊戲</a>
      </div>
    </Category>
    <Category title="卡通">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        slot="center"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.google.com/?hl=zh-tw">經典</a>
          <a href="https://www.google.com/?hl=zh-tw">熱門</a>
          <a href="https://www.google.com/?hl=zh-tw">推薦</a>
        </div>
        <h4 slot="footer">歡迎來看電影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
