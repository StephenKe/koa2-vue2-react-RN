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
import WebAngular from '@/components/WebAngular'
import WebAdonging from '@/components/WebAdonging'
import WebMiddleLevelJs from '@/components/WebMiddleLevelJs'
import WebAmap from '@/components/WebAmap'
import WebPrimaryCss from '@/components/WebPrimaryCss'
import WebExpress from '@/components/WebExpress'
import WebPrimaryJs from '@/components/WebPrimaryJs'
import Construction from '@/components/Construction'

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
      }, {
        path: '/web/angular',
        name: 'angular',
        component: WebAngular
      }, {
        path: '/web/adonging',
        name: 'adonging',
        component: WebAdonging
      }, {
        path: '/web/middle-level-js',
        name: 'middle-level-js',
        component: WebMiddleLevelJs
      }, {
        path: '/web/amap',
        name: 'amap',
        component: WebAmap
      }, {
        path: '/web/primary-css',
        name: 'primary-css',
        component: WebPrimaryCss
      }, {
        path: '/web/express',
        name: 'express',
        component: WebExpress
      }, {
        path: '/web/primary-js',
        name: 'primary-js',
        component: WebPrimaryJs
      }]
    },
    {
      path: '/zhan-jiang',
      name: 'zhan-jiang',
      component: Construction
    }
  ]
})
