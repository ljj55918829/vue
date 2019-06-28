<template>
  <div class="aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;position: fixed;left: 260px;">
      <el-radio-button :label="false" >展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
      <!--<button @click="islabel">收起</button>-->
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"  :collapse="isCollapse"
             :text-color="menuColor" :background-color="bgColor" style="padding: 0 0 50px 20px;">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">产品创建</el-menu-item>
          <el-menu-item index="1-2">产品排序</el-menu-item>
          <el-menu-item index="1-3">产品创建</el-menu-item>
          <el-menu-item index="1-4">产品排序</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-grid"></i>
          <span slot="title">广告位管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">产品创建</el-menu-item>
          <el-menu-item index="1-2">产品排序</el-menu-item>
          <el-menu-item index="1-3">产品创建</el-menu-item>
          <el-menu-item index="1-4">产品排序</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">产品创建</el-menu-item>
          <el-menu-item index="1-2">产品排序</el-menu-item>
          <el-menu-item index="1-3">产品创建</el-menu-item>
          <el-menu-item index="1-4">产品排序</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
    export default {
      name: "asidecom",
      data() {
        return {
          // msgcolor:'#34c59e', //当前激活菜单的文字颜色（仅支持 hex 格式）
          menuColor:'white',
          bgColor:'#2c3f55',
          isCollapse: true,
          collapse:true,
          router:true,
          // mode:vertical,
          // uniqueOpened:true
        };
      },
      methods: {
        islabel(){
          alert('点击了！')

        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 260px;
    min-height: 400px;
    /*background-color:#6e7271;*/
    position: relative;
    box-sizing: border-box;
    background: #2c3f55;
  }
  .el-menu-item-group .el-menu-item{
    padding-left: 60px !important;
  }

</style>
