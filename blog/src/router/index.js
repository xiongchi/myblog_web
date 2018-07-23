import Vue from 'vue'
import Router from 'vue-router'
import article from 'components/article/article'
import stock from 'components/stock/stock'
import write from 'components/write/write'
import album from 'components/photos/album'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/article'},
    {path: '/article', name: 'v-article', component: article},
    {path: '/stock', name: 'stock', component: stock},
    {path: '/write', name: 'v-write', component: write},
    {path: '/photos', name: 'v-album', component: album}
  ]
})
