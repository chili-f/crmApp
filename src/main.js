import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import resource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(resource)

// 判断用户有没有登录
if(token){
  // 登陆成功
  // 设置请求头
  Vue.http.headers.common['Authorization'] = localStorage.token
}else {
  location.href="./login.html"
}

new Vue({
  el: '#app',
  render: h => h(App)
})
