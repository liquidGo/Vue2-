import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/home/City/City2.vue'
import Detail from '../pages/Detail/Detail.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/city',
        name: 'City',
        component: City
    }, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
]
const router = new VueRouter({
    routes
})
export default router