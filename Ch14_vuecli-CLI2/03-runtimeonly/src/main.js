import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  // 解析流程 runtime-only(v2) 性能更块，代码更少
  // render -> vdom -UI 
})
