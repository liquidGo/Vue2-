<template>
    <div class="container" @click="handleGallary">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(im, key) in imgs" :key="key">
                    <img :src="im"
                        alt="">
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallarry',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    observeParents:true,
                    observer:true
                },
                loop: true
            },
        }
    },
    props: {
        imgs: {
            type:Array,
            default() {
            return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg', 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg']
        }
        },
    },
    methods:{
        handleGallary(){
            this.$emit('cancle1','123')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container>>>  .swiper-container
        overflow inherit

    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            width 100%
            height 0
            // overflow hidden
            padding-bottom 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>