<template>
  <el-carousel class="slider-div" :interval="3500" arrow="hover">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item" width="100%" height="100%"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        imgList: [
          '/static/img/1.jpg',
          '/static/img/2.jpg',
          '/static/img/3.jpg'
        ]
      }
    },
    name: 'v-slider'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slider-div
    border-radius 10px
    box-shadow 2px 2px 5px #bbb
</style>
