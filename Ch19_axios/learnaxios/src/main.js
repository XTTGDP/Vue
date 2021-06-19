import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本发送操作
// 默认是GET请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method:'post' 服务器暂时不支持
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   网站后面带的参数 专门针对GET请求的参数拼接，框架会自动拼接到链接上
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })


// 2.axios的并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   axios.spread可以分解返回的数组
//   console.log(res1);
//   console.log(res2);
// }))
// then(results => {
//   可以获取每个返回的数据
//   console.log(results);
// })

// 3.全局配置 使用全局的axios和对应配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   axios.spread可以分解返回的数组
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// // 然后根据实例名 发送请求，就可以使用实例里的url的地址
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// // 可以创建多个实例，链接不同地址，分摊服务器压力
// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 10000,
//   // headers:{}
// })

// instance2({
//   url: '/hhhh'
// })

// 5.封装request模块
import { request } from './network/request'

// 方法3
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

// 方法2
// request({
//   bascConfig:{

//   },
//   success:function(res){

//   },
//   failure:function(err){

//   }
// })

// 方法1
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })
