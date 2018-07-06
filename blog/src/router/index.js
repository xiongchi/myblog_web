import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article/article'
import stock from '@/components/stock/stock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'article',
      components: {'v-article': article}
    },
    {
      path: 'stock',
      name: 'stock',
      component: stock
    }
  ]
})
