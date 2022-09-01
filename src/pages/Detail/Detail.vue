<template>
    <div>
        <banner-vue></banner-vue>
        <header-vue></header-vue>
        <div class="content">

        </div>
    </div>
</template>

<script>
import BannerVue from './components/Banner.vue'
import HeaderVue from './components/Header.vue';
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route);
    },
    components: {
        BannerVue,
        HeaderVue
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>