<template>
    <div class="index">
      <headercom></headercom>
      <div class="content">
        <asidecom class="left"/>
        <router-view class="right"/>
      </div>
    </div>
</template>

<script>
import headercom from '@/components/index/headercom'
import asidecom from '@/components/index/asidecom'
import news from '@/components/index/news'
import movies from '@/components/index/movies'
import channel from '@/components/index/channel'
  export default {
      name: "index",
      components:{
        headercom,asidecom,news,movies,channel
    }
  }
</script>

<style scoped>
.index{}
.content{height: auto;overflow: hidden;}
  .left{float:left;}
  .right{float:left;padding: 50px 30px;box-sizing: border-box;width: 84%;}
</style>
