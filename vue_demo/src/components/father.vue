<!--
 * @Author: boxZhang
 * @Date: 2022-08-09 16:41:22
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-10 16:08:45
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\father.vue
-->
<template>
  <div>
    <h3>我是fater.vue start</h3>
    <p>在父组件中使用子组建的数据：{{ title1 }}</p>
    <sonVue :titleMsg="title1" @send1="resive"></sonVue>
    <p>接收兄弟组件login.vue传来的值：{{ getMsg }}</p>
    <h3>我是fater.vue end</h3>
    <hr />
  </div>
</template>

<script>
import sonVue from "./son.vue";
export default {
  name: "FatherDemo",
  data() {
    return {
      title1: "我是father组件的title",
      movie2: "father的电影",
      getMsg: ""
    };
  },
  components: {
    sonVue
  },
  methods: {
    resive(params) {
      console.log(params);
      this.title1 = params;
    }
  },
  mounted() {
    console.log(this.$bus);
    // var _this = this;
    // this.$bus.$on("sendGift", function(msg) {
    //   console.log(msg);
    //   _this.getMsg = msg;
    // });

    this.$bus.$on("sendGift", msg => {
      console.log(msg);
      this.getMsg = msg;
    });
  }

  // props: [sonTxt]
};
</script>

<style></style>
