<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/Home/news">新闻</router-link>
    <router-link to="/Home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
  
</template>

<script>
export default {
    name:'Home',
    data(){
      return{
        message:'你好啊',
        path:'/home/news'
      }
    },
    // 创建组件的时候回调
    created() {
      // console.log('created');
      // document.title='首页'
      console.log('home created');
    },
    // 挂载组件的时候回调
    // mounted() {
    //   console.log('mounted');
    // },
    // 界面刷新的时候回调
    // updated() {
    //   console.log('updated');
    // },
    // 销毁组件的时候回调
    // 这两个函数，只有该组件保持了状态，使用了keep-alive时，才是有效的
    destroyed() {
      console.log('home destroyed');
    },
    // 组件处于活跃状态的时候回调
    activated() {
      this.$router.push(this.path);
    },
    // 组件处于不活跃状态的时候销毁 回调
    // 但由于已经到另外一个页面了，回调后的path不准确
    // deactivated() {
    //   this.path = this.$router.path
    // },
    // 组件守卫 在跳转路由前回调
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path);
      this.path=this.$route.path;
      next()
    }
}
</script>

<style>

</style>