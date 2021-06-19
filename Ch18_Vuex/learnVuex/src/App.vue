<template>
  <div id="app">
    <h2>---App内容:modules中的内容---</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname1}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>---App内容:info对象的内容是否是响应式---</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-------App内容-------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------App内容:getters相关信息-------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>-------App内容的computed计算-------</h2>
    <h2>{{more20stu}}</h2>
    <h2>-------App内容的getters的计算-------</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>-------App内容的getters的计算(用户自己设定年龄)-------</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>
    <h2>-------Hello Vuex内容-------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex.vue'
import { INCREMENT } from '../src/store/mutations-types.js'
import { DECREMENT } from '../src/store/mutations-types.js'
import { INCREMENTCOUNT } from '../src/store/mutations-types.js'
import { ADDSTUDENT } from '../src/store/mutations-types.js'
import { UPDATEINFO } from '../src/store/mutations-types.js'


export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data(){
    return{
      message:'我是App组件',
    }
  },
  methods: {
    addition(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit(DECREMENT)
    },
    addCount(count){
      // payload:负载
      // 1.普通的提交封装
      // this.$store.commit('incrementCount',count)

      // 2.特殊的提交封装
      this.$store.commit({
        type:INCREMENTCOUNT,
        count:count
      })
    },
    addStudent(){
      const stu = {id:114,name:'七七',age:40}
      this.$store.commit(ADDSTUDENT,stu)
    },
    updateInfo(){
      // this.$store.commit(UPDATEINFO)
      // this.$$store.dispatch('aUpdateInfo','我是payload')
      // this.$$store.dispatch('aUpdateInfo',()=>{
      //   console.log('里面已经完成了');
      // })
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success:()=>{
      //     console.log('里面已经完成了');
      //   }
      // })
      this.$store
      .dispatch('aUpdateInfo','我是携带的信息')
      .then(res => {
        console.log('里面完成了提交');
        console.log(res);
      })
    },
    updateName(){
      // 模块的方法也可以通过普通的方法发送
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
  computed:{
    more20stu(){
      return this.$store.state.students.filter(s => s.age >20)
    },
  }
}
</script>

<style>

</style>
