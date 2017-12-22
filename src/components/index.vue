<template>
  <div class="clear">
    <div class="app_memu">
      <appmenu></appmenu>
    </div>
    <div class="app_right">
      <topBar></topBar>
      <div class="app_content">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from '../common/topBar.vue'
import appmenu from '../common/menu.vue'
export default {
  components: {topBar, appmenu},
  name: 'index',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app_right{
  /* float: left; */
  margin-left: 100px;
  min-width: 500px;
  /* height: 100vh; */
}
.app_content{
  position: absolute;
  left: 100px;
  top: 100px;
  bottom: 0px;
  right: 0px;
}
.app_memu{
  float: left;
  height: 100vh;
  background: #2e3946;
}
.clear:after {
  content: '';
  display: block;
  height: 0;
  overflow: hidden;
  clear: both;
}

.clear {
  zoom: 1;
}
</style>
