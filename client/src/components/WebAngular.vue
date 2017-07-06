<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webAngular.introduce')" name="1">
        <div>{{ $t('webAngular.ngIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webAngular.scroll')" name="2">
        <div>{{ $t('webAngular.ngScroll') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
