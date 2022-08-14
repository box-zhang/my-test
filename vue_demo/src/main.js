/*
 * @Author: boxZhang
 * @Date: 2022-08-08 10:15:42
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-10 15:53:56
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
    // Vue.prototype.$bus = 'hello world'
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})