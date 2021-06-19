// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    return createElement(App)
  }

})
  // 解析流程 runtime-compiler(v1)
  // template -> ast -> render -> vDOM(虚拟DOM) - 页面UI(真实DOM)

  // 解析流程 runtime-only(v2) 性能更块，代码更少
  // render -> vdom -UI 