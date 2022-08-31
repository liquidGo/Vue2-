<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{ this.city }}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCitys" :key="item.id">
                        <div class="button">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" :ref="key" v-for="(item, key) in cities" :key="item.id">
                <div class="title">{{ key }}</div>
                <div class="item-list" v-for="value in cities[key]" :key="value.id">
                    <div v-on:click="itemFn(value)" class="item">{{ value.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    props: {
        hotCitys: Array,
        cities: Object,
        letter: String
    },
    mounted() {
        setTimeout(() => {
            this.scroll = new Bscroll(this.$refs.wrapper)
        }, 20);
        console.log(this.$refs, 'ttt');
        this.$nextTick(() => {
            console.log(this.cities, '11');
        })
    },
    watch: {
        letter() {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    data() {
        return {
            city: '北京'
        }
    },
    methods: {
        itemFn(value) {
            console.log('cli', value);
            this.city = value.name
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        // background red
        .title
            clear both
            line-height .54rem
            padding-left .2rem
            color #666
            background: #eee;
            border-bottom 1px solid #ccc
            border-top 1px solid #ccc
        .button-list
            overflow hidden
            padding: 0.1rem 0.6rem 0.1rem 0.1rem;
            .button-wrapper
                float left
                width 33.33%
                .button
                    text-align center
                    border .02rem solid #ccc
                    border-radius .05rem
                    padding .1rem 0
                    margin 5px
        .item-list
            .item
                line-height: 0.76rem;
                padding-left: 0.2rem;
                color #666
                border-bottom .04rem solid #eee
</style>