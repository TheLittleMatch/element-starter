<template>
  <div>
    <h1>Join Sytem</h1>
    <div class="container">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="nickname" prop="nickname">
          <el-input v-model="ruleForm.nickname" type="text" placeholder="昵称"></el-input>
        </el-form-item>
        <el-form-item label="username" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入手机号作为用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-button type="primary" class="myButton" @click="submitForm('ruleForm')">Regist</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        nickname: "",
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        nickname: [{ required: true, message: "昵称不能为空" }],
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$api.post(
            "regist",
            {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              nickname: this.ruleForm.nickname
            },
            response => {
              if (response.status >= 200 && response.status < 300) {
                console.log(response.data); //请求成功，response为成功信息参数
                this.$router.push({ path: "/login" });
              } else {
                console.log(response.message); //请求失败，response为失败信息
              }
            }
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
.container {
  margin: 0 auto;
  width: 400px;
}
</style>