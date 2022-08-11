<!--
 * @Author: boxZhang
 * @Date: 2022-08-11 15:41:06
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-11 17:14:06
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\mockRandom.vue
-->
<template>
  <div>
    <h3>mock数据</h3>
  </div>
</template>

<script>
import Mock from "mockjs";
export default {
  data() {
    return {};
  },
  mounted() {
    var Random = Mock.Random;
    // 模拟时间
    console.log(Random.datetime("yyy-MM-dd A HH:mm:ss"));
    // 模拟一个图片
    console.log(Random.dataImage("200x100", "随即图片"));
  }
};
</script>

<style></style>
