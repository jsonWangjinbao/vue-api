<style lang='less'>
  @import "./style/index.less";
</style>

<template>
  <div id="app">
    <div class="top-title">
      <div class="title-left">美篇统计报表</div>
      <div class="title-right">退出</div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
