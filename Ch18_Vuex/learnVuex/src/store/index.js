import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters';
import moduleA from './modules/moduleA'
// 1.安装插件
Vue.use(Vuex)

const state = {
    // 状态 就是数据
    counter: 1000,
    students: [
        { id: 110, name: '张三', age: 18 },
        { id: 111, name: '李四', age: 24 },
        { id: 112, name: '王五', age: 30 },
        { id: 113, name: '老六', age: 15 }
    ],
    info: {
        name: 'kobe',
        age: 40,
        height: 1.98
    }
}

// 2.创建对象
const store = new Vuex.Store({
    state: state,//数据
    mutations: mutations,//方法
    actions: actions,//异步操作
    getters: getters,//类似计算属性
    modules: {//子模板
        a: moduleA
    }
})

// 3.导出store独享
export default store