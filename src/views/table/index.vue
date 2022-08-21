<template>
  <div class="table-container">
    <!-- 挂载顶部表单输入 -->
     <TableNav></TableNav>
<div class="main-container">
    <!-- 按钮区 -->
     <el-row class="btn-group">
      <el-button class="btn-one" icon="el-icon-circle-plus-outline">新建</el-button>
      <el-button class="btn-two">工单配置</el-button>
    </el-row> 

     <!-- 表格主体 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="order"
        label="序号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="工单编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="设备编号">
      </el-table-column>
      <el-table-column
        prop="address"
        label="工单类型">
      </el-table-column>
      <el-table-column
        prop="address"
        label="工单方式">
      </el-table-column>
      <el-table-column
        prop="address"
        label="工单状态">
      </el-table-column>
      <el-table-column
        prop="address"
        label="运营人员">
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建日期">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column> 
    </el-table>
    <Pagination></Pagination>
   
</div>
 
  </div>
</template>

<script>
import TableNav from '@/components/TableNav.vue'
import Pagination from '@/components/Pagination'
export default {
components:{TableNav,Pagination},
 data() {
        return {
          tableData: [{
            order: '2016-05-02',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市'
          }]
        }
      }
}
</script>

<style scoped>
.table-container {
  background-color: #f8fafd;
}
.main-container{
  background-color: #fff;
}
.btn-one{
  background-color: #ff6826;
  border: none;
  color:#fff;
}
.btn-two{
  background-color: #fbf4f0;
  border: none;
  color:#333;
}

</style>