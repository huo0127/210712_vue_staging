<template>
  <ul class="todo-main">
    <!--  用id傳  v-for="(todoObj in todos" 沒有:index="index"-->
    <!-- todo => item展現不同的名字  -->
    <Item
      v-for="(todoObj, index) in todos"
      :key="todoObj.id"
      :todo="todoObj"
      :updateTodo="updateTodo"
      :index="index"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script scoped>
import Item from "./Item";

export default {
  name: "List",
  components: { Item },
  props: ["todos", "updateTodo", "deleteTodo"], //聲明接收props, 聲明後可以在vc上找得到
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
