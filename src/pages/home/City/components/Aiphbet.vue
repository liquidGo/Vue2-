<template>
    <div>
        <ul class="list">
            <li v-for="(value, key) in cities" :key="key" class="item">{{  key  }}</li>
            <li class="item">B</li>
            <li class="item">C</li>
            <li class="item">D</li>
            <li class="item">E</li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'AiphbetCity',
    data() {
        return {
        }
    },
    props: {
        cities: Object
    },
    mounted() {
        console.log(this.cities, 'aaaaaaa');
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item 
            line-height .44rem
            text-align center
            color $bgColor
</style>