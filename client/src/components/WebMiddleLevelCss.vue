<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webMiddleLevelCss.compatibility')" name="1">
        <div><a href="http://caniuse.com" target="_blank">{{ $t('webMiddleLevelCss.cssCompatibility') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webMiddleLevelCss.canvas')" name="2">
        <div>{{ $t('webMiddleLevelCss.cssCanvas') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
