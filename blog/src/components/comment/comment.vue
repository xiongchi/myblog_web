<template>
  <div class="comment">
    <div class="comm-box">
      <div class="author-msg"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'comment'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .comment
    width 500px
    height 800px
    .comm-box
      width 100%
      height 100px
      .author-msg
        width 50px
        height 100%
        background-color red
</style>
