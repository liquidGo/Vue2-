<template>
    <div>
        <ul class="weekend-box" v-for="item of weekendList" :key="item.id">
            <li>
                <div class="weekend-li">
                    <img class="weekend-li-img"
                        :src="item.imgSrc"
                        alt="">
                </div>
                <div class="weekend-title">
                    {{item.title}}
                </div>
                <div class="weekend-desc">
                    {{item.desc}}
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Weekend',
    props:{
        weekendList:Array
    },
    data() {
        return {
            // weekendList: [
            //     {
            //         id: '0001',
            //         imgSrc: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            //         title: '北京温泉排行榜',
            //         desc: '细数北京温泉，温暖你的冬天'
            //     }, {
            //         id: '0002',
            //         imgSrc: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            //         title: '北京温泉排行榜',
            //         desc: '细数北京温泉，温暖你的冬天'
            //     }, {
            //         id: '0003',
            //         imgSrc: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            //         title: '北京温泉排行榜',
            //         desc: '细数北京温泉，温暖你的冬天'
            //     }, {
            //         id: '0004',
            //         imgSrc: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            //         title: '北京温泉排行榜',
            //         desc: '细数北京温泉，温暖你的冬天'
            //     }, {
            //         id: '0005',
            //         imgSrc: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
            //         title: '北京温泉排行榜',
            //         desc: '细数北京温泉，温暖你的冬天'
            //     },
            // ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .weekend-li
        width 100%
        display inline-block
        height 0
        overflow hidden
        padding-bottom 33.9%
        .weekend-li-img
            width 100%
    .weekend-title
        ellipsis()
        line-height .54rem
        font-size .32rem
    .weekend-desc
        ellipsis()
        color #ccc
        line-height .53rem
</style>