<template>
  <div class="clear">
    <div>
      <img class="app_logo" src="../assets/logo.png" alt="logo">
    </div>
    <div class="app_menu">
      <router-link :to="{path:'/aboutme'}">关于我</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped>
.app_logo{
  width: 60px;
  background-size: cover;
}
.app_menu{
  width: 100px;
}
</style>


