<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="toggleShow" name="1">
        <video width="100%" height="" controls autoplay ref="video">
          <source src="../../static/zhan-jiang.mp4" type="video/mp4">
          您的浏览器不支持Video标签
        </video>
      </el-collapse-item>
    </el-collapse>
    <el-carousel :interval="4000" arrow="always" style="margin-top: 3%">
      <el-carousel-item v-for="item in items" :key="item">
        <el-row :gutter="10">
          <el-col v-for="i in item" :key="i" :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content">{{ i }}</div></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1'],
      toggleShow: this.$t('zhanJiang.hideVideo'),
      items: [
        [ this.$t('zhanJiang.lobster'),
          this.$t('zhanJiang.abalone'),
          this.$t('zhanJiang.oyester'),
          this.$t('zhanJiang.cucumber'),
          this.$t('zhanJiang.crab'),
          this.$t('zhanJiang.scallop'),
          this.$t('zhanJiang.fujian') ],
        [ this.$t('zhanJiang.sunrise'),
          this.$t('zhanJiang.beach'),
          this.$t('zhanJiang.ship'),
          this.$t('zhanJiang.lighthouse'),
          this.$t('zhanJiang.temple'),
          this.$t('zhanJiang.orchard'),
          this.$t('zhanJiang.bikini') ],
        [ this.$t('zhanJiang.street'),
          this.$t('zhanJiang.tent'),
          this.$t('zhanJiang.family'),
          this.$t('zhanJiang.hostel'),
          this.$t('zhanJiang.hotel'),
          this.$t('zhanJiang.room'),
          this.$t('zhanJiang.author') ]
      ]
    }
  },
  mounted () {},
  methods: {
    handleChange (e) {
      this.toggleShow = e.length ? this.$t('zhanJiang.hideVideo') : this.$t('zhanJiang.showVideo')
      if (!e.length) {
        this.$refs.video.pause()
      } else {
        this.$refs.video.play()
      }
    }
  }
}
</script>
<style>
  .el-carousel__item {
    background-repeat: no-repeat;
    background-size: cover;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-of-type(1) {
    /*background-image: url("../assets/images/eat.jpg");*/
    background-color: #afafaf;
  }

  .el-carousel__item:nth-of-type(2) {
    /*background-image: url("../assets/images/look.jpg");*/
    background-color: #afafaf;
  }

  .el-carousel__item:nth-of-type(3) {
    /*background-image: url("../assets/images/stay.jpg");*/
    background-color: #afafaf;
    background-position: 50% 50%;
  }
  .grid-content {
    text-align: center;
  }
</style>
