<template>
  <div>
    <el-tree :data="data" :props="defaultProps" :highlight-current="true" @current-change="handleNodeClick"></el-tree>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        label: this.$t('web.primary'),
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: this.$t('web.middle'),
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: this.$t('web.high'),
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }, {
        label: this.$t('web.frame.label'),
        children: [{
          label: this.$t('web.frame.bootstrap')
        }, {
          label: this.$t('web.frame.vue.label'),
          children: [{
            label: this.$t('web.frame.vue.vuex')
          }, {
            label: this.$t('web.frame.vue.vueRouter')
          }, {
            label: this.$t('web.frame.vue.vueResource')
          }]
        }, {
          label: this.$t('web.frame.elementUI')
        }]
      }, {
        label: this.$t('web.experience.label'),
        children: [{
          label: this.$t('web.experience.eleme')
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      routerMap: new Map([
          [15, '/web/bt'],
          [16, '/web/vue'],
          [22, '/web/eleme']
      ])
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
      this.$router.replace({ path: '/web' })
      if (this.routerMap.has(data.$treeNodeId)) {
        this.$router.replace({ path: this.routerMap.get(data.$treeNodeId) })
      }
    }
  }
}
</script>

<style>
  .el-tree {
    border: 0 !important;
  }
</style>
