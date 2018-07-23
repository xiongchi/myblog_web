<template>
  <div>
    <!--登录-->
    <div v-if="loginFlag" class="login-div">
      <el-input class="username" placeholder="请输入用户名"></el-input>
      <el-input class="password" placeholder="请输入密码"></el-input>
      <span class="qus-span">
      <label class="qus-acct">还没有账号？</label>
      <a style="color: #ff9600;font-size:12px;" @click="change(1)">立即注册</a>
      <a style="float: right; color: #5ecfba;font-size:12px;">忘记密码？</a>
    </span>
      <div class="val-div">
        <v-validate></v-validate>
      </div>
      <button class="login-btn">登录</button>
      <div class="other-div">
        <label style="float: left;color: rgba(178,178,178,1); margin-top: 3%">其它方式登录</label>
        <img src="/static/img/QQ.png" style="float: left;margin-left: 5%;">
        <img src="/static/img/wechat.png" style="margin-left: 5%">
      </div>
    </div>
    <!--注册-->
    <div class="register-div" v-if="regFlag">
      <el-input class="username" placeholder="请输入昵称"></el-input>
      <el-input class="password" placeholder="请输入密码"></el-input>
      <el-input class="password-again" placeholder="确认密码"></el-input>
      <span class="qus-span">
      <label class="qus-acct">已有账号？</label>
      <a style="color: #ff9600;font-size:12px;" @click="change(2)">立即登录</a>
    </span>
      <button class="reg-btn">注册</button>
      <div class="other-div">
        <label style="float: left;color: rgba(178,178,178,1); margin-top: 3%">直接登录</label>
        <img src="/static/img/QQ.png" style="float: left;margin-left: 5%;">
        <img src="/static/img/wechat.png" style="margin-left: 5%">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import validate from 'components/slider/validate.vue'

  export default {
    name: 'landreg',
    data() {
      return {
        cFlg: 1
      }
    },
    props: ['regFlag', 'loginFlag'],
    methods: {
      change: function (c) {
        if (c === 1) {
          this.regFlag = true
          this.loginFlag = false
        } else {
          this.loginFlag = true
          this.regFlag = false
        }
      }
    },
    components: {
      'v-validate': validate
    },
    destroyed: {
      regFlag: false,
      loginFlag: false
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*登录*/
  .login-div
    .username
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .password
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .qus-span
      display inline-block
      width 85%
      height 10%
      margin-top 2%
      margin-left 5%
      .qus-acct
        color rgba(178, 178, 178, 1)
        font-size 12px
    .val-div
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .login-btn
      width 85%
      height 45px
      margin-left 5%
      margin-top 5%
      background: -webkit-linear-gradient(#5394EC, #2A54C2)
      font-size 14px
      border-radius 4px
      border 0px
      color #fff
    .other-div
      width 85%
      height 30px
      margin-left 5%
      margin-top 5%

  /*注册*/
  .register-div
    .username
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .password
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .password-again
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .qus-span
      display inline-block
      width 85%
      height 10%
      margin-top 2%
      margin-left 5%
      .qus-acct
        color rgba(178, 178, 178, 1)
        font-size 12px
    .reg-btn
      width 85%
      height 45px
      margin-left 5%
      margin-top 5%
      background: -webkit-linear-gradient(#5394EC, #2A54C2)
      font-size 14px
      border-radius 4px
      border 0px
      color #fff
    .other-div
      width 85%
      height 30px
      margin-left 5%
      margin-top 5%
</style>
