<template>
    <div>

        <div class="banner" @click="handleClick">
            <img class="banner-image"
                src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
                alt="">
            <div class="banner-info">
                <div class="banner-title">
                    阿拉伯
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">
                        &#58954;
                    </span>18000
                </div>
            </div>
        </div>
        <gallarry-vue  @cancle1="handleCancleClick" :imgs="imgs" v-show="showGallary"></gallarry-vue>
    </div>

</template>

<script>
import GallarryVue from '../../../common/gallarry/Gallarry.vue';
export default {
    name: 'Banner',
    data() {
        return {
            imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg', 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
            , showGallary: false
        }
    },
    components: {
        GallarryVue
    },
    methods:{
        handleClick(){
            this.showGallary=true
        },
        handleCancleClick(a){
            console.log(a);
            this.showGallary=false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-image
            width 100%
        .banner-info
            display flex    
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))
            .banner-title
                line-height .4rem
                height .4rem
                flex 1
                font-size .32rem
            .banner-number
                padding 0 .4rem
                line-height .4rem
                height .4rem
                border-radius .2rem
                background rgba(0,0,0,.8 )
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>