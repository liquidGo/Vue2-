<template>
    <div>
        <banner-vue></banner-vue>
        <header-vue></header-vue>
        <div class="content">
            <list-vue :list="list"></list-vue>
        </div>
    </div>
</template>

<script>
import BannerVue from './components/Banner.vue'
import HeaderVue from './components/Header.vue';
import ListVue from './components/List.vue';
export default {
    name: 'Detail',
    mounted() {
        console.log(this.$route);
    },
    components: {
        BannerVue,
        HeaderVue,
        ListVue
    },
    data() {
        return {
            list: [
                {
                    title: '成人票',
                    children: [
                        { title: '成人三馆两票' },
                        {
                            title: '成人五馆联票',
                            children:[
                                {title:'梦幻阿拉伯，迪拜五星级服务！'}
                            ]
                        }
                    ]
                }, {
                    title: '学生票'
                }, {
                    title: '儿童票'
                }, {
                    title: '特惠票'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>