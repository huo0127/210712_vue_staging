<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  mounted() {
    // console.log("School", this.x);
    this.$bus.$on("hello", (data) => {
      console.log("我是School組件, 收到了數據", data);
    });
  },

  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>
