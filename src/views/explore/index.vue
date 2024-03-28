<template>
  <div class="page-export">
    <el-image class="img" :src="url" fit="fill" />
    <div class="title">Create your own</div>
    <div class="name">Hand-puppet show</div>
    <div class="desc">
      A customisable analogue ragtime show, come and try it out
    </div>
    <el-button class="btn" type="danger" round @click="handleClick()"
      >START NOW</el-button
    >
  </div>
</template>

<script setup>
import url from "../../assets/head1.png"
import { useRouter } from "vue-router"

const { push } = useRouter()

const handleClick = () => {
  push("/interactive")
}
</script>

<style scoped>
.page-export {
  width: 100%;
  height: 700px;
  background-image: url("@/assets/exp.jpg");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  padding: 40px 120px;
}
.title {
  font-size: 40px;
  font-weight: bold;
  color: #fc2d60;
}
.name {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  width: 300px;
  margin: 20px 0;
}
.desc {
  font-size: 12px;
  color: #fff;
  margin: 20px 0;
}
.img {
  width: 160px;
  height: 100px;
}
.btn {
  margin-left: 80px;
}
</style>
