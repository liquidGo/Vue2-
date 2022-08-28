<template>
    <div>
        <header-vue></header-vue>
        <swiper-vue></swiper-vue>
        <icons-vue></icons-vue>
        <recommend-vue v-bind:rex="reX"></recommend-vue>
        <city-vue></city-vue>
        <recommend-vue v-bind:rex="whereGoWeekend"></recommend-vue>
        <weekend-vue></weekend-vue>
    </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import SwiperVue from './components/Swiper.vue';
import IconsVue from './components/Icons.vue';
import RecommendVue from './components/Recommend.vue';
import CityVue from './components/City.vue';
import WeekendVue from './components/Weekend.vue';
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
            reX: '热销推荐',
            whereGoWeekend: '周末去哪？'
        }
    }
}
</script>

<style lang="scss" scoped>
</style>