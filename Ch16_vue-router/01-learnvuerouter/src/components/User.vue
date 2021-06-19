<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是用户信息：嘿嘿嘿</p>
      <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
    name:'User',
    created() {
      console.log('User created');
    },
    destroyed() {
      console.log('User destroyed');
    },
}
</script>

<style>

</style>