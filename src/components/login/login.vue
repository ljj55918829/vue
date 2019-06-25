<template>
    <div class="login">
      <form action="input" method="" class="formbox">
        <h4>米哆哆后台管理</h4>
        <div>
          <span></span>
          <input type="text" placeholder="User ID" name="userId">
        </div>
        <div>
          <span></span>
          <input type="password" placeholder="PassWord" name="userPass">
        </div>
        <div>
          <router-link to="/index"><input type="submit" value="Get Started" id="btn"/></router-link>
        </div>
        <div>
          <a href="#">Create Account</a>
          <a href="">Need Help?</a>
        </div>
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
.login{width: 100%;height: 100%;background: url(../../assets/img/1.png) center no-repeat;background-position: 0px 0px;position: fixed;
  background-size: 100% 100%;}
.formbox{position:fixed;right: 200px;top:160px;background: white;width: 340px;height: 500px;opacity: .6;padding:0 10px;box-sizing: border-box;
  box-shadow: #FFFFFF;}
form div{width: 320px;height: 46px;margin-bottom: 20px;border-radius: 20px;}
form div span{width: 36px;float:left;height:46px;background: green;border-radius: 20px 0 0 20px;}
h4{height: 100px;line-height: 100px;text-align: center;color: darkblue;font-size: 24px;}
input{width:284px;height: 46px;box-sizing: border-box;float: left;text-indent: 16px;background: (255, 255, 255, 0.1);border-radius: 0 20px 20px 0;
  outline:none;border: none;border:1px solid blue;color: blue;}
form div:nth-child(4) input{width: 100%;height: 46px;border-radius: 20px;background: #f96332;font-size: 24px;}
div a:nth-child(2){float: right;}
</style>
