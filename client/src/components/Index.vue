<template>
  <div>
    <transition name="fade">
      <div v-if="ok" class="index"></div>
    </transition>
    <el-button class="lang-switch" type="primary" @click="langSwitch">{{ $t("index.lang") }}</el-button>
    <img src="../assets/logo.png" class="logo">
    <radiate-btn class="about-me" :title="$t('index.me')" v-on:pass="password"></radiate-btn>
    <radiate-btn class="web-develop" :title="$t('index.job')" v-on:route="jumpTo('/web')"></radiate-btn>
    <radiate-btn class="zhan-jiang" :title="$t('index.home')" v-on:route="jumpTo('/zhan-jiang')"></radiate-btn>
    <el-button id="daddy" type="primary" @click="getPassword">Daddy</el-button>
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
    this.ok = false
  },
  methods: {
    langSwitch () {
      window.sessionStorage.lang = this.$t('index.lang') === '中文' ? 'zh' : 'en'
      window.location.reload()
    },
    jumpTo (route) {
      this.$router.replace({ path: route })
    },
    password () {
      this.my$prompt(this.$t('base.password'), /^\d+$/, (val) => {
        this
          .$http
          .get('/api/password/' + val.value)
          .then(function (res) {
            if (!res.data) {
              this.$message({
                type: 'info',
                message: this.$t('base.password') + ' ' + this.$t('base.err')
              })
            } else {
//              window.location.href = 'https://www.baidu.com'
              window.open('https://www.baidu.com')
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      })
    },
    getPassword () {
      this.my$prompt('baba', /^[a-z]+$/i, (val) => {
        this
          .$http
          .get('/api/daddy/' + val.value)
          .then(function (res) {
            console.log(res.data)
          })
          .catch(function (err) {
            console.log(err)
          })
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
  transition: all 1s
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
.lang-switch {
  position: absolute;
  top: 3%;
  left: 75%;
}
</style>
<style>
  .el-message-box {
    width: 350px !important;
  }
  #daddy {
    position: fixed;
    left: 40%;
    top: 40%;
    display: none;
  }
</style>
