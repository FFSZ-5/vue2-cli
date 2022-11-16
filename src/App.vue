<template>
  <div id="app">
    <div class="body"></div>
    <router-view />
  </div>
</template>

<style lang="less" scoped>
#app {
  .body {
    height: 50px;
    width: 50px;
    background: @background;
  }
}
</style>
