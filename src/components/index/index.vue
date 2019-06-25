<template>
    <div class="index">
      这是主页面
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
.index{width: 100%;height: 200px;background: #0d8ddb;}
</style>
