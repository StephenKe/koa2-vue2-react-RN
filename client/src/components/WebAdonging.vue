<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webAdonging.introduce')" name="1">
        <div>{{ $t('webAdonging.adIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webAdonging.lrz')" name="2">
        <div>{{ $t('webAdonging.adLrz') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
