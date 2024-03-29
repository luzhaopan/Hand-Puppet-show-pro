<template>
  <div class="login-page">
    <div class="login-box">
      <div class="title">Log-in</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        size="default"
        ref="ruleFormRef"
        label-width="120px"
        class="login-form"
        label-position="top"
        status-icon
      >
        <el-form-item label="" prop="username">
          <el-icon color="#889aa4" size="20" class="item"
            ><UserFilled
          /></el-icon>
          <el-input v-model="ruleForm.username" />
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-icon color="#889aa4" size="20" class="item"><Lock /></el-icon>
          <el-input
            type="password"
            v-model.trim="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="regis" @click="dialogVisible.show = true">
          register an account
        </div>
        <el-form-item>
          <el-button
            :loading="loading"
            style="width: 100%"
            type="danger"
            @click="submitForm(ruleFormRef)"
          >
            log in
          </el-button>
        </el-form-item>
        <div class="line"></div>
      </el-form>
    </div>
    <Dialog :visible="dialogVisible" />
    <Review />
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"
import { ElMessage } from "element-plus"
import router from "@/router"
import { setToken } from "@/utils/auth"

import Dialog from "./dialog.vue"
import Review from "@/components/Review/index.vue"
import Footer from "@/components/Footer/index.vue"

const dialogVisible = reactive({
  show: false
})
const loading = ref(false)

const ruleFormRef = ref()
const ruleForm = reactive({
  username: "admin",
  password: "123456"
})

const emue = ["admin123456", "test123456"]

const rules = reactive({
  username: [
    {
      required: true,
      message: "Please input userName",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "Please select passWord",
      trigger: "change"
    }
  ]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      loading.value = true
      setTimeout(() => {
        loading.value = false
        const str = ruleForm.username + ruleForm.password
        if (emue.includes(str)) {
          setToken("admin")
          router.push("/")
        } else {
          ElMessage.error("用户名或密码错误！")
        }
      }, 50)
    } else {
      console.log("error submit!", fields)
    }
  })
}
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  background: #0f0f0f;
  overflow: auto;
}
.login-box {
  position: relative;
  width: 100%;
  height: 600px;
}
.title {
  color: #fff;
  font-size: 38px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.login-form {
  max-width: 480px;
  width: 40%;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.item {
  margin-right: 15px;
}
.line {
  border-top: 1px solid #4e4d4d;
}
.regis {
  color: #999999;
  text-align: center;
  cursor: pointer;
  margin: 50px 0 20px;
}
.regis:hover {
  color: #fff;
}
::v-deep(.el-input) {
  --el-input-border-color: #68696b;
}
::v-deep(.el-input__wrapper) {
  background-color: #283443;
}
::v-deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
::v-deep(.el-form-item__label) {
  color: #ff940a;
  font-size: 16px;
  font-weight: 600;
}
</style>
