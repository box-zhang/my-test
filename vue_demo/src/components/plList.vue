<template>
  <div>
    <!-- 评论组件 -->
    <!-- <ul>
      <li v-for="item in listData" :key="item.id">
        {{item.id}}
        <img :src="item.url" alt="">
        <p>{{item.info}}</p>
      </li>
    </ul> -->
    <ul>
      <pl-item v-for="item in listData" :key="item.id" :itemData="item"></pl-item>
    </ul>
  </div>
</template>

<script>
import plItem from './plItem.vue'
export default {
  props: ['listData'],
  data () {
    return {

    }
  },
  components: {
    plItem
  }
}
</script>

<style>
ul li {
  border-bottom: 1px solid #999;
}
</style>
