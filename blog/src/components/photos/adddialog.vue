<template>
  <div class="add-div">
    <div class="alb-top" v-if="!questFlag" :closable="false">
      <div class="album-box">
        <p v-show="nameRe" class="remind">{{errorMsg}}</p>
        <el-input v-model="albumName" @change="valiName" placeholder="相册名(少于15个字)"></el-input>
      </div>
      <el-select class="album-box" v-model="albumType" @change="selChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div v-show="secretFlag">
        <div class="album-box">
          <p v-show="passwordRe" class="remind">{{errorPassWord}}</p>
          <el-input v-model="password" type="password" placeholder="请输入密码" @change="enterPassword"></el-input>
        </div>
        <div class="album-box">
          <p v-show="passwordAgnRe" class="remind">{{errorPassWordAgn}}</p>
          <el-input v-model="passwordAgain" type="password" placeholder="请确认输入密码" @change="valiPassWord"></el-input>
        </div>
          <div class="ques-div">
          <div class="to-ques">
            <label style="color:rgba(178, 178, 178, 1);font-size:14px">不想设置密码?</label>
            <a class="set-ques" @click="toSetQuest">去设置问题吧</a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="questFlag">
      <img class="album-box" style="width: 36px;height: 36px" @click="toMain" src="/static/img/return.png"/>
      <el-input class="album-box" v-model="questSet" placeholder="设置问题1"></el-input>
      <div class="album-box">
        <p v-show="answerRe" class="remind">{{errorAnswerMsg}}</p>
        <el-input class="album-box" v-model="answerSet" placeholder="设置答案"></el-input>
      </div>
      <div class="album-box">
        <p v-show="answerAgainRe" class="remind">{{errorAnswerAgainMsg}}</p>
        <el-input class="album-box" v-model="answerSetAgain" placeholder="确认答案"></el-input>
      </div>
      <div class="album-box">
        <a class="next-quest">下一题—></a>
      </div>
    </div>
    <button :disabled="doAllValidate()" class="crt-btn" @click="createAlbum">创建</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: 'adddialog',
    data() {
      return {
        // 相册名
        albumName: '',
        // 错误信息
        errorMsg: '',
        // 错误框是否显示
        nameRe: false,
        // 密码
        password: '',
        // 密码错误框是否显示？
        passwordRe: false,
        // 密码错误信息
        errorPassWord: '',
        // 确认密码
        passwordAgain: '',
        // 确认密码错误框是否显示？
        passwordAgnRe: false,
        // 确认密码错误信息
        errorPassWordAgn: '',
        // 密码显示？
        secretFlag: false,
        // 问题显示？
        questFlag: false,
        // 设置的问题
        questSet: '',
        // 问题的设置
        answerSet: '',
        // 确认问题
        answerSetAgain: '',
        // 答案错误框？
        answerRe: false,
        // 答案错误信息
        errorAnswerMsg: '',
        // 确认答案错误框
        answerAgainRe: false,
        // 确认答案信息
        errorAnswerAgainMsg: '',
        // 下拉选项
        options: [{
          value: '1',
          label: '公开'
        }, {
          value: '2',
          label: '私密'
        }],
        albumType: '1'
      }
    },
    watch: {
    },
    methods: {
      selChange(albumType) {
        this.albumType = albumType
        if (albumType === '2') {
          this.secretFlag = true
        } else {
          this.secretFlag = false
        }
      },
      toSetQuest() {
        this.questFlag = true
      },
      toMain() {
        this.questFlag = false
      },
      valiName() {
        this._valiName('请输入正确的相册名')
      },
      enterPassword() {
        this._valiName('请先输入相册名')
        let pw = this.password
        if (pw === '') {
          this.passwordRe = true
          this.errorPassWord = '密码不能为空'
        } else {
          this.passwordRe = false
        }
      },
      valiPassWord() {
        let pw = this.password
        let pwa = this.passwordAgain
        if (pw !== pwa) {
          this.passwordAgnRe = true
          this.errorPassWordAgn = '两次密码不一致'
        } else {
          this.passwordAgnRe = false
        }
      },
      createAlbum() {
        let albName = this.albumName
        let type = this.albumType
        if (type === '1') {
          axios.post('http://localhost:8081/photo/saveAlbum', qs.stringify({
            albumName: albName,
            albumType: type
          })).then(function (response) {
              console.info(response.data)
          })
        } else if (type === '2') {
          let password = this.password
          // 密码密保
          if (!this.questFlag) {
            axios.post('http://localhost:8081/photo/saveAlbum', qs.stringify({
              albumName: albName,
              albumType: type,
              albumPassword: password
            })).then(function (response) {
              console.info(response.data)
            })
          } else {
            // 问题密保
          }
        }
      },
      doAllValidate() {
        let albName = this.albumName
        let pw = this.password
        let pwa = this.passwordAgain
        if (this.albumType === '1') {
          if (albName === '' || albName.length > 15) {
            return true
          } else {
            return false
          }
        } else if (this.albumType === '2') {
          if ((albName === '' || albName.length > 15) || pw === '' || (pw !== pwa)) {
            return true
          } else {
            return false
          }
        }
      },
      _valiName(msg) {
        let albName = this.albumName
        if (albName === '' || albName.length > 15) {
          this.nameRe = true
          this.errorMsg = msg
        } else {
          this.nameRe = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .remind
    width 100%
    height 12px
    font-size 8px
    background-color #fef0f0
    color #f56c6c
  .add-div
    .album-box
      width 85%
      height 10%
      margin-left 5%
      margin-top 5%
    .crt-btn
      width 85%
      height 45px
      margin-left 5%
      margin-top 5%
      background: -webkit-linear-gradient(#5394EC, #2A54C2)
      font-size 14px
      border-radius 4px
      border 0px
      color #fff
    .ques-div
      width 85%
      margin-left 5%
      margin-top 5%
      .to-ques
        float right
        .set-ques
          color #ff9600
          font-size 14px
          &:hover
            text-decoration underline
    .next-quest
      float right
      &:hover
        color #1296db
        text-decoration underline
</style>
