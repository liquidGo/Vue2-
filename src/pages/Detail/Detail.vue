<template>
    <div>
        <banner-vue></banner-vue>
    </div>
</template>

<script>
import BannerVue from './components/Banner.vue'
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route);
    },
    components:{
        BannerVue
    }
}
</script>

<style lang="stylus" scoped>
        
</style>