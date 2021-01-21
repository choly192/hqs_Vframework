<template>
  <div>
    <header>Vframework</header>
    <span @click="increment">点击+1</span> 
  </div>
</template>
<script>
export default {
  name: 'Home',
  template: {},
  methods: {
    increment(){
      this.$store.dispatch({
        type: 'increment',
        count: 10
      });
      console.log(this.$store.state.increment.count);
    }
  }
}
</script>
<style lang="less">

</style>