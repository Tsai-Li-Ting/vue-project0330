<template>
    <HeaderComponent/>
<h1>
    Hello {{name}}, Welcome on Update Restaurant Page!
</h1>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
export default{
    name:'UpdateComponent',
    data(){
        return{
            name:''
        }
    },
    components:{
        HeaderComponent
    },
    // 在實例掛載（mount）到 DOM 元素上之後被調用
    mounted() {
        // 從本地存儲中讀取 user-info 鍵對應的值，並將其賦值給 user 變數
        let user= localStorage.getItem("user-info")
        this.name = JSON.parse(user).name
        // 如果用戶未登錄，則直接跳轉到登錄頁面
        if(!user){
            // 將頁面路由跳轉到名稱為"SignUp"的路由
            this.$router.push({name:'SignUp'})
        }
    },
}
</script>