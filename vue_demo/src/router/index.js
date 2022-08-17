/*
 * @Author: boxZhang
 * @Date: 2022-08-15 10:09:20
 * @LastEditors: boxZhang
 * @LastEditTime: 2022-08-17 10:16:43
 * @Description: 好好做人，谨慎敲码
 * @FilePath: \workspace\test-boxZ\my-test\vue_demo\src\router\index.js
 */
// 在index.js中，先下载引入文件
import HelloWorld from '@/components/HelloWorld'
import RouterFile from '@/components/router'
import Vue from 'vue'
import Router from 'vue-router'

// 全局安装router，使用Vue.use(Router)
Vue.use(Router)

const routes = [{
  path: '/',
  // redirect: 路由重定向
  redirect: '/helloWorld'
}, {
  path: '/helloWorld', // params传参  /:参数
  name: 'helloWorld',
  component: HelloWorld
}, {
  path: '/routerFile',
  name: 'routerFile',
  component: RouterFile
}, {
  // path: '/aboutView/:id',
  path: '/aboutView/:id/:name',
  name: 'aboutView',
  component: () => import('@/views/AboutView.vue')
}, {
  path: '/homeView',
  name: 'homeView',
  component: () => import('@/views/HomeView.vue')
}, {
  path: '/query',
  name: 'query',
  component: () => import('@/views/query.vue')
}, {
  path: '/movieList',
  name: 'movieList',
  component: () => import('@/views/movie.vue')
}, {
  path: '/detail',
  name: 'detail',
  component: () => import('@/views/movieDetail.vue')
}, {
  path: '/get',
  name: 'get',
  component: () => import('@/components/get.vue')
}, {
  path: '/post',
  name: 'post',
  component: () => import('@/components/post.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import('@/components/login.vue')
}]
export default new Router({
  routes: routes
})
