// 在index.js中，先下载引入文件
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RouterFile from '@/components/router'
import About from '@/components/about'

// 全局安装router，使用Vue.use(Router)
Vue.use(Router)

const routes = [{
    path: '/',
    // redirect: 路由重定向
    redirect: '/helloWorld'
}, {
    path: '/helloWorld',
    name: 'helloWorld',
    component: HelloWorld
}, {
    path: '/routerFile',
    name: 'routerFile',
    component: RouterFile
}, {
    path: '/about',
    name: 'about',
    component: About
}]
export default new Router({
    routes: routes
})