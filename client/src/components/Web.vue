<template>
  <div>
    <el-tree :data="data" :props="defaultProps" accordion :highlight-current="true" @current-change="handleNodeClick"></el-tree>
    <hr>
    <router-view></router-view>
    <el-button v-show="btnTop" type="primary" class="top" icon="caret-top" @click="toTop"></el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        label: this.$t('web.primary.label'),
        key: 1,
        children: [{
          label: this.$t('web.primary.html'),
          key: 11
        }, {
          label: this.$t('web.primary.css'),
          key: 12
        }, {
          label: this.$t('web.primary.js'),
          key: 13
        }]
      }, {
        label: this.$t('web.middle.label'),
        key: 2,
        children: [{
          label: this.$t('web.middle.js'),
          key: 21
        }, {
          label: this.$t('web.middle.css'),
          key: 22
        }]
      }, {
        label: this.$t('web.high.label'),
        key: 3,
        children: [{
          label: this.$t('web.high.node'),
          key: 31
        }, {
          label: this.$t('web.high.js'),
          key: 32
        }]
      }, {
        label: this.$t('web.frame.label'),
        key: 4,
        children: [{
          label: this.$t('web.frame.bootstrap'),
          key: 41
        }, {
          label: this.$t('web.frame.vue.label'),
          key: 42,
          children: [{
            label: this.$t('web.frame.vue.vuex'),
            key: 421
          }, {
            label: this.$t('web.frame.vue.vueRouter'),
            key: 422
          }, {
            label: this.$t('web.frame.vue.vueResource'),
            key: 423
          }]
        }, {
          label: this.$t('web.frame.angular'),
          key: 43
        }, {
          label: this.$t('web.frame.elementUI'),
          key: 44
        }, {
          label: this.$t('web.frame.express'),
          key: 57
        }, {
          label: this.$t('web.frame.koa'),
          key: 58
        }]
      }, {
        label: this.$t('web.experience.label'),
        key: 5,
        children: [{
          label: this.$t('web.experience.eleme'),
          key: 51
        }, {
          label: this.$t('web.experience.git'),
          key: 52
        }, {
          label: this.$t('web.experience.wechat'),
          key: 53
        }, {
          label: this.$t('web.experience.adonging'),
          key: 54
        }, {
          label: this.$t('web.experience.amap'),
          key: 55
        }, {
          label: this.$t('web.experience.bmap'),
          key: 56
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      routerMap: new Map([
          [41, '/web/bt'],
          [42, '/web/vue'],
          [51, '/web/eleme'],
          [52, '/web/git'],
          [22, '/web/middle-level-css'],
          [31, '/web/node'],
          [32, '/web/high-level-js'],
          [53, '/web/wechat'],
          [43, '/web/angular'],
          [54, '/web/adonging'],
          [21, '/web/middle-level-js'],
          [55, '/web/amap'],
          [12, 'web/primary-css'],
          [57, '/web/express'],
          [13, 'web/primary-js']
      ]),
      btnTop: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleNodeClick (data) {
      this.$router.replace({ path: '/web' })
      // 此处不用data.$treeNodeId,用自定义属性key,因路由切换时发现$treeNodeId不会重置,会导致Id判断不准
      if (this.routerMap.has(data.key)) {
        this.$router.replace({ path: this.routerMap.get(data.key) })
      }
      if (data.key === 56) {
        window.open('http://www.jianshu.com/p/2d07fc152d74')
      }
    },
    handleScroll () {
      this.btnTop = window.document.body.scrollTop >= 100
    },
    toTop () {
      window.document.body.scrollTop = 0
    }
  },
  destroyed () {
    window.removeEventListener('scroll')
  }
}
</script>

<style>
  .el-tree {
    border: 0 !important;
  }
  .top {
    position: fixed;
    bottom: 2%;
    right: 5%;
    border-radius: 45% !important;
    font-size: 25px !important;
    color: #20a0ff !important;
    background-color: transparent !important;
  }
</style>
