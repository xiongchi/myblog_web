<template>
  <div id="app">
    <div class="header">
      <div class="opt">
        <div><router-link :to="{path: '/article'}">文</router-link></div>
        <div><router-link :to="{path: 'stock'}">股</router-link></div>
        <div><router-link :to="{path: '/LOL'}">LOL</router-link></div>
        <div><router-link :to="{path: '/write'}">写</router-link></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    name: 'App',
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    width 100%
    height 60px
    background-color #fff
    position absolute
    .opt
      display flex
      width 60%
      height 60px
      margin-left 20%
      line-height 60px
      background-color #e7e7e7
      div
        flex 1
        text-align center
        font-family Arial
        font-size larger
</style>
