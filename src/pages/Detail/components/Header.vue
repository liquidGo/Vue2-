<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs">
            <router-link to="/">
                <span class="iconfont header-fixed-back">&#xe624;</span>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true

        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop
            if (top > 60) {

                this.showAbs = false;
            } else {
                this.showAbs = true;
            }
            // console.log(document.documentElement.scrollTop,'aaa');
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        background rgba(0,0,0,.8)
        text-align center
        .back-icon
            color #fff
            font-size .4rem
    .header-fixed
        z-index 9
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .4rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>