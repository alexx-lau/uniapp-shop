import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

// 引入仓库
import store from './store/index'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  
  // 集成仓库到实例
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif