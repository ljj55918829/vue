<template>
  <div class="aside">
    <ul>
      <router-link to="/news"><li>新闻资讯</li></router-link>
      <router-link to="/movies"><li>影视列表</li></router-link>
      <router-link to="/channel"><li>产品中心</li></router-link>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "asidecom"
    }
</script>

<style scoped>
.aside{width: 200px;height:auto;overflow: hidden;padding-bottom: 100px;background: dimgray;text-align: center;}
  ul li{line-height:60px;color: white;border-bottom: 2px solid #00E8D7;font-size: 18px;}
</style>
