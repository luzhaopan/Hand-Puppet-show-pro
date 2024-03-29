<template>
  <el-dialog v-model="visible.show" title="" width="600" center>
    <h2
      style="
        text-align: center;
        font-size: 30px;
        color: #525151;
        margin-bottom: 60px;
      "
    >
      Create an account
    </h2>
    <div style="display: flex; flex-direction: column; align-items: center">
      <div
        style="
          text-align: left;
          font-size: 24px;
          font-weight: bold;
          color: #000;
          margin-left: -90px;
        "
      >
        Personal Information
      </div>
      <el-input
        v-model="input1"
        style="width: 350px; margin: 20px 0; background: #fff; height: 50px"
        size="large"
        placeholder="First name"
      />
      <el-input
        v-model="input2"
        style="width: 350px; height: 50px"
        size="large"
        placeholder="Last name"
      />
    </div>

    <div style="display: flex; flex-direction: column; align-items: center">
      <div
        style="
          text-align: left;
          font-size: 24px;
          font-weight: bold;
          color: #000;
          margin-left: -140px;
          margin-top: 60px;
        "
      >
        Account Security
      </div>
      <el-input
        v-model="input1"
        style="width: 350px; margin: 20px 0; background: #fff; height: 50px"
        size="large"
        placeholder="Email address"
      />
      <el-input
        v-model="input2"
        style="width: 350px; height: 50px"
        size="large"
        placeholder="Password"
      />
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button
          size="large"
          type="danger"
          @click="visible.show = false"
          style="
            border-radius: 30px;
            font-size: 24px;
            font-weight: bold;
            padding: 30px;
          "
        >
          Create account
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineProps } from "vue"
const props = defineProps({
  visible: {
    type: Object,
    default: {
      show: false
    }
  }
})

const input1 = ref("")
const input2 = ref("")
const input4 = ref("")
const input3 = ref("")
</script>

<style scoped>
.dialog-footer {
  margin: 40px 0;
}
::v-deep(.el-input__wrapper) {
  background-color: #fff !important;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
}
::v-deep(.el-input__inner) {
  font-size: 20px;
  color: #000 !important;
}
</style>
