<!--
 * @Author: boxZhang
 * @Date: 2022-08-09 16:41:30
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-10 14:49:22
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\son.vue
-->
<template>
  <div>
    <h3>我是son.vue start</h3>
    <slot name="title"></slot>
    <slot></slot>
    <slot name="price"></slot>
    <!-- <fatherDemo></fatherDemo> -->
    <!-- 插槽 -->
    <slot name="students" :student="studentMsg">

    </slot>
    <slot name="store" ></slot>
    <!-- 插槽 end -->

    <!-- <p>{{ titleMsg }}</p>

    <p><button @click="showInfo">子->父传递数据</button></p>
    <h3>我是son.vue end</h3> -->
  </div>
</template>

<script>
// import fatherDemo from "./father.vue";
export default {
  name: 'sonDemo',
  data () {
    return {
      title1: '我是son组件的title',
      movie1: '蝙蝠侠son',
      tt: '儿子值',
      studentMsg: {
        'a': '我是子组件里面的studentMessage',
        'b': '我是子组件的b'
      }
    }
  },
  components: {
    // fatherDemo
  },
  props: ['titleMsg'],
  methods: {
    showInfo () {
      this.$emit('send1', this.title1)
      console.log('我是子组件内容')
    }
  }
}
</script>

<style></style>
