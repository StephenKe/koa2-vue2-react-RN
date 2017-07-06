<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webWeChat.introduce')" name="1">
        <div>{{ $t('webWeChat.weIntroduce') }}</div>
        <div><a href="https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432" target="_blank">{{ $t('webWeChat.weAddress') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webWeChat.title')" name="2">
        <div>{{ $t('webWeChat.weTitle') }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
