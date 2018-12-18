<template>
  <div id="app">
    <headr></headr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
    headr: () => import("./components/common/head.vue"),
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-size: 12px;
}
</style>
