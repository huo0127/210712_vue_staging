<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 頭部 -->
      <Header :addTodo="addTodo" />
      <!-- 列表 -->
      <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
      <!-- 底部 -->
      <Footer :todos="todos" :updateAll="updateAll" :clearAll="clearAll" />
    </div>
  </div>
</template>

<script>
//引入組件
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, List, Footer }, //註冊組件
  data() {
    //數據
    return {
      todos: [
        { id: "001", name: "抽菸", done: true },
        { id: "002", name: "喝酒", done: false },
        { id: "003", name: "敲代碼", done: true },
        { id: "004", name: "打東東", done: false },
      ],
    };
  },
  methods: {
    //添加一個todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    //更新一個todo---用id去更新
    // updateTodo(id, done) {
    //   this.todos = this.todos.map((todo) => {
    //     if (id === todo.id) return { ...todo, done };
    //     else return todo;
    //   });
    // },

    //更新一個todo---用index去更新 -- 數據在哪 更新數據的方法就在哪
    updateTodo(index, done) {
      this.todos[index].done = done;
    },

    //刪除一個todo---用index去刪除
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },

    //全選 或 全不選
    updateAll(done) {
      this.todos = this.todos.map((todo) => {
        return { ...todo, done };
      });
    },

    //清除所有已完成
    clearAll() {
      this.todos = this.todos.filter((todoObj) => {
        return !todoObj.done;
      });
    },
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
