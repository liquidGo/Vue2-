<template>
    <div>
        <header-city></header-city>
        <search-vue></search-vue>
        <list-city :hotCitys="hotCitys" :cities="cities"></list-city>
        <abc-de :cities="cities"></abc-de>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderCity from './components/Header.vue'
import SearchVue from './components/Search.vue';
import ListCity from './components/List.vue'
import AbcDe from './components/Aiphbet.vue';
export default {
    name: 'City',
    mounted() {
        this.getCityInfo()
    },
    data() {
        return {
            cities: {},
            hotCitys: []
        }
    },
    methods: {
        getCityInfo() {
            axios.get('/mock/city.json')
                .then(res => {
                    this.handleGetCityInfoSucc(res)
                })
        },
        handleGetCityInfoSucc(res) {
            this.cities = res.data.data.cities;
            this.hotCitys = res.data.data.hotCities
            console.log(this.hotCitys, 'cccc');
        }
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