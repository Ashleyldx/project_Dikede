<template>
  <div class="login-container"> 
    <!-- 登录整体内容 -->
    <div class="login-container-box">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <div class="title-image"><img src="../.././assets/images/logo.login.png" alt=""></div>
      </div>
    <!-- 表单部分 -->

    <!-- 手机号 -->
      <el-form-item class="mobile-admin" prop="mobile">
         <span class="svg-container el-icon-mobile"></span>
         <!-- input里面渲染数据 -->
        <el-input v-model="loginForm.mobile" placeholder="请输入登录名称"/>
      </el-form-item>

      <!-- 密码 -->
      <el-form-item class="password-admin" prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
      <el-input ref="pwdInput" v-model="loginForm.password" :type="passwordType" @click="loginForm" placeholder="请输入密码"/>
      <span class="svg-container"><svg-icon :icon-class="`${passwordType==='password'?'eye':'eye-open'}`" @click="changePwd"/></span>
      </el-form-item>

      <!-- 验证码 -->
       <el-form-item class="code-admin" prop="code">
        <span class="svg-container el-icon-document-checked"></span>
      <el-input placeholder="请输入验证码"/>
      <span class="code-image"><img src="" alt=""></span>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-button type="primary" style="width:100%; margin-bottom:30px;" @click="login" :loading="loading">登录</el-button>
      </el-form>
    </div>
   
  </div>
</template>

<script>
import { validMobile } from '@/utils/validate'
export default {
  name: 'LoginIndex',
  data() { 
    const validatorMobile = (rule, value, callback) => {
      if (validMobile(value)) {
        return callback()
      }
      return callback(new Error('手机号格式不正确'))
    }
    return {
      passwordType: 'password',
      loginForm: {
        mobile: '13103962531',
        password:"12345",
      },
      loading: false,
      loginRules: {
        mobile: [
        { required: true, message: '请填写手机号', trigger: 'blur' },
        { validator: validatorMobile, trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码错误', trigger:'blur' }]
      }
    }
  },
  methods: {
    changePwd() {
      this.passwordType === 'password' ? this.passwordType = '' : this.passwordType = 'password'
      this.$nextTick(() => {
        this.$refs.pwdInput.focus()
      })
    },
    async login() {
      try {
        const res = await this.$refs.loginForm.validate(res) // 通过登录接口把数据提供给后端
        console.log(res);
        this.loading = true
        await this.$store.dispatch('user/login', this.loginForm)
        // 实现页面跳转
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        this.loading=false
      }
    },
    async getCode() {
      const res = await code()
      console.log(res)
    }
    
  }

}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background-image: url('~@/assets/images/background.login.png');

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    // padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
 
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .el-form-item__content{
    background-color: #fff;
  }
}

.login-container-box{
  position: relative;
  display: flex;
  transform: translate(50%,15%);
  width: 600px;
  height: 600px;
  border-radius: 10px;
  background-color: #fff;
 
  .login-btn{
    background-color: #6679ed;
  }
  
  // .mobile-admin,
  // .password-admin{
  //   background-color: #fff;
  //   border: 1px solid #e2e2e2;
  //   font-size: 18px;
  //   color:#999;
  // }
  // .code-admin{
  //   // display: flex;
  //   // height: 46px;
  //   background-color: #fff;
  //   border: 1px solid #e2e2e2;
  //   .code-image{
  //     // display: flex;
  //     // box-sizing: border-box;
  //     // display: block;
  //     margin: 0 0 0 400px;
  //     height: 46px;
  //     width: 100px;
  //     background-color: pink;
  // }
  // }
 
}
</style>
