import Vue from 'vue'
import Router from 'vue-router'

import sy from '@/components/sy'
Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      redirect:'/sy',
      component: sy,
    },
     
]
})
