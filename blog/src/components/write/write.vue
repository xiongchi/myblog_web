<template>
  <div class="write-div"><mavon-editor :blod="false" :defaultOpen="defaultOpen" class="m-editor"/></div>
</template>

<script type="text/ecmascript-6">
    import 'mavon-editor/dist/css/index.css'
    var mavonEditor = require('mavon-editor')
    export default {
        name: 'write',
        data() {
          return {
            toolbars: {
              blod: true,
              save: false
            }
          }
        },
        components: {
          'mavon-editor': mavonEditor.mavonEditor
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .write-div
    height 100%
    .m-editor
      min-height 800px
</style>
