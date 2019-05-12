<template>
  <div class="mainContainer">
    <h1>Sign in to System</h1>
    <form action method="post">
      <div class="middle">
        <div class="username">
          <span>Phone or email address</span>
        </div>
        <input type="text">
        <div class="password">
          <span>Password</span>
          <span>
            <router-link to="/forgot">Forgot password</router-link>
          </span>
        </div>
        <input type="password">
        <el-button type="primary" class="myButton">Sign in</el-button>
      </div>

      <div class="bottom">
        <span>
          New to System?
          <a href="#">Create a count</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {


  }
};
</script>
<style lang="scss" scoped>
.mainContainer {
  margin: 0 auto;
  width: 300px;
  height: 500px;
}
a {
  text-decoration: none;
}
a:visited {
  color: #0366d6;
}
h1 {
  font-size: 24px;
  color: #333333;
  font-weight: 300px;
  letter-spacing: -0.5px;
}
span {
  font-size: 14px;
}
input {
  display: block;
  width: 100%;
  font-size: 16px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  line-height: 20px;
  min-height: 34px;
  outline: none;
  background-color: rgb(232, 240, 254);
  margin: 5px 0;
}
.middle {
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid #d8dee2;
  border-radius: 3px;
  background-color: white;
  width: 260px;
  display: flex;
  flex-direction: column;
}
.username {
  font-weight: 700;
}
.username span {
  float: left;
  margin-bottom: 8px;
}
.password {
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
}
.password span:nth-child(1) {
  font-weight: 700;
}

.password span:nth-child(2) {
  font-weight: 400;
  color: #0366d6;
}

.myButton {
  background-color: #28a745;
  background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
  color: #fff;
  font-weight: 700px;
  margin: 20px 0;
}
.bottom span {
  display: block;
}
.bottom {
  border: 1px solid #d8dee2;
  border-radius: 3px;
  background-color: white;
  width: 290px;
  height: 40px;
  margin-top: 10px;
  padding-top: 20px;
}
</style>