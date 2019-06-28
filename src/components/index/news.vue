<template>
    <div class="news">
      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
        <!--<el-radio-button :label="false">展开</el-radio-button>-->
        <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
      <!--<h2>{{msg}}</h2>-->
      <!-- -------------------------------- vuex --------------------------------------------->
      <!--<h2>{{this.$store.state[1].id}}</h2>-->
      <!-- --------------------------------- slides ------------------------------------------>
      <!--<swiper class="swiper">-->
        <!--<swiper-slide><img src="../../assets/img/6.jpg" alt=""></swiper-slide>-->
        <!--<swiper-slide><img src="../../assets/img/1.png" alt=""></swiper-slide>-->
        <!--<swiper-slide><img src="../../assets/img/124.jpg" alt=""></swiper-slide>-->
      <!--</swiper>-->
      <!--------------------------------------------------------------------------------------->
      <form action="" class="search">
        <el-input placeholder="请输入内容" v-model="input" clearable style="width: 200px;"></el-input>
        <el-input placeholder="请输入内容" v-model="input" clearable style="width: 200px;"></el-input>
        <el-input placeholder="请输入内容" v-model="input" clearable style="width: 200px;"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-message-solid">查询</el-button>
        <!--<el-button type="primary" :loading="true">加载中</el-button>-->
      </form>
      <template>
        <el-table :data="tableData" style="width: 100%;margin-top:20px;"  tooltip-effect="dark" ref="multipleTable"  >
          <el-table-column type="selection" width="55" :show-overflow-tooltip="tooltip"></el-table-column>
          <el-table-column label="日期" width="180" fixed="fixed" align="center">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名" width="180" align="center">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column width="180" label="马甲包" align="center"></el-table-column>
          <el-table-column width="180" label="logo" prop="phoneNum" align="center"></el-table-column>
          <el-table-column width="180" label="参数名称" align="center"></el-table-column>
          <el-table-column width="180" label="状态" align="center"></el-table-column>
          <el-table-column label="操作"  width="180" align="center">
            <template slot-scope="scope" align="center">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
export default {
  name: "news",
  data(){
      return{
        msg:'新闻',
        isCollapse: true,
        input:'',
        swiperOption: {
          autoplay:true,
        },
        stripe:true,
        tooltip:false,
        tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          phoneNum:'18888888888',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
      confirm('are you sure')
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
  h2{text-align: center}
.swiper{width: 800px;height: 200px;background: #666;margin: 0 auto;}
.swiper img{width: 100%;height: 100%;}
</style>
