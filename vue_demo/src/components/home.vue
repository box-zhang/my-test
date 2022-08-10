<template>
  <div>
    <pl-list :listData="list"></pl-list>
    <pl-send @sendAddMsg="resiveData"></pl-send>
  </div>
</template>

<script>
import plList from './plList.vue'
import plSend from './fbSend.vue'
// 状态提升，数据放在父组件中
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          url: require('../assets/load.gif'),
          info: '添一些内容大法师'
        }, {
          id: 2,
          url: require('../assets/temp1.png'),
          info: 'neirongyoulaile'
        }, {
          id: 3,
          url: require('../assets/temp2.png'),
          info: '内容又来了'
        }, {
          id: 4,
          url: require('../assets/logo.png'),
          info: '好多好多'
        }],
      nextId: 5
    }
  },
  components: {
    plList,
    plSend
  },
  methods: {
    resiveData (author, contxt) {
      var obj = {
        id: this.nextId,
        author: author,
        url: require('../assets/load.gif'),
        info: contxt
      }
      this.list.unshift(obj)
      this.nextId++
      console.log(this.list)
    }
  }
}
</script>

<style>

</style>
