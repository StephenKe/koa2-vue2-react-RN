import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Web from '@/components/Web'
import WebBt from '@/components/WebBt'
import WebVue from '@/components/WebVue'
import WebEleme from '@/components/WebEleme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/web',
      name: 'Web',
      component: Web,
      children: [{
        path: '/web/bt',
        name: 'bt',
        component: WebBt
      }, {
        path: '/web/vue',
        name: 'vue',
        component: WebVue
      }, {
        path: '/web/eleme',
        name: 'eleme',
        component: WebEleme
      }]
    }
  ]
})
