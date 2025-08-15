import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const rootPath = '/web-sockets-messaging-test'
const routes = [
{
    path: `${rootPath}/`,
    name: 'Home',
    component: Home
},
{
    path: `${rootPath}/about`,
    name: 'About',
    component: About
}]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router