<!--
 * @Author: boxZhang
 * @Date: 2022-08-08 10:25:15
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 11:20:18
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\Login.vue
-->
<template>
  <div>
    <h3>{{ title }}</h3>
    <p>用户名<input type="text" v-model="pageInfo.username" /></p>
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
        username: "admin",
        password: "123"
      },
      gift: "我给你100块钱"
    };
  },
  methods: {
    doLogin() {
      // Login.vue;
      this.$axios.post("test/user/doLogin", this.pageInfo).then(res => {
        // console.log(res);
      });
    },
    sendMsg() {
      this.$bus.$emit("sendGift", this.gift);
      // console.log(this.$bus.$emit("sendGift", this.gift));
    }
  },
  created() {
    // 获取vue原型上挂载的属性
    console.log(this.$axios);
  }
};
</script>

<style scoped>
h3 {
  color: red;
}
</style>
