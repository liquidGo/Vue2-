<template>
    <div>
        <ul class="list">
            <li 
            @touchstart="handleTouchStart" 
            @touchmove="handleTouchMove" 
            @touchend="handleTouchEnd"
            v-for="(value) in letters" 
            :key="value" 
            class="item" 
            :ref="value"
            @click="handleLetterClick">{{  value  }}</li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'AiphbetCity',
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    computed:{
        letters(){
            const letters = [];
            for (let i in this.cities){
                letters.push(i);
            }
            return letters
        }
    },
    props: {
        cities: Object
    },
    mounted() {
        console.log(this.cities, 'aaaaaaa');
    },
    methods: {
        handleLetterClick(letter) {
            this.$emit('change', letter.target.innerText)
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            if (this.touchStatus) {
                // const startY = this.$refs['A'][0].offsetTop
                const touchY = e.touches[0].clientY - 79;
                console.log(touchY, 'ttttt');
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item 
            line-height .44rem
            text-align center
            color $bgColor
</style>