<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgSrc">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props:{
        swiperList:Array
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true
            },
            // swiperList: [
            //     {
            //         id: '1',
            //         imgSrc: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg'
            //     },
            //     {
            //         id: '2',
            //         imgSrc: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/fd16ccffb2e2376ff370bda3bebebd71.jpg'
            //     },
            //     {
            //         id: '3',
            //         imgSrc: 'https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg'
            //     },

            // ]
        }
    },
}
</script>

<style lang="stylus" scoped>
    // 由于scoped无法修改第三方组件的样式，所以需要穿透
    .wrapper>>>.swiper-pagination-bullet-active.swiper-pagination-bullet
        background red
    .wrapper
        width:100%
        height:0
        overflow:hidden
        padding-bottom:31.24%
        background #ccc
        .swiper-img
            width:100%
        .swiper-pagination
            top 80%
            bottom 100%
</style>