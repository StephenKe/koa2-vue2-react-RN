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
      <el-collapse-item :title="$t('webHighLevelJs.form')" name="7">
        <div>{{ $t('webHighLevelJs.jsFrom') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.console')" name="8">
        <div>{{ $t('webHighLevelJs.jsConsole') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.queue')" name="9">
        <div><a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D" target="_blank">{{ $t('webHighLevelJs.jsQueue') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webHighLevelJs.http')" name="10">
        <div>{{ $t('webHighLevelJs.jsHttp') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
