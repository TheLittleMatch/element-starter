<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    }
  }
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
  margin-top: 50px;
}
</style>
