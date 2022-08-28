<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgSrc" alt="">
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
export default {
    name: 'Icons',
    data() {
        return {
            iconList: [
                {
                    id: '0001',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '景点门票'
                },
                {
                    id: '0002',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '滑雪季'
                },
                {
                    id: '0003',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '泡温泉'
                },
                {
                    id: '0004',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '动物园'
                },
                {
                    id: '0005',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '游乐园'
                },
                {
                    id: '0006',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '必游榜单'
                },
                {
                    id: '0007',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '演出'
                },
                {
                    id: '0008',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '城市观光'
                },
                {
                    id: '0009',
                    imgSrc: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                    desc: '一日游'
                }
            ]
        }
    },
    computed: {
        pages() {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>>.swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing:border-box
            padding 5px
            .icon-imgcontent
                display block
                height 100%
                margin 0 auto
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            line-height .44rem
            height .44rem
            color $darkTextColor
            text-align center
            ellipsis()
</style>