<template>
    <div>
        <ul class="citys" v-for="item of cityList" :key="item.id">
            <li class="item border-bottom">
                <img :src="item.imgSrc"
                    class="item-img" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'City',
    data() {
        return {
            cityList: [
                {
                    id: '0001',
                    imgSrc: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                },
                {
                    id: '0002',
                    imgSrc: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                },
                {
                    id: '0003',
                    imgSrc: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                },
                {
                    id: '0004',
                    imgSrc: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                },
                {
                    id: '0005',
                    imgSrc: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
                    title: '故宫',
                    desc: '东方宫殿建筑代表，世界宫殿建筑典范'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .border-bottom
        padding .1rem 0
    .item 
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex:1
            padding .1rem
            min-width 0
            .item-title
                ellipsis()
                font-size .4rem
                font-weight bold
            .item-desc
                ellipsis()
                font-size .3rem
                margin-top .25rem
                color #ccc
            .item-button
                margin-top .3rem
                border 1px solid #f60
                color #fff
                background #f60
                padding 0 .1rem
                border-radius .15rem
                cursor pointer

</style>