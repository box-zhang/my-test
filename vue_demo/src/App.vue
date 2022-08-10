<!--
 * @Author: boxZhang
 * @Date: 2022-08-08 10:15:42
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-10 15:25:34
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\App.vue
-->
<template>
  <div id="app">
    <Home></Home>
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <router-view /> -->
    <!-- <login></login>
    <hello-come></hello-come>
    <father></father> -->
  </div>
</template>

<script>
// import father from "./components/father";
// import Hello from "./components/Hello.vue";
// import Login from "./components/Login";
import Home from './components/home'

export default {
  name: 'App',
  components: {
    Home
    // login: Login,
    // helloCome: Hello,
    // father
  }
}
// 组件的创建
// 1. 创建一个.vue后缀的一个文件
// 2.导入组件：import自定义组建的名字 from ‘组建的路径’
// 3. 挂载组件， components
// 4.使用组件，像使用普通html标签一样
// 注意： 不能使用html已经占用的标签
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
