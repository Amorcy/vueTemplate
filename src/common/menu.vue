<template>
  <div class="menu">
    <div>
      <img class="app_logo" src="../assets/img/keji.jpg" alt="logo">
    </div>
    <div class="app_menu">
      <div v-for="item in app_router">
        <router-link :to="{path:'/aboutme'}">关于我</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      app_router: [
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
        { path: '/aboutme', name: '关于我'},
      ]
    }
  }
}
</script>
<style scoped>
.menu{
  width: 150px;
}
.app_logo{
  width: 100px;
  background-size: cover;
  margin: 10px 0 20px;
  border-radius: 100px;
}
.app_menu{
  /* width: 100px; */
}
.app_menu>div{
  height: 30px;
  line-height: 30px;
  margin: 5px 0;
  font: 18px 'weiruanyahei';
  border-top: 1px solid #999
}
a{
  color: #bfcbd9;
}
</style>


