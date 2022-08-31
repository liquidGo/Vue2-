import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    getters: {
        cityFn: state => {
            return state.city;
        }
    },
    mutations ,
    actions
})