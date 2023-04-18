<template>    
<img class="logo" src="../assets/fubon-logo.png" alt="">
<h1>
    Sign Up
</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="signUp">Sign Up</button>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods:{
        // 登入
        async signUp(){// 使用了async關鍵字聲明為異步函數
            // 使用await關鍵字等待axios.post()方法的執行結果
            /**在等待axios.post()方法的執行結果時，
             * JavaScript執行緒會暫停等待，
             * 直到該Promise對象被解決（resolved），
             * 即請求完成並得到了回應，
             * 或被拒絕（rejected），
             * 即請求失敗並得到了錯誤信息。
             * 一旦Promise對象被解決，
             * await表達式就會返回該Promise對象的值，
             * 然後程序將繼續執行await表達式後面的代碼。 */
            let result = await axios.post("http://localhost:3000/users",{
                email: this.email,
                name: this.name,
                password: this.password,
            })
            // 將 result 變量的值輸出到控制台中
            console.warn(result);
            //如果請求成功
            if(result.status == 201){
                // 將"user-info"的JSON字符串存儲到瀏覽器的localStorage中
                localStorage.setItem("user-info",JSON.stringify(result.data))
                // 將頁面路由跳轉到名稱為"HomePage"的路由
                this.$router.push({name:'HomePage'})
            }
        }
    },
    // 在實例掛載（mount）到 DOM 元素上之後被調用
    mounted() {
        // 從本地存儲中讀取 user-info 鍵對應的值，並將其賦值給 user 變數
        let user= localStorage.getItem("user-info")
        // 如果用戶已經登錄，則直接跳轉到首頁，使用戶不需要再次進行登錄操作
        if(user){
            // 將頁面路由跳轉到名稱為"HomePage"的路由
            this.$router.push({name:'HomePage'})
        }
    },
}
</script>

<style>
.logo{
    width: 200px;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    border-radius: 4px;
}

.register button{
    width: 320px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>