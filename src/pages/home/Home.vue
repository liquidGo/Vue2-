<template>
    <div>
        <header-vue></header-vue>
        <swiper-vue></swiper-vue>
        <icons-vue></icons-vue>
    </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import SwiperVue from './components/Swiper.vue';
import IconsVue from './components/Icons.vue';
export default {
    name: 'Home',
    components: {
    HeaderVue,
    SwiperVue,
    IconsVue
}
}
</script>

<style lang="scss" scoped>
</style>