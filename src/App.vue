<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HomeView from './pages/home/Home.vue'
export default {
  name: 'App',
  components: {
    // HomeView,
  }
}
</script>

<style lang="less">
* {
  touch-action: pan-y;
}
</style>
