<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或简写">
        </div>
        <div class="search-content" v-show="keyword" ref="searchWrapper">
            <ul>
                <li  class="search-item" v-for="item of list" :key="item.id">{{ item.name }}</li>
                <li v-show="hasNoData" class="search-item">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'CitySearch',
    methods: {

    },
    props: {
        cities: Object
    },
    data() {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach(value => {
                        if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
                            result.push(value)
                            // console.log(value, 'value');
                        }
                    })
                }
                this.list = result
            }, 400);
        },
        // list(){
        //     console.log(this.list,'list');
        // }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    mounted() {
        console.log(this.$refs.searchWrapper);
        this.scroll = new BScroll(this.$refs.searchWrapper)
    }
}
</script>

<style lang="stylus" scoped>
    .search
        height .72rem
        padding 0 .1rem
        background: #00bcd4;
        .search-input
            width 100%
            line-height .62rem
            text-align center
            border-radius .1rem
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            border-bottom .03rem solid #ccc
            background #fff

</style>