<template>
  <div class="album-div">
    <el-dialog title="新建相册" width="450px" :visible.sync="addAlbum" :modal-append-to-body="false">
      <adddialog></adddialog>
    </el-dialog>
    <div v-for="item in 8" :key="item" class="one-album">
      <div class="decorate"></div>
      <div class="album-div">
        <img class="album-img" src="/static/img/2.jpg"/>
      </div>
      <div class="album-desc">
        <h2 class="album-box">哈哈哈哈</h2>
        <div class="album-other">
          <label class="time">日期</label>
          <span class="zan"><img class="zan-img" src="/static/img/love.png"><label class="num">0</label></span>
        </div>
      </div>
    </div>
    <div class="one-album">
      <div class="album-div" @click="addAlbum = true">
        <div class="add-div">
          <label class="add-font">+</label>
        </div>
      </div>
      <div class="album-desc">
        <h2 class="album-box" style="color: cornflowerblue!important;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新建相册</h2>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
   import adddialog from 'components/photos/adddialog'
   export default {
     name: 'Album',
     data() {
       return {
         addAlbum: false
       }
     },
     methods: {
     },
     components: {
       adddialog
     }
   }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .album-div
    width 80%
    margin-left 12%
    .one-album
      display inline-block
      position relative
      width 280px
      height 350px
      margin-left 30px
      margin-top 40px
      background-color #fff
      border-radius 10px
      box-shadow 2px 2px 5px #bbb
      .decorate
        position absolute
        width 260px
        height 250px
        margin-left 15px
        margin-top 15px
        box-shadow 2px 2px 5px #bbb
      .album-div
        position absolute
        width 260px
        height 250px
        margin-left 10px
        margin-top 10px
        overflow hidden
        box-shadow 2px 2px 5px #bbb
        .album-img
          width 100%
          height 100%
          transition all 1s
          &:hover
            transform scale(1.1)
        .add-div
          width 80%
          height 80%
          margin-top 10%
          margin-left 10%
          border 1px dashed #bbb
          background-color #fbfdff
          &:hover
            border-color cornflowerblue
          &:hover .add-font
            color cornflowerblue
          .add-font
            position absolute
            font-size 120px
            color #999
            left 38%
            top 25%
      .album-desc
        position absolute
        top 267px
        left 10px
        width 260px
        height 80px
        .album-box
          height 16px
          color #303133
          overflow hidden
          margin-top 20px
        .album-other
          margin-top 15px
          vertical-align center
          .time
            font-size 12px
            color #999
          .zan
            display inline-block
            margin-left 180px
            .zan-img
              width 18px
              height 18px
              &:hover
                transform scale(1.05)
          .num
            display inline-block
            color #999
            font-size 15px
            margin-left 5px
</style>
