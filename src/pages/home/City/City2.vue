<template>
    <div>
        <header-city></header-city>
        <search-vue></search-vue>
        <list-city></list-city>
        <abc-de></abc-de>
    </div>
</template>

<script>
import HeaderCity from './components/Header.vue'
import SearchVue from './components/Search.vue';
import ListCity from './components/List.vue'
import AbcDe from './components/Aiphbet.vue';
export default {
    name: 'City',
    mounted() {
        console.log('dayinle');
    },
    components: {
        HeaderCity,
        SearchVue,
        ListCity,
        AbcDe
    }
}
</script>

<style lang="stylus" scoped>
</style>