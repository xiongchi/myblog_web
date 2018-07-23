<template>
  <div class="write-div">
    <div class="left">
      <div class="art-list">
        <div class="title">目录</div>
        <div class="art"></div>
      </div>
      <button @click="saveContent">登录</button>
    </div>
    <div class="main-div">
      <div class="top-div">
        <el-row :gutter="20">
          <el-col :span="4"><label class="art-tit">标题</label></el-col>
          <el-col :span="16">
            <el-input v-model="artTitle" class="title-input"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><label class="art-tit">简介</label></el-col>
          <el-col :span="16"><textarea v-model="artBref" class="art-bref"></textarea></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            <el-select v-model="selType" placeholder="类型">
              <el-option
                v-for="item in type"
                :key="item.typeName"
                :label="item.typeName"
                :value="item.typeName">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="markdown-div">
        <mavon-editor class="m-editor" :value="artcontent" @change="changeContent" @save="contentSave"/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'mavon-editor/dist/css/index.css'
  import axios from 'axios'
  import qs from 'qs'
  import {ERR_OK} from 'api/config'

  var mavonEditor = require('mavon-editor')
  export default {
    name: 'write',
    data() {
      return {
        selType: '',
        type: [],
        artTitle: '',
        artcontent: '',
        artBref: '',
        artHtml: '',
        toolbars: {
          blod: true,
          save: false
        }
      }
    },
    created() {
      this.type = this.getAllType()
      console.info(this.getAllType())
    },
    methods: {
      saveContent: function () {
        console.info(this.artHtml)
        alert(this.artHtml)
      },
      changeContent: function (value, render) {
        this.artHtml = render
      },
      contentSave: function (value, render) {
        this.saveArticle(render)
      },
      saveArticle: function (content) {
        axios.post('http://localhost:8081/article/save', qs.stringify({
          articleTitle: this.artTitle,
          articleAuthor: 'xc',
          articleBrief: this.artBref,
          typeName: '1',
          articleContent: content
        })).then(function (response) {
          console.info(response.data)
        })
      },
      getAllType: function () {
        var _types = []
        axios.get('http://localhost:8081/article/allTypes').then(function (response) {
          var data = response.data
          if (data.code === ERR_OK) {
            _types = data.obj
            // var list = data.obj
            // console.info(list)
            // list.forEach((item) => {
            //   this.type.push(item)
            // })
            return _types
          }
        })
      }
    },
    components: {
      'mavon-editor': mavonEditor.mavonEditor
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .write-div
    .left
      float left
      width 20%
      height 100%
      .art-list
        float right
        width 80%
        height 1000px
        background-color cyan
        border-radius 10px
        box-shadow 2px 2px 5px #bbb
        .title
          height 30px
          font-size 20px
          margin-top 10px
          padding-left 40%
        .title-input
          margin-top 20px
        .art
          height 80px
          background-color rebeccapurple
    .main-div
      float left
      width 80%
      .top-div
        margin-left 5px
        width 80%
        height 200px
        background-color #fff
        border-radius 10px
        box-shadow 2px 2px 5px #bbb
        .art-tit
          float right
          margin-top 12px
        .art-bref
          width 99%
          height 50px
      .markdown-div
        float left
        margin-left 5px
        margin-top 5px
        width 80%
        height 700px
        box-shadow 2px 2px 5px #bbb
        .m-editor
          min-height 100%
</style>
