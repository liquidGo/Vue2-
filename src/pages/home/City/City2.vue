<template>
    <div>
        <header-city></header-city>
        <search-vue></search-vue>
        123123
    </div>
</template>

<script>
import HeaderCity from './components/Header.vue'
import SearchVue from './components/Search.vue';
export default {
    name: 'City',
    mounted() {
        console.log('dayinle');
    },
    components: {
        HeaderCity,
        SearchVue
    }
}
</script>

<style lang="stylus" scoped>
</style>