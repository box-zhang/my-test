/*
 * @Author: boxZhang
 * @Date: 2022-08-08 10:15:42
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 11:11:28
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\main.js
 */
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 1.挂载全局axios和qs
Vue.prototype.$axios = axios
// 2.axios配置基础地址
axios.defaults.baseURL = 'http://bufantec.com/api/'

// 3.axios配置超时时间
axios.defaults.timeout = 2000

// 4.axios的请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理,config是所有的请求数据
  console.log('请求拦截器被触发了')
  // 1.请求后台数据的时候post请求自动使用qs处理参数
  console.log(config)
  if (config.method.toLocaleLowerCase() == 'post') {
    config.data = qs.stringify(config.data)
  }
  console.log(config)
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

// 5.axios的响应拦截器
axios.interceptors.response.use((response) => {
  // 触发的时机：只要后台返回数据就会被触发，response是后台相应的所有数据
  console.log('触发了响应拦截器')
  console.log(response)
  // 过滤响应的数据response

  return response.data
}, error => {
  return Promise.reject(error)
})

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// Vue.prototype.$bus = 'hello world'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
