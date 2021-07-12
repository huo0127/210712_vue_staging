<template>
<div> 
    <h2 class="name">學校名: {{name}}</h2>
    <h2 class="address">學校地址:{{address}}</h2>
    <h4 class="demo">我收到的名字是{{userName}}</h4>
</div>
</template>

<script>
export default {
    name:'School', //專門用於指定組件名
    //配置數據
    data(){
        console.log('School',this)
        return {
            name:'atguigu',
            address:'北七家鎮-洪福科技園'
        }
    },
    
    //聲明接收props---最完整的寫法: 限制了類型、控制了必要性、指定了默認
    // props:{
    //     userName:{
    //         type:String, //類型
    //         required:true, //必要性
    //         default:'隔壁老王' //默認值
    //     }
    // },
    
    //聲明接收props---次完整的寫法: 限制了類型
    // props:{
    //     userName:{
    //         type:String, //類型
    //     }
    // }
    
    //聲明接收props---精簡的寫法: 啥也不限制
    props:['userName']
}
</script>

<style scoped>
.name{
    background-color: gray;

}
.address{
    background-color: orange;
}
.demo{
    background-color: skyblue;
}
</style>