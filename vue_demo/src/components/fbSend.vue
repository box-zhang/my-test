<template>
  <div>
    <!-- 发表评论组件 -->
    <p>
      <span class="st-icon-pandora">作者：</span>
      <input type="text" v-model="author">
    </p>
    <p>
      <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea>
    </p>
    <p>
      <button @click="sendMsg">发表评论</button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '',
      content: ''
    }
  },
  methods: {
    sendMsg () {
      this.$emit('sendAddMsg', this.author, this.content)
      this.author = this.content = ''
    }
  }

}
</script>

<style>

</style>
