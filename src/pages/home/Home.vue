<template>
    <div>
        <header-vue></header-vue>
        <swiper-vue></swiper-vue>
        test
    </div>
</template>

<script>
import HeaderVue from './components/Header.vue';
import SwiperVue from './components/Swiper.vue';
export default {
    name: 'Home',
    components: {
    HeaderVue,
    SwiperVue
}
}
</script>

<style lang="scss" scoped>
</style>