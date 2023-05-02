<template>
    <HeaderComponent/>
<h1>
    Hello {{name}}, Welcome on Home Page!
</h1>
<table border="1">
    <tr>
        <td>id</td>
        <td>name</td>
        <td>contact</td>
        <td>address</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td> {{ item.id }} </td>
        <td> {{ item.name }} </td>
        <td> {{ item.contact }} </td>
        <td> {{ item.address }} </td>
    </tr>
</table>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default{
    name:'HomePage',
    data(){
        return{
            name:'',
            restaurant:[],
        }
    },
    components:{
        HeaderComponent
    },
    // 在實例掛載（mount）到 DOM 元素上之後被調用
    async mounted() {
        // 從本地存儲中讀取 user-info 鍵對應的值，並將其賦值給 user 變數
        let user = localStorage.getItem("user-info")
        this.name = JSON.parse(user).name
        // 如果用戶未登錄，則直接跳轉到登錄頁面
        if(!user){
            // 將頁面路由跳轉到名稱為"SignUp"的路由
            this.$router.push({name:'SignUp'})
        }
        // 用axios GET API
        let result = await axios.get('http://localhost:3000/restaurants')
        console.log(result);
        this.restaurant = result.data
    },
}
</script>

<style>
td{
    width: 160px;
    height: 40px;
}
</style>