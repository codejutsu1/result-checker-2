import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/result',
        name: 'Result',
        component: Result
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router