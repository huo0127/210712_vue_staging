<template>
  <div>
    <!-- 
          ref的使用:
            1. 標籤中直接編寫 ref="xxxx"
            2. 通過this.$refs.xxxx獲取
            3. 備註:
                3-1. 若給html內痔標籤打ref, 則獲取到的是真實DOM節點
                3-2. 若給組件標籤打ref, 則獲取到到的是組件實例對象
       -->
    <button ref="btn" @click="showData">點我獲取焦點</button>
    <!-- 給input標籤打了一個ref, input標籤是html內置的標籤, 所以通過this.$refs.keyWord或取到的是真實DOM節點 -->
    <input type="text" ref="keyWord" />
    <!-- 給School標籤打了一個refs, School標籤是組件標籤, 所以通過this.$refs.xuexiao或取到的是組件實例 -->
    <School ref="xuexiao" :userName="userName" />
  </div>
</template>

<script>
//引入School組件
import School from "./components/School";
export default {
  data() {
    return {
      userName: "老劉",
    };
  },
  //註冊組件---局部註冊
  components: { School },
  //配置放法
  methods: {
    showData() {
      alert(this.$refs.btn.innerText);
      this.$refs.keyWord.focus();
      console.log(this.$refs.xuexiao);
    },
  },
};
</script>
