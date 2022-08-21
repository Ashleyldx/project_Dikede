<template>
  <div class="tablenav-container">
    <!-- 表头搜索 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="工单编号">
    <el-input v-model="formInline.user" placeholder="请输入"></el-input>
  </el-form-item>
  <el-form-item label="工单状态">
    <el-select v-model="formInline.region" placeholder="请选择">
      <el-option label="待办" ></el-option>
      <el-option label="进行" ></el-option>
      <el-option label="取消" ></el-option>
      <el-option label="完成" ></el-option>
    </el-select>
  </el-form-item>
  <!-- 搜索按钮 -->
  <el-form-item>
   <el-button class="btn-search" icon="el-icon-search">查询</el-button>
  </el-form-item>
  </el-form>

  </div>
</template>

<script>

export default {
  name: 'GogDanmanage',
  
 data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
  },
    
}
</script>

<style scoped>
.tablenav-container{
  background-color: #fff;
  height: 80px;
}
.btn-search{
  background-color: #7d9bff;
  color:#fff; 
}

</style>