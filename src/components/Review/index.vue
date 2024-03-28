<template>
  <div class="page-review">
    <div class="title">
      Want to share your story with the puppet show or leave a comment?
    </div>
    <div class="content">
      We'd love to hear it! Your suggestions will motivate us to continuously
      improve Hand-puppet. Please use our contact form to let us know.
    </div>
    <el-button class="btn" type="danger" @click="handleClick()">
      Leave a review
    </el-button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const { push } = useRouter()

const handleClick = () => {
  push("/feedback")
}
</script>

<style scoped>
.page-review {
  border-top: 1px solid #494949;
  border-bottom: 1px solid #494949;
  color: #fff;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 26px;
  width: 600px;
  font-weight: bold;
  margin: 20px 0;
  text-align: center;
}
.content {
  font-size: 18px;
  width: 820px;
  text-align: center;
}
.btn {
  margin: 40px 0;
  width: 200px;
}
</style>
