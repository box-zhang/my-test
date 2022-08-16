<!--
 * @Author: boxZhang
 * @Date: 2022-08-15 16:31:24
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-15 16:45:15
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\views\AboutView.vue
-->
<template>
  <div>
    <p>aboutView</p>
    <p>获取parames传递的参数：{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // console.log(this.$router);
    // 1.获取params获取的参数
    console.log(this.$route.params.id);
  }
};
</script>

<style></style>
