// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入bootstrap 的框架，引入axios获取数据等.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
/* 入口组件注册router */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
