<template>
  <div>
    <button @click="isShow = !isShow">顯示 / 隱藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">你好啊!!</h1>
      <h1 v-show="isShow" key="2">尚硅谷!!</h1>
    </transition-group>
  </div>
</template>

<script>
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
/* 進入的起點 */
/* 離開的終點 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100px);
}

/* 進入的過程中 */
/* 離開的過程中 */
.hello-enter-active,
.hello-leave-actvie {
  transition: 0.5s linear;
}

/* 進入的終點 */
/* 離開的起點 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}
</style>
