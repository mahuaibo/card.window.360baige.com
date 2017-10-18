import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CardList from '@/components/card/List'

Vue.use(Router)

export default new Router({
  routes: [{
    name: 'home',
    component: Home,
    path: '/home',
    alias: '',
    redirect: {
      name: '/card/list'
    },
    children: [{
      name: '/card/list',
      component: CardList,
      path: '/card/list',
      alias: 'card/list'
    }]
  }]
})
