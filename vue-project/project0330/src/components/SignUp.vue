<template>    
<!-- logo -->
<img class="logo" src="../assets/fubon-logo.png" alt="">
<h1>
    Sign Up
</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" required>
    <input type="text" v-model="email" placeholder="Enter Email" required>
    <input type="password" v-model="password" placeholder="Enter Password" required>
    <button v-on:click="signUp">Sign Up</button>
    <p>
        <router-link to="/login" >LogIn</router-link>
    </p>
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

            // 表單驗證
            if (!this.email || !this.name || !this.password) {
                alert('請輸入必填欄位')
                return
            }

            // 發送post請求
            try{
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
            } catch (error) {
                console.error(error)
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

</style>