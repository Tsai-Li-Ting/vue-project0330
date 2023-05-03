<template>
    <HeaderComponent/>
<h1>
    Hello {{name}}, Welcome on Add Restaurant Page!
</h1>
<form class="add">
    <input type="text" name="name" placeholder="Enter Name" required v-model="restaurant.name">
    <input type="text" name="contact" placeholder="Enter contact" required v-model="restaurant.contact">
    <input type="text" name="address" placeholder="Enter address" required v-model="restaurant.address">
    <button type="button" v-on:click="addRestaurant">Add new restaurant</button>
</form>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'
export default{
    name:'AddComponent',    
    data(){
        return{
            name: '',
            restaurant:{
                name:'',
                contact:'',
                address:'',                
            }            
        }
    },
    methods:{

        //新增餐廳
        async addRestaurant(){

            // 表單驗證
            if (!this.restaurant.name || !this.restaurant.address || !this.restaurant.contact) {
                console.log("請輸入必填欄位");
                alert('請輸入必填欄位')                
                return
            }

            console.warn(this.restaurant);

            // 發送post請求
            let result = await axios.post("http://localhost:3000/restaurants",{
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            } )
            console.warn('result', result); //整個物件
            console.warn('result.status', result.status); //result.status

            //如果請求成功
            if(result.status == 201){                
                // 將頁面路由跳轉到名稱為"HomePage"的路由
                this.$router.push({name:'HomePage'})
            }
            console.warn(result);
            
        }
    },
    components:{
        HeaderComponent
    },
    // 在實例掛載（mount）到 DOM 元素上之後被調用
    mounted() {
        // 從本地存儲中讀取 user-info 鍵對應的值，並將其賦值給 user 變數
        let user = localStorage.getItem("user-info")
        // JSON.parse()：JSON 變物件
        this.name = JSON.parse(user).name
        // 如果用戶未登錄，則直接跳轉到登錄頁面
        if(!user){
            // 將頁面路由跳轉到名稱為"SignUp"的路由
            this.$router.push({name:'SignUp'})
        }
    },
}
</script>

//***創建一個可添加餐廳的表單****
//新增input
//新增樣式
//定義屬性
//雙向綁訂
//調用一個addRestaurant()方法並且將資料印出console.warn()