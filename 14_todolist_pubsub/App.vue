<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 頭部 -->
      <Header @addTodo="addTodo" />
      <!-- 列表 -->
      <List :todos="todos" />
      <!-- 底部 -->
      <Footer
        :todos="todos"
        @updateAllDone="updateAllDone"
        @clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, List, Footer },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    updateTodo(index, done) {
      this.todos[index].done = done;
    },
    //删除一个todo 一般來說寫msgName, 但沒用到 可以寫 _ 佔位
    deleteTodo(_, index) {
      this.todos.splice(index, 1);
    },
    updateAllDone(done) {
      this.todos = this.todos.map((todo) => {
        return { ...todo, done: done };
      });
    },
    clearAllTodo() {
      this.todos = this.todos.filter((todoObj) => {
        return !todoObj.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("updateTodo", this.updateTodo);
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("updateTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
