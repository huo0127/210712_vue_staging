<template>
  <ul>
    <li :style="{ opacity }">歡迎學習vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("News組件即將被銷毀了");
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     console.log("@");
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },

  activated() {
    console.log("News組件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News組件被失活了");
    clearInterval(this.timer);
  },
};
</script>

<style></style>
