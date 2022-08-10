<!--
 * @Author: boxZhang
 * @Date: 2022-08-08 10:25:15
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-10 16:05:08
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\login.vue
-->
<template>
  <div>
    <h3>{{ title }}</h3>
    <p>用户名<input type="text" v-model="pageInfo.user" /></p>
    <p>密码<input type="password" v-model="pageInfo.password" /></p>
    <p><button @click="doLogin">登录</button></p>
    <p>
      <button @click="sendMsg">我要传值给兄弟组件father.vue</button>
    </p>
    <p>login end</p>
    <hr />
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
      },
      gift: "我给你100块钱"
    };
  },
  methods: {
    doLogin() {
      // Login.vue;
      alert(0);
    },
    sendMsg() {
      this.$bus.$emit("sendGift", this.gift);
      // console.log(this.$bus.$emit("sendGift", this.gift));
    }
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
