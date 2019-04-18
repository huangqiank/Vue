<template>
  <div class="login">
    <form name='form' action="">
      <input id="username" type="text" placeholder="请输入手机号码或用户名"/>
      <input id='pwd' type="password" placeholder="请输入密码"/>
      <button onclick="login()">登录</button>
    </form>
    <div class="account">
      <p class="forget" style="float:right">忘记密码?</p>
      <div class="register">
        <span>还没有账号?</span>
        <a href="#">手机注册</a>
      </div>
    </div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>
