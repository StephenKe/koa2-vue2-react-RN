<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webGit.introduce')" name="1">
        <div>{{ $t('webGit.gitIntroduce') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.fetch')" name="2">
        <div>{{ $t('webGit.gitFetch') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.diff')" name="3">
        <div>{{ $t('webGit.gitDiff') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.merge')" name="4">
        <div>{{ $t('webGit.gitMerge') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.checkout')" name="5">
        <div>{{ $t('webGit.gitCheckout') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.branch')" name="6">
        <div>{{ $t('webGit.gitBranch') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.pull')" name="7">
        <div>{{ $t('webGit.gitPull') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.note')" name="8">
        <div>{{ $t('webGit.gitNote') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webGit.ignore')" name="9">
        <div>{{ $t('webGit.gitIgnore') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
