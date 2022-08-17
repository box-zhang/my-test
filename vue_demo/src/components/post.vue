<!--
 * @Author: boxZhang
 * @Date: 2022-08-16 16:47:17
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 11:15:00
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\post.vue
-->
<template>
  <div>
    <h3>post.vue</h3>
    <p>
      <button @click="post01">1. post不带参数</button> |
      <button @click="post02">2. post带参数</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pageInfo: {
        username: "admin",
        password: "123"
      }
    };
  },
  methods: {
    post01() {
      axios.post("test/user/list", this.pageInfo).then(res => {
        console.log(res);
      });
    },
    post02() {
      // 注意：post不需要params
      axios.post("test/user/doLogin", this.pageInfo).then(res => {
        console.log(res);
      });
    }
  }
};

// 观察如下显示格式
// var pageInfo = {
//   username: "admin",
//   password: "123"
// };
// console.log(JSON.stringify(pageInfo));
// console.log(qs.stringify(pageInfo));
</script>

<style></style>
