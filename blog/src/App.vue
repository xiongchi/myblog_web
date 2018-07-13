<template>
  <div id="app">
    <div class="header">
      <div class="opt">
        <div>
          <router-link :to="{path: '/article'}" tag='a' active-class="active">文</router-link>
        </div>
        <div>
          <router-link :to="{path: 'stock'}" active-class="active">股</router-link>
        </div>
        <div>
          <router-link :to="{path: '/LOL'}" active-class="active">LOL</router-link>
        </div>
        <div>
          <router-link :to="{path: '/write'}" active-class="active">写</router-link>
        </div>
      </div>
      <div class="lr-div">
        <el-button class="login" type="text" @click="loginDialog = true">登录</el-button>
        <el-dialog title="登录" width="450px" :visible.sync="loginDialog">
          <!--<div style="height: 200px; width: 40%;background-color: red"></div>-->
          <v-login></v-login>
        </el-dialog>
        <el-button class="register" @click="registerDialog = true">注册</el-button>
        <el-dialog title="注册" width="450px" :visible.sync="registerDialog">
          <v-register></v-register>
        </el-dialog>
      </div>
    </div>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import layer from '../static/js/layer'
  // layer.open()
  import validate from 'components/slider/validate'
  import login from 'components/common/login'
  import register from 'components/common/register'
  export default {
    name: 'App',
    data() {
      return {
        loginDialog: false,
        registerDialog: false
      }
    },
    components: {'v-validate': validate, 'v-login': login, 'v-register': register}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-dialog
    border-radius 10px !important
  .el-dialog__title
    font-size 25px !important
    color #2A54C2 !important
  .header
    width 100%
    height 60px
    background-color #fff
    position fixed
    z-index 9998
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    box-shadow 1px 1px 0.5px #888888
    .opt
      display flex
      width 40%
      height 60px
      margin-left 40%
      line-height 60px
      background-color #fff
      float left
      div
        flex 1
        text-align center
        font-family Arial
        font-size larger
        a
          display block
          font-size 20px
          color rgb(44, 85, 93)
          &.active
            color rgb(240, 20, 20)
    .lr-div
      width 20%
      height 100%
      float left
      .login
        display inline-block
        width 25%
        height 60%
        margin-left 10%
        margin-top 3%
        vertical-align middle
        background-color #fff
        color #ea6f5a
        border-radius 20px
        border 1px solid #ea6f5a
      .register
        display inline-block
        width 25%
        height 60%
        margin-left 5%
        margin-top 3%
        vertical-align middle
        background-color #ea6f5a
        color #fff
        border-radius 20px
        border 1px solid #ea6f5a
  .content
    width 100%
    z-index 2
    position absolute
    margin-top 80px
</style>
