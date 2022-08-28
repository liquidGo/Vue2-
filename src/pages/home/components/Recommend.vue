<template>
    <div class="title1">
        {{ this.rex }}
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        rex: String,
        whereGoWeekend: String
    }
}
</script>

<style lang="stylus" scoped>
    .title1
        margin-top .2rem
        line-height .8rem
        text-indent 0.2rem
        background #ccc
</style>