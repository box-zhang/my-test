<!--
 * @Author: boxZhang
 * @Date: 2022-08-09 16:41:22
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-09 17:14:33
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\father.vue
-->
<template>
  <div>
    <h3>fater.vue</h3>
    <sonVue></sonVue>
    {{ title1 }}
    <hr />
    {{ movie2 }}
  </div>
</template>

<script>
import sonVue from "./son.vue";
export default {
  name: "FatherDemo",
  data() {
    return {
      title1: "我是father组件",
      movie2: "father的电影"
    };
  },
  components: {
    sonVue
  }
};
</script>

<style></style>
