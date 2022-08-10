<template>
  <div>
    <!-- 评论列表小组件 -->
    <li>
      {{itemData.id}}
        <img :src="itemData.url" alt="">
        <p>{{itemData.info}}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: ['itemData'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
