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
      primary: {
        label: 'Primary',
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript'
      },
      middle: {
        label: 'Mid-Level',
        css: 'CSS',
        js: 'JavaScript'
      },
      high: {
        label: 'High-Lever',
        node: 'Node',
        js: 'JavaScript'
      },
      frame: {
        label: 'Frame',
        bootstrap: 'Bootstrap',
        vue: {
          label: 'Vue',
          vuex: 'Vuex',
          vueRouter: 'vue-router',
          vueResource: 'vue-resource'
        },
        angular: 'Angular',
        elementUI: 'ElementUI',
        express: 'Express',
        koa: 'Koa'
      },
      experience: {
        label: 'Experience',
        eleme: 'Eleme',
        git: 'Git',
        wechat: 'WeChat',
        adonging: 'Adonging',
        amap: 'AMap',
        bmap: 'BMap'
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
      migratingAddress: 'Migration Doc',
      ifshow: 'v-if&v-show',
      vueIfshow: 'v-if means if render DOM.v-show means if display DOM which the DOM was rendered already.JavaScript runs successfully only after DOM rendered.',
      set: '$set',
      vueSet: 'The directly way to bind data sync is to use $set()',
      event: '$event',
      vueEvent: 'Send the arguments of $event to the event function so that u can get the event Object.'
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
    },
    webGit: {
      introduce: 'Introduce',
      gitIntroduce: 'Git is the most popular version control utils.Its principle is to change HEAD pointer,even though a delete operation will be recorded,but u\'ve got to make sure u are in the same git repository.',
      fetch: 'git fetch',
      gitFetch: 'Clone the remote repository to local.Recommend use this way to develop if team works.Complete command: git fetch origin remote_branch:new_branch',
      diff: 'git diff other_branch',
      gitDiff: 'Compare current branch and other branch',
      merge: 'git merge other_branch',
      gitMerge: 'Merge current branch and other branch',
      checkout: 'git checkout other_branch',
      gitCheckout: 'Switch to other branch',
      branch: 'git branch -d other_branch',
      gitBranch: 'Delete other branch,but it must be on master branch',
      pull: 'git pull origin remote_branch',
      gitPull: 'Clone the remote branch and merge to current repository,it\'s the same as git fetch + git merge.',
      note: 'Note',
      gitNote: 'git pull your branch to keep up to date with the remote branch before u begin one day\'s work',
      ignore: 'gitignore',
      gitIgnore: 'Git will not manage the file if the files config in .gitignore'
    },
    webMiddleLevelCss: {
      compatibility: 'Compatibility',
      cssCompatibility: 'CSS attribute compatibility checking online'
    },
    webNode: {
      introduce: 'Introduce',
      nodeIntroduce: 'I thought that NodeJs is designed to work in the interface.',
      restful: 'RESTful',
      nodeRestful: 'RESTful is some kind of design style、design principle and limit condition.Especially for the communication with client and server.For example the response status is designed according to RESTful style.'
    },
    webHighLevelJs: {
      introduce: 'Introduce',
      jsIntroduce: 'Recommend 《JavaScript Senior Program Design》,this part comes from the book.',
      generation: '*function',
      jsGeneration: '*function: present generation function.Code like: yield generation.next().value,It will output a value when the generation function runs the first time.Run yieid again will output a new value and the generation function runs the second time',
      float: 'Float',
      jsFloat: 'Do not compare float data casually,example:',
      property: 'Object.defineProperty',
      jsProperty: 'Object.defineProperty(Obj, \'property\', {[[Configrable]], [[Enumerable]], [[Writable]], [[Value]]})',
      jsProperty1: 'Configrable: \'configrable\'',
      jsProperty2: 'Enumerable: \'for-in enable\'',
      jsProperty3: 'Writable: \'writable\'',
      jsProperty4: 'Value: \'value\'',
      jsProperty5: 'Every Object in JavaScript has defineProperty method.The method has 4 configable attribute(default: true、true、true、\'\').Once Object.defineProperty() has called,the 4 configable attribute will be writen(default: false、false、false、\'\').',
      domain: 'Document.domain',
      jsDomain: 'The method can get standard domain',
      event: 'Event',
      jsEvent: 'Combination key input event、phone rotate event',
      form: 'From',
      jsFrom: 'Key enter will trigger submit type button',
      console: 'Console',
      jsConsole: 'console.log can not reflect the real running of code many times.Cause it\'s the sync snapshot.',
      queue: 'Message Queue',
      jsQueue: 'JavaScript runs order by message queue(Test Online)'
    },
    webWeChat: {
      introduce: 'Introduce',
      weIntroduce: 'WeChat Pubic Subscription',
      weAddress: 'WeChat Pubic Subscription Developer Document',
      title: 'Document.title',
      weTitle: 'Every page has different title,but WeChat don\'t know document.title,u needs to use an iframe tag to load the document.title'
    },
    webAngular: {
      introduce: 'Introduce',
      ngIntroduce: 'Angular is a client MVC framework that developed by Google team.It\'s one of the most popular frameworks.MVC as same as MVVM,they are both based on data binded sync.U can view details on the introduction with MVVM.',
      scroll: 'ngScroll',
      ngScroll: 'ng-scroll will diasbled click event'
    },
    webAdonging: {
      introduce: 'Introduce',
      adIntroduce: 'Adonging.com is a GPS and share traffic company on ShenZhen.It has many Internet projects,this part will introduce my experience in these projects.',
      lrz: 'lrzJs',
      adLrz: 'lrz.js is a compression plugin which the compress quality is 0.7.And it cause a 2M picture still has 1.3M after compressed.And it will cause server response with 403 error if request with 1.3M data.So u should set compress quality less than 0.4'
    },
    webMiddleLevelJs: {
      qq: 'QQ',
      jsQq: 'Link to http://wpa.qq.com/msgrd?v=3&uin=2850879710&site=qq&menu=yes can open QQ online',
      data: 'Data Type',
      jsData: 'Be careful of using basic data and quote data.',
      bit: 'Bit-Reserved',
      jsBit: '~: Bit-Reserved,~-1 = 0,~(else) = Number,it can be used to do logic judge.'
    },
    webAmap: {
      introduce: 'Introduce',
      amIntroduce: 'AMap is a Internet map that support location online.This part will remind some problems when using AMap.',
      amAddress: 'AMap developer doc',
      convert: 'Convert',
      amConvert: 'AMap supports convert 40 points every time at most.'
    },
    webPrimaryCss: {
      transform: 'Transform',
      cssTransform: 'Both 2D&3D are according to coordinates,u can transform on any position with the command transform-origin(change the origin of coordinates).'
    },
    webExpress: {
      introduce: 'Introduce',
      epIntroduce: 'Express is a faster、open and simple framework that based on NodeJs.',
      env: 'ENV',
      epEnv: 'Express will set current environment into \'env\' string so that u can get current environment with app.get(‘env’).Default environment is development if current environment has not been setted.'
    },
    webPrimaryJs: {
      event: 'Event',
      jsEvent: 'How to get event Object in the event function with several arguments.'
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
      primary: {
        label: '初级',
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript'
      },
      middle: {
        label: '中级',
        css: 'CSS',
        js: 'JavaScript'
      },
      high: {
        label: '高级',
        node: 'Node',
        js: 'JavaScript'
      },
      frame: {
        label: '框架',
        bootstrap: 'Bootstrap',
        vue: {
          label: 'Vue',
          vuex: 'Vuex',
          vueRouter: 'vue-router',
          vueResource: 'vue-resource'
        },
        angular: 'Angular',
        elementUI: 'ElementUI',
        express: 'Express',
        koa: 'Koa'
      },
      experience: {
        label: '经验',
        eleme: '饿了么',
        git: 'Git',
        wechat: 'WeChat',
        adonging: '一动网',
        amap: '高德地图',
        bmap: '百度地图'
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
      migratingAddress: '迁移文档',
      ifshow: 'v-if&v-show',
      vueIfshow: '注意v-if和v-show的区别，if是‘是否渲染’,直接插入或则移除改DOM节点,show是‘隐藏显示’,改DOM节点一直都在,使用这种属性包裹的组件,js只有在DOM节点在html中才会运行',
      set: '$set',
      vueSet: 'vue双向数据双向绑定最靠谱的方法是使用$set()',
      event: '$event',
      vueEvent: 'Vue中可以通过传入$event参数获取原生事件对象'
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
    },
    webGit: {
      introduce: '简介',
      gitIntroduce: 'git是当前市面上最流行的版本库管理工具,没有之一。其原理是git所有的操作都是改变HEAD指针,即使是删除操作也会有记录,前提是同一个git仓库。',
      fetch: 'git fetch',
      gitFetch: '将远程的一个分支克隆到本地,团队开发建议新建一个本地分支保存此远程分支,完整指令：git fetch origin remote_branch:new_branch',
      diff: 'git diff other_branch',
      gitDiff: '比较当前仓库和other_branch仓库的不同',
      merge: 'git merge other_branch',
      gitMerge: '当前仓库与other_branch仓库合并',
      checkout: 'git checkout other_branch',
      gitCheckout: '切换到other_branch仓库',
      branch: 'git branch -d other_branch',
      gitBranch: '删除other_branch仓库,前提是当前仓库必须是master分支',
      pull: 'git pull origin remote_branch',
      gitPull: '克隆远程remote_branch分支并与当前仓库合并,相当于git fetch + git merge,不推荐使用,同步master的更新状态推荐使用git fetch+git merge的方式,使用git fetch 克隆远程分支并保存在本地新建分支,与当前自己工作分支比较新建分支的不同,再与新建分支合并,再更新自己的远程分支,最后删掉本地新建分支,再在自己当前的分支(已和远程分支保持一致)继续开发',
      note: 'Note',
      gitNote: '每天开始写代码前先登录gitlab看下master分支是否有更新',
      ignore: 'gitignore',
      gitIgnore: 'Git仓库不管理.gitignore文件里配置的文件'
    },
    webMiddleLevelCss: {
      compatibility: '兼容性',
      cssCompatibility: 'CSS属性兼容性在线检查'
    },
    webNode: {
      introduce: '简介',
      nodeIntroduce: '个人理解NodeJs就是用来编写设计后台接口的',
      restful: 'RESTful',
      nodeRestful: 'RESTful是一种设计风格,设计原则和约束条件,特别是前后端的通信规范,比如各种状态码就是基于RESTful规范'
    },
    webHighLevelJs: {
      introduce: '简介',
      jsIntruduce: '推荐《JavaScript高级程序设计》,这部分内容摘自此书',
      generation: '*function',
      jsGeneration: '带 * 号的函数定义: 表示生成器函数,与yield,generation.next().value,表示执行一次生成器函数得到的值,再次执行就是下一次的值',
      float: 'Float',
      jsFloat: '不要随便比较数值浮点型数据,example:',
      property: 'Object.defineProperty',
      jsProperty: 'Object.defineProperty(Obj, \'property\', {[[Configrable]], [[Enumerable]], [[Writable]], [[Value]]})',
      jsProperty1: 'Configrable: \'可删除\'',
      jsProperty2: 'Enumerable: \'可for-in\'',
      jsProperty3: 'Writable: \'可写\'',
      jsProperty4: 'Value: \'值\'',
      jsProperty5: 'Js中对象都会内置有defineProperty方法,方法中的四个可配置属性按顺序默认为true、true、true、\'\',而一旦对象调用了defineProperty方法,无论给不给方法配置参数,四个可配置参数的默认值将被改写为false、false、false、\'\'',
      domain: 'Document.domain',
      jsDomain: '可以获取标准域名',
      event: 'Event',
      jsEvent: '组合键输入事件,手机翻转事件',
      form: 'From',
      jsFrom: '点击回车会触发submit类型按钮',
      console: 'Console',
      jsConsole: 'console.log很多时候不能真正实时的反应JS时序;因为是异步的内存快照',
      queue: 'Message Queue',
      jsQueue: 'js程序处理消息队列在线测试'
    },
    webWeChat: {
      introduce: '简介',
      weIntroduce: '基于微信平台开发微信公众号',
      weAddress: '微信公众号开发者文档',
      title: 'Document.title',
      weTitle: '每个子页面都有不同的title,微信不识别document.title,需要一个iframe load一下'
    },
    webAngular: {
      introduce: '简介',
      ngIntroduce: 'Angular是谷歌团队开发的一套前端MVC(module view controller)框架,是目前三大前端主流框架之一,MVC和MVVM框架类似,也是基于数据双向绑定原理,详情可参考MVVM介绍',
      scroll: 'ngScroll',
      ngScroll: 'ng-scroll插件会禁止点击事件'
    },
    webAdonging: {
      introduce: '简介',
      adIntroduce: '一动网是深圳一家车载导航及共享出行自研公司,拥有一系列互联网项目,这部分将介绍这些项目里填过的坑',
      lrz: 'lrzJs',
      adLrz: 'lrz.js是一款图片压缩插件,压缩质量默认是0.7,导致大于2M的图片压缩后仍有1.3M,此时1.3M的数据添加在http请求头中,会导致后端返回431请求头过大错误,把压缩质量改为0.1就好了'
    },
    webMiddleLevelJs: {
      qq: 'QQ',
      jsQq: 'js打开链接http://wpa.qq.com/msgrd?v=3&uin=2850879710&site=qq&menu=yes可打开在线QQ即时通讯',
      data: 'Data Type',
      jsData: '注意基本类型数据和引用类型数据的使用',
      bit: 'Bit-Reserved',
      jsBit: '~: 按位取反,~-1值为0,除-1外其它的值都是非0数字,可做true or false判断'
    },
    webAmap: {
      introduce: '简介',
      amIntroduce: '高德地图是国内一款提供定位服务的地图,本部分介绍使用高德地图应该注意的问题',
      amAddress: '高德开放平台开发文档',
      convert: 'Convert',
      amConvert: '高德地图一次最多转换40个坐标点'
    },
    webPrimaryCss: {
      transform: 'Transform',
      cssTransform: '2D&3D变换都是根据坐标系变换,可以通过transform-origin改变坐标原点以实现不同位置的变换'
    },
    webExpress: {
      introduce: '简介',
      epIntroduce: 'express是一款基于 Node.js 平台,快速、开放、极简的 web 开发框架',
      env: 'ENV',
      epEnv: 'express框架会把当前环境变量set进env字符串中,通过app.get(‘env’)获取当前环境变量,没设置环境变量默认为’development’'
    },
    webPrimaryJs: {
      event: 'Event',
      jsEvent: '带有参数的事件回调函数怎么获取事件对象'
    }
  }
}
export {
  messages
}
