import { INCREMENT } from './mutations-types'
import { DECREMENT } from './mutations-types'
import { INCREMENTCOUNT } from './mutations-types'
import { ADDSTUDENT } from './mutations-types'
import { UPDATEINFO } from './mutations-types'

export default {
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
}