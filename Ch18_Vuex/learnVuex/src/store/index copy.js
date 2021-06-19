import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'
import { DECREMENT } from './mutations-types'
import { INCREMENTCOUNT } from './mutations-types'
import { ADDSTUDENT } from './mutations-types'
import { UPDATEINFO } from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 3.创建子的一个分离模块
const moduleA = {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        // 模块的名字最好不要跟store对象的一样，因为会先查找store，没有才来子模块找
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            // 此时的context不是指向store，而是指向自己现在的moduleA
            // 就是为了自己调用自己的mutations里面的方法
            setTimeout(() => {
                context.commit('updateName', 'wangwu')
            }, 1000)
        }
    },
    getters: {
        fullname1(state) {
            return state.name + '11111'
        },
        fullname2(state, getters) {
            return getters.fullname1 + '22222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}
// 2.创建对象
const store = new Vuex.Store({
    state: {
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
    },
    mutations: {
        // 方法 默认是带着state的
        [INCREMENT](state) {
            state.counter++
        },
        [DECREMENT](state) {
            state.counter--
        },
        //如果是传递对象，最好把count改为payload
        [INCREMENTCOUNT](state, count) {
            console.log(count);
            // state.counter += count
            state.counter += count.count
        },
        [ADDSTUDENT](state, stu) {
            state.students.push(stu)
        },
        [UPDATEINFO](state) {
            // 异步操作，虽然页面会发生变化，但插件devtools监测不到
            // setTimeout(()=>{
            //     state.info.name = 'codywhy'
            // },1000)

            // 初始化的数据可以有响应式
            state.info.name = 'codywhy'
            // 未初始化的数据后来添加不具备响应式
            // state.info['address'] = '洛杉矶'

            // Vue.set(更改的数据，数据名，值)
            // 让添加的数据具备响应式
            // Vue.set(state.info, 'address', '洛杉矶')

            // 该方式做不到响应式
            // delete state.info.age
            // Vue.delete(更改的数据，数据名)
            // 让删除的操作具备响应式
            // Vue.delete(state.info, 'age')
        }
    },
    actions: {
        // 处理异步操作
        // context:上下文 此时相当于store
        // aUpdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit(UPDATEINFO)//去调用同步操作
        //         // console.log(payload);
        //         // payload()
        //         console.log(payload.message);//告诉用户已经调用完了
        //         payload.success()
        //     }, 1000)
        // }
        aUpdateInfo(context, payload) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit(UPDATEINFO)
                    console.log(payload);
                    resolve('1111')
                }, 1000)
            })
        }
    },
    getters: {
        // 类似计算属性 computed
        // 计算counter的2倍数
        powerCounter(state) {
            return state.counter * state.counter
        },
        // 筛选年龄大于20的人
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            // 没有准确的值，使用函数来
            // return function(age){
            //     return state.students.filter(s => s.age >age)
            // }
            return age => { return state.students.filter(s => s.age > age) }
        }
    },
    modules: {
        a: moduleA
    }
})

// 3.导出store独享
export default store