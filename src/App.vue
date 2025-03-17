<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body,
html {
  height: 100%;
  background-color: lightgray;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
