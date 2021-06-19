<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag='button' replace active-class="active">关于</router-link> -->
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">档案</router-link> -->
    <button @click='userClick'>用户</button>
    <button @click="profileClick">档案</button>

    <!-- exclude不包含 -->
    <keep-alive exclude="User,Profile">
      <router-view></router-view>
    </keep-alive>
    
    <!-- to： 指定跳转的路径 -->
    <!-- tag： 指定 router-link 渲染成什么组件 -->
    <!-- replace：replace不会留下history记录，所以指定replace的情况下，后退键返回不能返回到上一个页面中 -->
    <!-- active-class 当<router-link> 对应的路由器匹配成功时，会自动给当前元素设置一个router-link-active的class-->
      <!-- 设置active-class可以修改默认名称 -->
      <!-- 也可以通过路由 index.js 里面设置 linkActiveClass  -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'lisi'
    }
  },
  methods: {
    homeClick(){
      // 通过代码方式修改路由 vue-router
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'kobe',
          age:19,
          height:1.88
        }
      })
    }
  },
}
</script>

<style>
  .active{
    color: red;
  }
</style>
