<!--
 * @Author: boxZhang
 * @Date: 2022-08-16 16:47:17
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 11:03:03
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\get.vue
-->
<template>
  <div>
    <h3>get.vue</h3>
    <p>
      <button @click="get01">1. get不带参数</button> |
      <button @click="get02">2. get带参数</button>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      host: 'bufantec.com',
      pageInfo: {
        limit: 5,
        start: 2
      }
    }
  },
  methods: {
    get01 () {
      axios.get('douban/movie/top250').then(res => {
        console.log(res)
      })
    },
    get02 () {
      axios
        .get('douban/movie/top250', {
          params: this.pageInfo
        })
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style></style>
