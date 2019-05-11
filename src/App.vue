<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div>
      <router-view></router-view>
      <el-button @click="startHacking">Start</el-button>
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
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
  margin-top: 50px;
}
</style>
