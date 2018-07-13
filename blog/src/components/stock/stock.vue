<template>
    <div class="stock-div">
      <v-slider></v-slider>
    </div>
</template>

<script type="text/ecmascript-6">
    import slider from '../slider/slider.vue'
    export default {
        name: 'stock',
        components: {
          'v-slider': slider
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .stock-div
    width 200px
    height 200px
</style>
