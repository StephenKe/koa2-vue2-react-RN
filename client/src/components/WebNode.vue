<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webNode.introduce')" name="1">
        <div>{{ $t('webNode.nodeIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webNode.restful')" name="2">
        <div>{{ $t('webNode.nodeRestful') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
