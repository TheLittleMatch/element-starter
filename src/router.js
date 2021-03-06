import VueRouter from 'vue-router'

import login from './components/loginContainer.vue'
import register from './components/registerContainer.vue'
import forgot from './components/forgotContainer.vue'
import mainpage from './components/mainpageContainer.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/home', component: mainpage },
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/forgot', component: forgot }
    ]
})
// linkActiveClass: 'mui-active'
// 把路由对象暴露出去
export default router