<template>
  <div id='root'>
    <!-- 使用vue-router 留坑 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'app',
  template: {}
}
</script>
<style lang="less">
#root{
   background-color: rgba(0, 0, 0, 0.5);
   color: #fff;
   header{
     text-align: center;
   }
}
</style>