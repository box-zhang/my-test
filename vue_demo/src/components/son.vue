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

    <!-- <fatherDemo></fatherDemo> -->
    <p> {{ titleMsg }}</p>
   
    <p><button @click="showInfo">子-->父传递数据</button></p>
   
  </div>
</template>

<script>
// import fatherDemo from "./father.vue";
export default {
  name: "sonDemo",
  data() {
    return {
      title1: "我是son组件的title",
      movie1: "蝙蝠侠son",
      tt:"儿子值"
    };
  },
  components: {
    // fatherDemo
  },
  props: [
    "titleMsg"
  ],
  methods: {
    showInfo(){
      this.$emit("send1",this.title1)
      console.log("我是子组件内容");
    }
  },
};
</script>

<style></style>
