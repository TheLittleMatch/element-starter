<template>
  <div class="mainContainer">
    <h1>Sign in to System</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" method="post">
      <div class="middle">
        <div class="username">
          <el-form-item label="Phone or email address" prop="username">
            <el-input v-model="ruleForm.username" type="text"></el-input>
          </el-form-item>
        </div>
        <div class="password">
          <el-form-item label="Password" prop="password">
            <router-link to="/forgot">Forgot password</router-link>
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
        </div>
        <el-button type="primary" class="myButton" @click="submitForm('ruleForm')">Sign in</el-button>
      </div>

      <div class="bottom">
        <span>
          New to System?
          <router-link to="register">Create a count</router-link>
        </span>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "非法手机号"
          }
        ],
        password: [{ required: true, message: "密码不能为空" }]
      }
    };
  },
  mounted() {
    this.resetForm("ruleForm");
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api.post(
            "login",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            },
            response => {
              if (response.status >= 200 && response.status < 300) {
                console.log(response.data); //请求成功，response为成功信息参数
                this.$router.push({ path: "/home" });
              } else {
                console.log(response.message); //请求失败，response为失败信息
              }
            }
          );
        } else {
          console.log("error submit!!");
          alert("用户名或密码错误")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
  margin-top: 5px;
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
}
.password {
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