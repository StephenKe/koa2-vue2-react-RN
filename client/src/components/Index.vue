<template>
  <div>
    <transition name="fade" appear="true">
      <div v-if="ok" class="index" ref="modal"></div>
    </transition>
    <img src="../assets/logo.png" class="logo">
    <radiate-btn class="about-me"></radiate-btn>
    <radiate-btn class="web-develop"></radiate-btn>
    <radiate-btn class="zhan-jiang"></radiate-btn>
    <!--<el-button type="primary" v-for="btn in btns" :key="btn" @click="getData(btn)">{{ btn }}</el-button>-->
    <!--<div class="hello">-->
      <!--<h1>{{ msg }}</h1>-->
      <!--<h2>Essential Links</h2>-->
      <!--<ul>-->
        <!--<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>-->
        <!--<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>-->
        <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>-->
        <!--<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>-->
        <!--<br>-->
        <!--<li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>-->
      <!--</ul>-->
      <!--<h2>Ecosystem</h2>-->
      <!--<ul>-->
        <!--<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>-->
        <!--<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>-->
        <!--<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>-->
        <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>-->
      <!--</ul>-->
    <!--</div>-->
  </div>
</template>

<script>
const RadiateBtn = (resolve) => require(['./RadiateBtn'], resolve)
export default {
  name: 'hello',
  components: {
    RadiateBtn
  },
  data () {
    return {
      ok: true
    }
  },
  mounted () {
//    let _this = this
//    window.setTimeout(() => {
//      _this.$refs.modal.style.opacity = 0
//    }, 0)
    this.ok = false
  },
  methods: {
    getData (val) {
      this
        .$http.get(`/api/${val}`)
        .then((res) => {
          console.log('success')
          console.log(res)
          this.msg = res.data
        })
        .catch((err) => {
          console.log('error')
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.logo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
.index {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: #fff;
  /*opacity: 1;*/
  /*transition: all 2s;*/
  /*-webkit-transition: all 2s;*/
  /*-moz-transition: all 2s;*/
  /*-ms-transition: all 2s;*/
  /*-o-transition: all 2s;*/
  /*transition: all 2s;*/
}
.fade-enter-active, .fade-leave-active {
  transition: all 2s
}
.about-me {
  position: absolute !important;
  left: 45%;
  top: 10%;
}
.zhan-jiang {
  position: absolute !important;
  left: 88%;
  top: 65%;
}
</style>
