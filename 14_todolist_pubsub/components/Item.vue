<template>
  <li
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
    :class="{ 'high-light': isEnter }"
  >
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="update(index, $event)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button
      class="btn btn-danger"
      :style="{ display: isEnter ? 'block' : 'none' }"
      @click="deleteT"
    >
      删除
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  props: ["todo", "index"],
  data() {
    return {
      isEnter: false,
    };
  },
  methods: {
    update(index, event) {
      // console.log(index, event.target.checked);
      // this.updateTodo(index, event.target.checked);
      this.$bus.$emit("updateTodo", index, event);
    },
    deleteT(index) {
      // console.log(index);
      if (confirm("確定刪除嗎???")) pubsub.publish("deleteTodo", index);
    },
  },
};
</script>

<style>
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
