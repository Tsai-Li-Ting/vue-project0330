<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <router-link to="/update">Update Restaurant</router-link>
        <a v-on:click="logOut" href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name:"HeaderComponent",
    methods:{
        logOut(){
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
}
</script>
<style>

.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a{
    float: left;
    color: #fff;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>