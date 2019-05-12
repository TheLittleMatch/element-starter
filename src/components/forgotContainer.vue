<template>
  <div>
    <h1>忘了就忘了吧。</h1>
    <h1>重新注册一个。</h1>
    <el-button type="primary" @click="goBack">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>