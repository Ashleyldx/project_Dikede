<template>
  <div class="table-container">
     <TableNav></TableNav>

 <!-- 按钮区 --> 
    <div class="main-container">
     <el-row class="btn-group">
      <el-button class="btn-one" icon="el-icon-circle-plus-outline">新建</el-button>
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
import TableNav from '@/components/TableNav'
import Pagination from "@/components/Pagination"
export default {
components:{ TableNav, Pagination },
 data() {
        return {
          tableData: [{
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
            address: '上海市普陀区金沙江路 1516 弄'
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


</style>