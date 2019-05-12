import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)

//导入router.js
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//引入axios
import Api from './api/index.js';
Vue.prototype.$api = Api;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
