<template>
  <div id="app">
    <!--<login></login>-->
    <router-view/>
  </div>
</template>

<script>
  import login from '@/components/login/login'
  // import index from '@/components/index/index'
export default {
  name: 'App',
  components:{
    login,
  }
}
</script>

<style>
  #app{background: #e1dcdc;}
  *{margin:0;padding:0;}
  a{text-decoration: none;}
  ul{list-style: none;}
</style>
