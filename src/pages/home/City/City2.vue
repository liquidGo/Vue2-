<template>
    <div>
        <header-city></header-city>
        123123
    </div>
</template>

<script>
import HeaderCity from './components/Header.vue'
export default {
    name: 'City',
    mounted() {
        console.log('dayinle');
    },
    components: {
        HeaderCity
    }
}
</script>

<style lang="stylus" scoped>
</style>