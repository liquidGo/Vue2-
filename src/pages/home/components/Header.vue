<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont arrow-icon">&#58925;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'Vuex';
export default {
    name: 'Header',
    mounted() {
        console.log(this.$store.state.city, 'city');
    },
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display:flex
        line-height:.86rem
        background:$bgColor
        color:#fff
        overflow hidden
        .header-left
            width:.64rem
            float:left
            .back-icon
                text-align center
                font-size .4rem
        .header-input
            flex:1
            background #fff
            height .64rem
            line-height .64rem
            text-align center
            color:#ccc
            margin-top .12rem
            margin-right .2rem
            border-radius:.1rem
            padding-left .2rem
        .header-right
            margin-right .2rem
            min-width 1.04rem
            padding 0 .1rem
            float:right 
            text-align:center
            color #fff
            .arrow-icon
                margin-left -.04rem
                font-size .2rem
</style>