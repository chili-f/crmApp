<template>
  <div id="">
    <div style="width:450px;margin:200px auto">
      <el-form ref="form" :model="login" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="login.user"></el-input>
        </el-form-item>
        <el-form-item label="密  码">
          <el-input v-model="login.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { http, login } from './api/api.js'
export default {
  data() {
    return {
      login: {
        user: '',
        pass: ''
      }
    }
  },
  methods: {
    // 登录事件
    onSubmit() {
      if (this.login.user === '') {
        this.$message.error('请输入用户名');
      } else if (this.login.pass === '') {
        this.$message.error('请输入密码');
      } else {
        location.href='index.html';
        this.$http.post(http + login, {
          username: this.login.user,
          password: this.login.pass
        }, { emulateJSON: true }).then((data) => {
          if (data.data.msg == '用户名或密码错误') {
            this.$message.error('用户名或密码错误');
          } else if (data.data.msg == '成功') {
            localStorage.token = data.data.data.token;
            location.href='index.html';
            this.$message.error('登录成功');
          }
        }, (err) => {
          this.$message.error('登录失败');
        })
      }
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>