<template>
  <div>
      {{$store.state.counter}}
      <br>
      {{$store.getters.powerCounter}}
  </div>
</template>

<script>
export default {
    name:'HelloVuex',
}
</script>

<style>

</style>