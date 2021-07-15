<template>
  <div>
    <button @click="isShow = !isShow">顯示 / 隱藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__swing"
    >
      <h1 v-show="!isShow" key="1">你好啊!!</h1>
      <h1 v-show="isShow" key="2">尚硅谷!!</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
key="1"

<style scoped>
h1 {
  background-color: orange;
}
</style>
