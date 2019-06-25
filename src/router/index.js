import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import news from '@/components/index/news'
import movies from '@/components/index/movies'
import channel from '@/components/index/channel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {path: '/news',
          name: 'news',
          component: news,},
        {path: '/movies',
          name: 'movies',
          component: movies,},
        {path: '/channel',
          name: 'channel',
          component: channel,},
      ]
    },
  ]
})

