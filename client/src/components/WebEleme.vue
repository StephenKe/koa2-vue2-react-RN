<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="$t('webEleme.introduce')" name="1">
        <div>{{ $t('webEleme.elemeIntroduce') }}</div>
        <div><a href="http://coding.imooc.com/class/74.html" target="_blank">{{ $t('webEleme.mockAddress') }}</a></div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webEleme.btnPadding')" name="2">
        <div>{{ $t('webEleme.elemeBtnPadding') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webEleme.imageShake')" name="3">
        <div>{{ $t('webEleme.elemeImageShake') }}</div>
      </el-collapse-item>
      <el-collapse-item :title="$t('webEleme.dpr')" name="4">
        <div>{{ $t('webEleme.elemeDpr') }}</div>
        <div><a href="http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/" target="_blank">{{ $t('webEleme.dprAddress') }}</a></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {}
</script>
