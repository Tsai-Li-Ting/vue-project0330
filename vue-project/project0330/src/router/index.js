import HomePage from "../components/HomePage.vue"
import SignUp from "../components/SignUp.vue"
import LogIn from "../components/LogIn.vue"
import AddComponent from "../components/AddComponent.vue"
import UpdateComponent from "../components/UpdateComponent"
import {createRouter, createWebHistory} from "vue-router"

const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'AddComponent',
        component:AddComponent,
        path:'/add'
    },
    {
        name:'UpdateComponent',
        component:UpdateComponent,
        path:'/update/:id'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router