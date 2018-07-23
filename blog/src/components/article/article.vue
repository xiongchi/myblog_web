<template>
  <div class="article-div">
    <!--左边-->
    <div class="left"></div>
    <!--中间-->
    <div class="center">
      <!--滑动块-->
      <div class="banner-div">
        <v-slider class="banner"></v-slider>
      </div>
      <!--文章正文-->
      <div class="article-content">
        <div class="all-article" v-for="item in 4" :key="item">
          <div class="art-desc">
            <h2 class="art-tit"></h2>
            <span class="art-con">
            </span>
            <span class="art-comm">
            </span>
          </div>
          <div class="art-img">
          </div>
        </div>
      </div>
    </div>
    <!--右侧栏-->
    <div class="right">
      <div class="msg-div">
        <div class="r-img-div"></div>
        <div class="user-div">
            <img class="user-icon" src="/static/img/2.jpg"/>
            <div class="user-msg">
              <div>站长: {{user.userName}}</div>
              <div>职业: {{user.userProfession}}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import slider from '../slider/slider.vue'

  const ERR_OK = 0
  export default {
    name: 'v-article',
    props: {
      user: {
        type: Object
      }
    },
    data() {
      return {
        content: {
        }
      }
    },
    mounted() {
      this.getUserMsg()
    },
    methods: {
      getUserMsg() {
        this.$http.jsonp('http://localhost:8081/user/find/1').then((response) => {
          response = response.body
          console.log(response)
          if (response.code === ERR_OK) {
            this.user = response.obj
          }
        })
      }
    },
    components: {
      'v-slider': slider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .article-div
    .left
      display inline-block
      width 15%
      height 100%
    .center
      width 50%
      display inline-block
      .banner-div
        height 300px
        border-radius 10px
        box-shadow 2px 2px 5px #bbb
        .banner
          width 100%
          height 100%
      .article-content
         margin-top 5%
         width 100%
         height 100%
        .all-article
          margin-top 5px
          width 100%
          height 150px
          background-color #fff
          border-radius 10px
          box-shadow 2px 2px 5px #bbb
          .art-desc
            float left
            width 70%
            height 100%
          .art-img
            float left
            width 30%
            height 100%
    .right
      float right
      width 33%
      .msg-div
        float left
        width 55%
        .r-img-div
          height 150px
          border 1px solid #fff
          background-color #fff
          border-radius 10px
          box-shadow 2px 2px 5px #bbb
        .user-div
          margin-top 5%
          height 320px
          border 1px solid #fff
          background-color #fff
          border-radius 10px
          box-shadow 2px 2px 5px #bbb
          .user-icon
             width 80px
             height 80px
             margin-left 35%
             margin-top 5%
             border-radius 80px
          .user-msg
             height 150px
             margin-top 10px
             background-color palegreen
             text-align center
             div
               width 60%
               height 30px
               margin-top 10px
               text-align center
               margin-left 20%
               background-color #7e8c8d
</style>
