<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webAmap.introduce')" name="1">
        <div>{{ $t('webAmap.amIntroduce') }}</div>
        <div><a href="http://lbs.amap.com/" target="_blank">{{ $t('webAmap.amAddress') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webAmap.convert')" name="2">
        <div>{{ $t('webAmap.amConvert') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
