<template>
    <div class="login">
      <form action="">
        账号:<input type="text">
        密码:<input type="text">
        <router-link to="/index">登录:<input type="button" value=""></router-link>
      </form>
    </div>
</template>

<script>
export default {
    name: "login",
    components:{}
}
</script>

<style scoped>
.login{width: 100%;height: 100%;overflow: hidden;}
</style>
