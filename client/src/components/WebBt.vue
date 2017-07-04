<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webBt.introduce')" name="1">
        <div>{{ $t('webBt.btIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webBt.depends')" name="2">
        <div>{{ $t('webBt.btDepends') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webBt.consistency')" name="3">
        <div>{{ $t('webBt.btConsistency') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webBt.unsupported')" name="4">
        <div>{{ $t('webBt.btUnsupported') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
