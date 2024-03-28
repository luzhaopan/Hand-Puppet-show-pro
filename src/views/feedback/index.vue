<template>
  <div class="page-header">
    <div class="title">Feedback</div>
    <div class="desc">
      If you have any questions, ideas, or just want to say "hello," please
      contact us
    </div>
    <el-form
      label-position="top"
      label-width="auto"
      :model="formLabelAlign"
      :rules="rules"
      style="width: 400px"
    >
      <el-form-item label="Appellation" prop="Appellation">
        <el-input
          v-model="formLabelAlign.Appellation"
          placeholder="Your name"
        />
      </el-form-item>
      <el-form-item label="Email" prop="Email">
        <el-input v-model="formLabelAlign.Email" placeholder="Your Email" />
      </el-form-item>
      <el-form-item label="Theme" prop="Theme">
        <el-select
          v-model="formLabelAlign.Theme"
          placeholder="Problem description"
        >
          <el-option label="Problem description" value="shanghai" />
          <el-option label="Comments/Suggestions" value="beijing" />
          <el-option label="Other" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Idea" prop="Idea">
        <el-input v-model="formLabelAlign.Idea" type="textarea" />
      </el-form-item>
      <el-form-item prop="check">
        <el-radio :value="formLabelAlign.check">
          <span style="font-size: 12px">Consent to Privacy Policy</span>
          <span style="margin-left: 10px; color: red; font-size: 12px">
            Privacy policy
          </span>
        </el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" style="width: 100%">Send</el-button>
      </el-form-item>
    </el-form>
  </div>
  <Divider />
</template>

<script setup>
import { reactive } from "vue"
import Divider from "@/components/Divider/index.vue"

const formLabelAlign = reactive({
  Appellation: "",
  Email: "",
  Theme: "Problem description",
  Idea: "",
  check: false
})
const rules = reactive({
  Appellation: [
    { required: true, message: "Please input Your name", trigger: "blur" }
  ],
  Email: [
    {
      required: true,
      message: "Please input Your Email",
      trigger: "change"
    }
  ],
  Theme: [
    {
      required: true,
      message: "Please select Your Theme",
      trigger: "change"
    }
  ],
  Idea: [
    {
      required: true,
      message: "Please input Your Idea",
      trigger: "change"
    }
  ]
})
</script>

<style scoped>
.page-header {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0 40px;
}
.title {
  font-size: 28px;
  font-weight: 600;
}
.desc {
  font-size: 10px;
  margin: 30px 0;
}
::v-deep(.el-form-item__label) {
  color: #fff;
  font-size: 12px;
}
</style>
