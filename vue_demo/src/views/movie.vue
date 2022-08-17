<!--
 * @Author: boxZhang
 * @Date: 2022-08-16 10:33:32
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 11:03:08
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\views\movie.vue
-->
<template>
  <div>
    <h3>movie list</h3>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>name</th>
        <th>longtime</th>
        <th>language</th>
        <th>countries</th>
      </tr>
      <tr v-for="item in movieList" :key="item.id" @click="toDetail(item)">
        <td>
          {{ item.title }}
        </td>
        <td>{{ item.longtime }}</td>
        <td>{{ item.language }}</td>
        <td>{{ item.countries }}</td>
        <td>
          <!-- 点击跳转 通过query或者params传参数值 -->
          <!-- <router-link to="/detail">
            <img :src="item.small" alt="" width="100" height="60" />
          </router-link> -->
          <!-- <router-link :to="{path:'/detail'}">
            <img :src="item.small" alt="" width="100" height="60" />
          </router-link> -->
          <!-- <router-link :to="{ name: 'detail', query: { id: item.mId } }">
            <img :src="item.small" alt="" width="100" height="60path" />
          </router-link> -->
          <!-- path不能和params一起使用 -->
          <router-link :to="{ path: '/detail', query: { id: item.mId } }">
            aaa
            <!-- <img :src="item.small" alt="" width="100" height="60" /> -->
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      movieList: []
    }
  },
  methods: {
    getMovieList () {
      axios.get('douban/movie/top250').then(res => {
        // console.log(res.data);
        const { data: message } = res.data
        // console.log(message.list);
        this.movieList = message.list
      })
    },
    // toDetail()点击每一行，跳转到详情页
    toDetail (item) {
      console.log(item)
      console.log(this.$router)
      // this.$router.push("/detail");
      this.$router.push({ path: '/detail', query: { id: item.mId } })
      // path 和params不能一起使用
      // this.$router.push({ path: "/detail", params: { id: item.mId } });
      // this.$router.push({ name: "detail", query: { id: item.mId } });
      // this.$router.push({ name: "detail", params: { id: item.mId } });
    }
  },
  mounted () {
    this.getMovieList()
  }
}
</script>

<style></style>
