import Vue from 'vue'
import Router from 'vue-router'
import Summary from '../components/overview/Summary'
import ArticleList from '../components/overview/ArticleList'
import EssenceList from '../components/find/EssenceList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Summary'
    }, {
      path: '/Summary',
      name: '/Summary',
      component: Summary
    }, {
      path: '/ArticleList',
      name: '/ArticleList',
      component: ArticleList
    }, {
      path: '/EssenceList',
      name: '/EssenceList',
      component: EssenceList
    }
  ]
})
