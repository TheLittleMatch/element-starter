<template>
  <div id="app">
    <div>
      <img class="logo" src="./assets/logo.png">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  background-color: #fbfbfb;
}
.logo {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
</style>
