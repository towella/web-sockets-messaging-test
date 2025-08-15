import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const routers = [{
    path: '/home',
    name: 'Home',
    component: Home
},
{
    path: '/about',
    name: 'About',
    component: About
}]

const router = createRouter({
    history: createWebHistory(),
    routers,
})

export default router