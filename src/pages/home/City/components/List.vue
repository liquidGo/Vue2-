<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="item-list">
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                    <div class="item">阿拉尔</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CityList',
    mounted(){
        this.scroll=new Bscroll(this.$refs.wrapper)
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