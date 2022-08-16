<!--
 * @Author: boxZhang
 * @Date: 2022-08-16 10:58:47
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-16 15:44:44
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\views\movieDetail.vue
-->
<template>
  <div>
    <h3>{{ detailObj.title }}</h3>
    <div>
      <img :src="detailObj.small" alt="" />
    </div>
    <p>time：{{ detailObj.longtime }}</p>
    <p>content：{{ detailObj.summary }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      detailObj: {}
    };
  },
  methods: {
    // 初始化数据
    initDetail() {
      const id = this.$route.query.id;
      // const id = this.$route.params.id;
      // 用params或者query来获取路由传过来的值
      axios
        .get("http://bufantec.com/api/douban/movie/subject", {
          params: {
            mId: id
          }
        })
        .then(res => {
          console.log(res);
          const { data: msg } = res.data; // 解构赋值
          this.detailObj = msg;
        });
    }
  },
  created() {
    this.initDetail();
    // 获取movie页面传递过来的参数
  }
};
</script>

<style></style>
