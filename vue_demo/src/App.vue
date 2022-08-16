<!--
 * @Author: boxZhang
 * @Date: 2022-08-08 10:15:42
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-15 17:03:38
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\App.vue
-->
<template>
  <div id="app">
    <!-- <Home></Home> -->
    <!-- <mockRandom></mockRandom> -->
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <router-view /> -->
    <!-- <login></login>
    <hello-come></hello-come> -->
    <!-- <father></father> -->
    <!-- 挂载动态组件 -->
    <!-- <p>
      <button @click="current='Father'" :class="current =='Father'?'active':''">father</button> |
      <button @click="current='helloCome'" :class="current =='helloCome'?'active':''">hello</button> |
      <button @click="current='login'" :class="current =='login'?'active':''">login</button> |
      <button @click="current='Home'" :class="current =='Home'?'active':''">home</button> |
      <button @click="current='mockRandom'" :class="current =='mockRandom'?'active':''">mockRandom</button>
      <button @click="current='router'" :class="current =='router'?'active':''">router</button>
      <button @click="current='about'" :class="current =='about'?'active':''">about</button>
    </p>
    <keep-alive>
      <component :is="current"></component>
    </keep-alive> -->

    <!-- 将来组件显示的地方，router-view -->
    <router-link to="/">helloWorld</router-link> |
    <router-link to="/routerFile">router file</router-link> |
    <router-link to="/about">about页</router-link>
    <hr />
    <router-link to="/aboutView">aboutView</router-link> |
    <router-link to="/homeView">homeView</router-link> |
    <router-link to="/query">query</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Father from './components/father'
// import Hello from './components/Hello.vue'
// import Login from './components/Login'
// import Home from './components/home'
// import MockRandom from './components/mockRandom.vue'
// import Router from './components/router.vue'
// import About from './components/about.vue'

export default {
  name: "App",
  // components: {
  //   Home,
  //   MockRandom,
  //   login: Login,
  //   helloCome: Hello,
  //   Father,
  //   Router,
  //   About
  // },
  data() {
    return {
      current: "router"
    };
  }
};
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
.active,
.router-link-exact-active {
  color: red;
}
</style>
