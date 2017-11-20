// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueI18n from 'vue-i18n'
import * as lang from './assets/lang/lang'
import methos from './config/methods'
import vueBetterScroll from 'vue2-better-scroll'
const langs = ['zh', 'en']

// console.log(Vue.http)
Vue.use(VueResource)
Vue.use(elementUI)
Vue.use(vueBetterScroll)

// lang-config
if (!window.sessionStorage.lang) {
  window.sessionStorage.lang = langConfig(langs)
}
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: window.sessionStorage.lang, // set locale
  messages: lang.messages // set locale messages
})

Vue.config.productionTip = false

// 自定义全局方法
Vue.use(methos)
/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  template: `<div><vue-better-scroll
                :style="height: ${this.phoneHeight}px"
                :startY="0"
              <div>
                  <el-button v-show="pathName" type="primary" class="home" @click="home">H</el-button>
                  <transition name="bounce">
                      <router-view class="view"></router-view>
                  </transition>
              </div>
            </vue-better-scroll></div>`,
  data: {
    pathName: true,
    phoneHeight: 0
  },
  watch: {
    '$route' (val) {
      if (val.path === '/') {
        this.pathName = false
        return
      }
      this.pathName = true
    }
  },
  mounted () {
    const phoneAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    this.$nextTick(() => {
      this.phoneHeight = !~phoneAgents.indexOf(window.navigator.userAgent) ? 0 : window.screen.height
      window.alert(window.navigator.userAgent)
    })
    if (this.$route.path === '/') {
      this.pathName = false
    }
  },
  methods: {
    home () {
      this.$router.replace('/')
    }
  }
}).$mount('#app')

function langConfig (langs) {
  for (let i = 0; i < langs.length; i++) {
    if (~window.navigator.language.toLocaleLowerCase().indexOf(langs[i])) {
      return langs[i]
    }
  }
}
