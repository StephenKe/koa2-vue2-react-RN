/**
 * Created by sinowinner on 17/7/3.
 */
const messages = {
  en: {
    index: {
      lang: '中文',
      me: 'About Me',
      job: 'Web Develop',
      home: 'Zhan Jiang'
    },
    web: {
      primary: 'Primary',
      middle: 'Mid-Level',
      high: 'High-Lever',
      frame: {
        label: 'Frame',
        bootstrap: 'Bootstrap',
        vue: {
          label: 'Vue',
          vuex: 'Vuex',
          vueRouter: 'vue-router',
          vueResource: 'vue-resource'
        },
        elementUI: 'ElementUI'
      },
      experience: {
        label: 'Experience',
        eleme: 'Eleme'
      }
    },
    webBt: {
      introduce: 'Introduce',
      btIntroduce: 'Bootstrap also calls bt,which is an UI framework.And it can also realize complicated interaction;Even though there are few projects use bt now,but it\'s essential to learn bt due to many hot UI frameworks\'s realization are depends on bt.',
      depends: 'Dependents',
      btDepends: 'IE8、THML5 elements and media query depends on HTML5 Shim and Respon.js.However Respons.js is not allowed to import locally.Due to bt depends on jQuery,u must import jQuery before imports any other bt\'s JavaScript file.',
      consistency: 'The Consistency Of Different Browsers',
      btConsistency: 'In order to keep the consistency of different browsers,please make sure your website uses the Doctype of HTML5',
      unsupported: 'Unsupported',
      btUnsupported: 'Android【ie,Opera,Safari】、ios【Firefox,ie,Opera】、mac os x【ie】、Windows【ie7-,Safari】'
    },
    webVue: {
      introduce: 'Introduce',
      vueIntroduce: 'Vue is developed by yuxi You who is worked in Google.As a MVVM framework,it combines the advantages and quits the shortcomings in angular&react.It\'s easy to learn especially for the freshman.It\'s one of the most popular frameworks',
      MVVM: 'MVVM',
      MVVMIntroduce: 'MVVM\'s full name is module view view module which means module influences view and view influence module.On that way the result is the data can be binded sync,and u can watch the data directly.The realization of MVVM\'s data sync is based on the Object.getProperty()&Object.setProperty() in JavaScript.',
      props: 'Props',
      vueProps: 'If props quote type data,children component\'s data changed will change father component\'s data,nomatter the data is binded sync.',
      nextTick: 'nextTick',
      vueNextTick: 'Using Vue.$nextTick() more,it will trigger after DOM rendered',
      migrating: '1.x -> 2.x Migrating',
      vueMigrating: 'The difference is 2.x add virtual DOM',
      migratingAddress: 'Migration Doc'
    },
    webEleme: {
      introduce: 'Introduce',
      elemeIntroduce: 'his is a video about eleme APP from imooc.com',
      mockAddress: 'The eleme video from imooc.com',
      btnPadding: 'Button-Padding',
      elemeBtnPadding: 'Add padding to button can increase its clickable range',
      imageShake: 'Image Shake',
      elemeImageShake: 'Set padding-top:100%(percentage relative to width) to image can realize layout about equal width and height.And it can fix the bug about shaking when loading on the first time.',
      dpr: 'DPR',
      elemeDpr: 'Different screen has different dpr,thus a image will has different size on different screen and it needs deal with dpr',
      dprAddress: 'Xinxu Zhang\'s understand about dpr'
    }
  },
  zh: {
    index: {
      lang: 'English',
      me: '关于站长',
      job: '前端开发',
      home: '家乡'
    },
    web: {
      primary: '初级',
      middle: '中级',
      high: '高级',
      frame: {
        label: '框架',
        bootstrap: 'Bootstrap',
        vue: {
          label: 'Vue',
          vuex: 'Vuex',
          vueRouter: 'vue-router',
          vueResource: 'vue-resource'
        },
        elementUI: 'ElementUI'
      },
      experience: {
        label: '经验',
        eleme: '饿了么'
      }
    },
    webBt: {
      introduce: '简介',
      btIntroduce: 'Bootstrap简称bt,是一套响应式UI框架,同时支持js实现复杂交互逻辑;虽然现在很少有项目直接使用bt,但深入了解这套框架还是很有必要的,因市面上很多流行的UI框架都是基于bt的,例如本站所使用的UI框架elementUI,其就是基于bt实现的。',
      depends: '依赖',
      btDepends: 'HTML5 Shim 和 Respond.js 用于让 IE8 支持 HTML5元素和媒体查询,Respond.js 不支持本地引入,引入bt的js文件前需先引入jq,因bt的js依赖jq',
      consistency: '浏览器一致性',
      btConsistency: '为保证浏览器表现一致,Bootstrap 创建的网页开头要使用 HTML5 的文档类型(Doctype)',
      unsupported: '不兼容',
      btUnsupported: '安卓【ie,Opera,Safari】、ios【火狐,ie,Opera】、mac os x【ie】、Windows【ie7-,Safari】'
    },
    webVue: {
      introduce: '简介',
      vueIntroduce: 'Vue是由谷歌的尤雨溪主导开发的一套MVVM框架,它集合了angular和react的优点,摒弃了它们的缺点,特别是对于新人来说,这套框架非常容易上手,是当前主流框架之一',
      MVVM: 'MVVM',
      MVVMIntroduce: 'MVVM全称module view view module,从字面上理解就是module影响view,view影响module,可以理解为是模块层和视图层互相影响,结果就是数据双向绑定,能够直观地观察数据的变化。MVVM框架数据双向绑定的实现基于js中的getProperty和setproperty方法。',
      props: 'Props',
      vueProps: 'props的值如果是引用数据类型,值发生改变则父子组件该数据都会发生改变,无论是双向还是单向绑定',
      nextTick: 'nextTick',
      vueNextTick: '多用nextTick函数,当DOM节点渲染完毕后触发nextTick的回调函数',
      migrating: '1.x -> 2.x 迁移',
      vueMigrating: '最大的区别是2.x增加了虚拟DOM的概念',
      migratingAddress: '迁移文档'
    },
    webEleme: {
      introduce: '简介',
      elemeIntroduce: '这是慕课网的一个高仿饿了么APP的实战视频',
      mockAddress: '慕课饿了么实战视频',
      btnPadding: 'Button-Padding',
      elemeBtnPadding: '给按钮添加padding属性可扩大它的可点击范围，提升用户体验',
      imageShake: '图片首次加载抖动',
      elemeImageShake: 'iamge设置padding-top:100%,百分比数值相对width,视频中用于实现宽高相等的图片布局,解决图片第一次加载的抖动问题',
      dpr: 'DPR',
      elemeDpr: '不同屏幕有不同的设备像素比dpr,因此同一图片在不同屏幕上的显示大小是不一样的,需做dpr处理',
      dprAddress: '张鑫旭关于dpr的讲解'
    }
  }
}
export {
  messages
}
