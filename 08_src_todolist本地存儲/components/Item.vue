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
      <!--
            用id傳 
            !!事件優先
              優先響應update隨後改值
            @click="update(todo.id, $event)" 
            todoObj = {id,name,done} 沒有包含todoObj是數組的第幾個, 所以到list去改
      -->
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

<script scoped>
export default {
  name: "Item",
  props: ["todo", "updateTodo", "index", "deleteTodo"],
  methods: {
    //用ID去更新
    // update(id, event) {
    //   console.log(id, event.target.checked);
    //   通知APP去更新這個todo
    //   const { checked } = event.target;
    //   this.updateTodo(id, checked);
    // },

    //用index去更新
    update(index, event) {
      const { checked } = event.target;
      this.updateTodo(index, checked);
    },
    //用於index去刪除一個todo
    deleteT(index) {
      // console.log(index);
      if (confirm("確定刪除嗎?")) {
        this.deleteTodo(index);
      }
    },
  },

  data() {
    return {
      isEnter: false, //標示滑鼠是否移入
    };
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
