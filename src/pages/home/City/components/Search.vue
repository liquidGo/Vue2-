<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或简写">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
    .search
        height .72rem
        padding 0 .1rem
        background: #00bcd4;
        .search-input
            width 100%
            line-height .62rem
            text-align center
            border-radius .1rem
</style>