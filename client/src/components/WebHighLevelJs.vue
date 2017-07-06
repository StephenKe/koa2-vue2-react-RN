<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webHighLevelJs.introduce')" name="1">
        <div>{{ $t('webHighLevelJs.jsIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.generation')" name="2">
        <div>{{ $t('webHighLevelJs.jsGeneration') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.float')" name="3">
        <div>{{ $t('webHighLevelJs.jsFloat') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.property')" name="4">
        <div>{{ $t('webHighLevelJs.jsProperty') }}</div>
        <div>{{ $t('webHighLevelJs.jsProperty1') }}</div>
        <div>{{ $t('webHighLevelJs.jsProperty2') }}</div>
        <div>{{ $t('webHighLevelJs.jsProperty3') }}</div>
        <div>{{ $t('webHighLevelJs.jsProperty4') }}</div>
        <div>{{ $t('webHighLevelJs.jsProperty5') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.domain')" name="5">
        <div>{{ $t('webHighLevelJs.jsDomain') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.event')" name="6">
        <div>{{ $t('webHighLevelJs.jsEvent') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
