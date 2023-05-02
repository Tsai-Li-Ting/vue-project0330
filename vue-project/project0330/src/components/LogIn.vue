<template>
    <!-- logo -->
<img class="logo" src="../assets/fubon-logo.png" alt="">
<h1>
    Login
</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" required>
    <input type="password" v-model="password" placeholder="Enter Password" required>
    <button v-on:click="logIn">Login</button>
    <p>
        <router-link to="/sign-up" >Sign Up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods:{
        // 發送get請求        
        async logIn(){   

            // 表單驗證
            if (!this.email || !this.password) {
                alert('請輸入必填欄位')
                return
            }

            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            console.log('result', result); //整個物件
            console.log('result.data[0]', result.data[0]); //物件.data裡面的資料 //{"email": "ray@test.com", "name": "ray", "password": "ray@123", "id": 3}
                        
            try{ 
                //如果請求成功
                if(result.status == 200 && result.data.length>0){                
                    // 將"user-info"的JSON字符串存儲到瀏覽器的localStorage中
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    // 將頁面路由跳轉到名稱為"HomePage"的路由
                    this.$router.push({name:'HomePage'})
                }
                console.warn(result);
            } catch (error) {
                console.error(error)
            }          
            
        }
    },
    beforeCreate(){}, //Vue 實體被建立，狀態與事件都尚未初始化
    created(){}, //Vue 實體已建立，狀態與事件已初始化完成
    beforeMount(){}, //Vue 實體尚未與模板 (DOM 節點) 綁定
    mounted(){ //Vue 實體與掛載完成
        // 從本地存儲中讀取 user-info 鍵對應的值，並將其賦值給 user 變數
        let user= localStorage.getItem("user-info")
        // 如果用戶已經登錄，則直接跳轉到首頁，使用戶不需要再次進行登錄操作
        if(user){
            // 將頁面路由跳轉到名稱為"HomePage"的路由
            this.$router.push({name:'HomePage'})
        }
    },
    beforeUpdate(){}, //當狀態被變動時，畫面同步更新前
    updated(){}, //當狀態被變動時，畫面已同步更新完成
    beforeUnmount (){}, //Vue 實體物件被銷毀前
    unmounted (){}, //Vue 實體物件被銷毀完畢
}
</script>