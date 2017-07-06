<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webExpress.introduce')" name="1">
        <div>{{ $t('webExpress.epIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webExpress.env')" name="2">
        <div>{{ $t('webExpress.epEnv') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
