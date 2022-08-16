<!--
 * @Author: boxZhang
 * @Date: 2022-08-16 16:47:17
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-16 17:17:04
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\post.vue
-->
<template>
  <div>
    <h3>get.vue</h3>
    <p>
      <button @click="post01">1. get不带参数</button> |
      <button @click="post02">2. get带参数</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      host: "bufantec.com",
      pageInfo: {
        limit: 5,
        start: 2
      }
    };
  },
  methods: {
    get01() {
      axios.post("http://bufantec.com/api/douban/movie/top250").then(res => {
        console.log(res);
      });
    },
    get02() {
      axios
        .post("http://bufantec.com/api/douban/movie/top250", {
          params: this.pageInfo
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style></style>
