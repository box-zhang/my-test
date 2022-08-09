<!--
 * @Author: boxZhang
 * @Date: 2022-08-09 16:41:30
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-09 17:12:35
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\son.vue
-->
<template>
  <div>
    <h3>son.vue</h3>

    <fatherDemo></fatherDemo>
    {{ title1 }}
    <hr />
    {{ movie1 }}
  </div>
</template>

<script>
import fatherDemo from "./father.vue";
export default {
  name: "sonDemo",
  data() {
    return {
      title1: "我是son组件的title",
      movie1: "蝙蝠侠son"
    };
  },
  components: {
    fatherDemo
  }
};
</script>

<style></style>
