export default {
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