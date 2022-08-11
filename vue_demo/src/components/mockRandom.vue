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
import Mock from 'mockjs'
export default {
  data () {
    return {}
  },
  methods: {
    init () {
      const arr = Mock.mock({
        'movieList|1-5': [
          {
            // id: '@id()',
            id: '@increment',
            title: '@ctitle()',
            longTime: '@natural(60,180)',
            price: '@flot(15,200,0,2)',
            update: "@date('yyy-mm-dd')",
            small: '@dataImage(300*150,电影图片)'

          }
        ]
      })
      console.log(arr)
    }
  },
  mounted () {
    var Random = Mock.Random
    // 模拟时间
    console.log(Random.datetime('yyyy-MM-dd A HH:mm:ss'))
    // 模拟一个图片
    console.log(Random.dataImage('200x100', '随即图片'))

    this.init()
  }
}
</script>

<style></style>
