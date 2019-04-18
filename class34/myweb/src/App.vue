<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <button class="btn btn-primary">确定</button>
    <button class="btn btn-success">使用</button>
    <button class="btn btn-danger">注意</button>
    <hr>
    <p>
      <!--router-link 来进行导航-->
      <!--传入to来指定链接-->
      <!--router-link 会渲染成一个《a》的标签-->
      <router-link to="/hello">Home</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/card">卡</router-link>
    </p>
    <hr>
    <div class="myclass1">你好!</div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
