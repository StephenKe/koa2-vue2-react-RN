<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webVue.introduce')" name="1">
        <div>{{ $t('webVue.vueIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.MVVM')" name="2">
        <div>{{ $t('webVue.MVVMIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.ifshow')" name="3">
        <div>{{ $t('webVue.vueIfshow') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.props')" name="4">
        <div>{{ $t('webVue.vueProps') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.nextTick')" name="5">
        <div>{{ $t('webVue.vueNextTick') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.set')" name="6">
        <div>{{ $t('webVue.vueSet') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.set')" name="7">
        <div>{{ $t('webVue.vueSet') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.event')" name="8">
        <div>{{ $t('webVue.vueEvent') }}</div>
        <div><a href="http://www.jianshu.com/p/93053e3caac2" target="_blank">{{ $t('webVue.eventQueue') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webVue.migrating')" name="9">
        <div>{{ $t('webVue.vueMigrating') }}</div>
        <div><a href="https://vuejs.org/v2/guide/migration.html" target="_blank">{{ $t('webVue.migratingAddress') }}</a></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
