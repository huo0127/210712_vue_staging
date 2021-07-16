<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <slot :games="games">默認內容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["暴雪英霸", "英雄聯盟", "魔力寶貝", "仙境傳說"],
    };
  },
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
