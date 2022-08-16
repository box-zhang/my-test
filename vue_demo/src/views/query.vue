<!--
 * @Author: boxZhang
 * @Date: 2022-08-15 16:59:30
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-15 17:06:43
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\views\query.vue
-->
<template>
  <div>
    <h3>query.vue 组件</h3>
    <div>
      获取query传递过来的参数：
      <p>name：{{ $route.query.userName }}</p>
      <p>age：{{ $route.query.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.query);
  }
};
</script>

<style></style>
