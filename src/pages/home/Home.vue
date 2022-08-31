<template>
    <div>
        <header-vue ></header-vue>
        <swiper-vue :swiperList="swiperList"></swiper-vue>
        <icons-vue :iconList="iconList"></icons-vue>
        <recommend-vue v-bind:rex="reX"></recommend-vue>
        <city-vue :recommendList="recommendList"></city-vue>
        <recommend-vue v-bind:rex="whereGoWeekend"></recommend-vue>
        <weekend-vue :weekendList="weekendList"></weekend-vue>
    </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import SwiperVue from './components/Swiper.vue';
import IconsVue from './components/Icons.vue';
import RecommendVue from './components/Recommend.vue';
import CityVue from './components/City.vue';
import WeekendVue from './components/Weekend.vue';
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HeaderVue,
        SwiperVue,
        IconsVue,
        RecommendVue,
        CityVue,
        WeekendVue
    },
    data() {
        return {
            city: '',
            reX: '热销推荐',
            whereGoWeekend: '周末去哪？',
            iconList: [],
            recommendList: [],
            swiperList: [],
            weekendList: []
        }
    },
    mounted() {
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo() {
            axios.get('/mock/index.json')
                .then(res => {
                    console.log(res, 'resss');
                    let data = res.data
                    if (data.ret && data.data) {
                        console.log(data, 'data');
                        this.city = data.data.city
                        this.iconList = data.data.iconList
                        this.recommendList = data.data.recommendList
                        this.swiperList = data.data.swiperList
                        this.weekendList = data.data.weekendList
                    }
                })
                .catch(err => {
                    console.log(err, 'err');
                })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>