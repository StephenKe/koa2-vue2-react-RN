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
        label: this.$t('web.primary'),
        key: 1,
        children: [{
          label: '二级 1-1',
          key: 11,
          children: [{
            label: '三级 1-1-1',
            key: 111
          }]
        }]
      }, {
        label: this.$t('web.middle.label'),
        key: 2,
        children: [{
          label: '二级 2-1',
          key: 21,
          children: [{
            label: '三级 2-1-1',
            key: 211
          }]
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
          [53, '/web/wechat']
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
