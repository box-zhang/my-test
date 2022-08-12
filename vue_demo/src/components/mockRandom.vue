<!--
 * @Author: boxZhang
 * @Date: 2022-08-11 15:41:06
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-12 16:17:30
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\components\mockRandom.vue
-->
<template>
  <div>
    <h3>mock数据</h3>
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import Mock from "mockjs";
export default {
  data() {
    return {
      list: [],
      $
    };
  },
  methods: {
    init() {
      const { movieList } = Mock.mock({
        "movieList|1-6": [
          {
            // id: '@id()',
            id: "@increment",
            title: "@ctitle()",
            longTime: "@natural(60,180)",
            price: "@flot(15,200,0,2)",
            update: "@date('yyy-mm-dd')",
            small: "@dataImage(300*150,电影图片)",
            info: "@cparagraph()"
          }
        ]
      });
      this.list = movieList;
      console.log(movieList);
      // console.log(list);
      // Mock.mock("url","get",function(){return "被拦截了"});

      // mock 的get拦截
      Mock.mock(/http:\/\/jdtec\.com/, "get", function(params) {
        // console.log(params);
        // 获取用户输入的参数的值
        var start = getParams(params, "start");
        var limit = getParams(params, "limit");

        console.log(start, limit);
        // getParams(params);
        // return {
        //   status: 200,
        //   list: movieList,
        //   total: movieList.length
        // };
      });

      // 解析用户传递参数的函数
      function getParams(params, attr) {
        var index = params.url.indexOf("?");
        var str = params.url.slice(index + 1);
        var paramsArr = str.split("&");
        for (var i = 0; i < paramsArr.length; i++) {
          var newArr = paramsArr[i].split("=");
          console.log(newArr);
          if (newArr[0] == attr) {
            return newArr[1];
          }
        }

        // console.log(params);
        // console.log(index);
        // console.log(str);
        // console.log(paramsArr);
      }

      // ttp.jdtec.com 是模拟的接口
      $.ajax({
        url: "http://jdtec.com",
        method: "get",
        // 如果需要传递参数，用data{}，例如传递limit start等
        data: {
          limit: 5, // limit代表，每页的数据条数
          start: 2 // start代表，从第二页开始
        },
        success: res => {
          // console.log("res:" + res);
        }
      });
    }
  },
  mounted() {
    var Random = Mock.Random;
    // 模拟时间
    // co nsole.log(Random.datetime("yyyy-MM-dd A HH:mm:ss"));
    // 模拟一个图片
    // console.log(Random.dataImage("200x100", "随即图片"));

    this.init();
  }
};
</script>

<tyle></tyle>
