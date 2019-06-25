<template>
  <div id="app">
    <!--<login></login>-->
    <router-view/>
  </div>
</template>

<script>
  import login from '@/components/login/login'
  import index from '@/components/index/index'
export default {
  name: 'App',
  components:{
    login,index
  }
}
</script>

<style>

</style>
