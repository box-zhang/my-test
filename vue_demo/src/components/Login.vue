<!--
 * @Author: boxZhang
 * @Date: 2022-08-08 10:25:15
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-08 16:53:56
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\login.vue
-->
<template>
  <div>
    <h3>{{ title }}</h3>
    <p>用户名<input type="text" v-model="pageInfo.user" /></p>
    <p>密码<input type="password" v-model="pageInfo.password" /></p>
    <p><button @click="doLogin()">登录</button></p>
  </div>
</template>

<script>
export default {
  // 表示同意被其他页引用
  data() {
    return {
      title: "登录组件",
      pageInfo: {
        user: "admin",
        password: 123
      }
    };
  },
  method: {
    doLogin() {
      Login.vue;
      alert(0);
    }
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
