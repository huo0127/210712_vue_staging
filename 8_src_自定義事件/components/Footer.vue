<template>
  <div class="todo-footer">
    <!-- 事件寫法 @click="checkAll" :checked="isAll"-->
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneCount }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAlldone">
      清除已完成任务
    </button>
  </div>
</template>

<script scoped>
export default {
  name: "Footer",
  props: ["todos"],
  computed: {
    doneCount() {
      return this.todos.reduce(
        (pre, current) => (pre += current.done ? 1 : 0),
        0
      );
    },
    total() {
      return this.todos.length;
    },
    isAll: {
      //使用計算屬性的setter實現全選
      set(flag) {
        // console.log(flag);
        this.updateAll(flag);
      },
      get() {
        return this.doneCount === this.total && this.total > 0;
      },
    },
  },
  methods: {
    // 使用方法去全選
    // checkAll(event) {
    //   console.log("@", event.target.checked);
    //   this.updateAll(event.target.checked);
    // },
    clearAlldone() {
      if (confirm("確定所有已完成事項嗎?")) {
        this.clearAll();
      }
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
