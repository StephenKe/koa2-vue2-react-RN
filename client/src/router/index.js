import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Web from '@/components/Web'
import WebBt from '@/components/WebBt'
import WebVue from '@/components/WebVue'
import WebEleme from '@/components/WebEleme'
import WebGit from '@/components/WebGit'
import WebMiddleLevelCss from '@/components/WebMiddleLevelCss'
import WebNode from '@/components/WebNode'
import WebHighLevelJs from '@/components/WebHighLevelJs'
import WebWeChat from '@/components/WebWeChat'

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
      }, {
        path: '/web/git',
        name: 'git',
        component: WebGit
      }, {
        path: '/web/middle-level-css',
        name: 'middle-level-css',
        component: WebMiddleLevelCss
      }, {
        path: '/web/node',
        name: 'node',
        component: WebNode
      }, {
        path: '/web/high-level-js',
        name: 'high-level-js',
        component: WebHighLevelJs
      }, {
        path: '/web/wechat',
        name: 'wechat',
        component: WebWeChat
      }]
    }
  ]
})
