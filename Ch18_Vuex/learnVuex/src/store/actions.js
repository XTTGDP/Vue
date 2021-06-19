import { UPDATEINFO } from './mutations-types'

export default {
    // 处理异步操作
    // context:上下文 此时相当于store
    // aUpdateInfo(context, payload) {
    //     setTimeout(() => {
    //         context.commit(UPDATEINFO)//去调用同步操作
    //         console.log(payload);
    //         payload()
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
}