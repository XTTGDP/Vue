export default {
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
}