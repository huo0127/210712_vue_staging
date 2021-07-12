<template>
  <li
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
    :class="{ 'high-light': isEnter }"
  >
    <label>
      <input
        type="checkbox"
        v-model="checked"
        :checked="todo.done"
        @click="update(index, $event)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button
      class="btn btn-danger"
      :style="{ display: isEnter ? 'block' : 'none' }"
      @click="deleteT(index)"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ["todo", "updateTodo", "index", "deleteTodo"],
  data() {
    return {
      isEnter: false, //標示屬標是否移入
      checked: false,
    };
  },
  //更新唷個todo--用id去更新
  methods: {
    // update(id) {
    //   console.log(id, event.target.clecked);
    //   通知App去更新這個todo
    //   const { checked } = event.target;
    //   this.updateTodo(id, checked);
    // },

    //用index去更新
    update(index, event) {
      const { checked } = event.target;
      this.updateTodo(index, checked);
    },
    //用於index刪除一個todo
    deleteT(index) {
      if (confirm("確定刪除嗎")) this.deleteTodo(index);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.high-light {
  background-color: #ddd;
}
</style>
