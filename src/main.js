import Vue from 'vue'
import App from './App.vue'
import VueAwesonSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store/index'


import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/css/swiper.css'
Vue.use(VueAwesonSwiper)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

console.log(store,'store');
