<template>
  <div class="page-header">
    <el-carousel trigger="click" height="550px">
      <el-carousel-item v-for="item in list" :key="item">
        <el-image class="img" :src="item" fit="fill" />
      </el-carousel-item>
    </el-carousel>
    <el-divider />
    <div class="puppet">
      <div class="p-title">PUPPET</div>
      <div style="position: relative; width: 500px; display: inline-block">
        <el-input
          v-model="input1"
          class="search"
          size="large"
          placeholder="Search"
        >
          <template #prepend>
            list
            <el-icon><CaretBottom /></el-icon
          ></template>
        </el-input>
        <el-button
          style="position: absolute; right: 55px; top: 4px"
          type="danger"
          :icon="Search"
        />
      </div>

      <div class="intro">
        <div class="tradit">
          <div class="name">Traditional Puppetry Theatre</div>
          <el-button
            style="width: 100px"
            type="danger"
            class="btn"
            @click="goTrational"
          >
            Into
          </el-button>
        </div>
        <div class="modern">
          <div class="name">Modern Puppet Theatre</div>
          <el-button
            style="width: 100px"
            type="danger"
            class="btn"
            @click="goTrational"
          >
            Into
          </el-button>
        </div>
      </div>
      <el-button style="width: 120px" type="danger" class="btn" @click="goShop">
        Shop
      </el-button>
    </div>
    <el-divider />
    <div class="more">
      <div class="more-title">Join our members club for more</div>
      <div class="more-sub-title">Get weekly coupons in your inbox!</div>
      <div style="position: relative">
        <el-input
          v-model="input2"
          style="width: 380px"
          size="large"
          placeholder="Enter your email address"
          class="input-with-select"
        >
        </el-input>
        <el-button
          style="position: absolute; right: 6px; top: 4px"
          type="danger"
          :icon="Right"
        />
      </div>
    </div>
    <el-divider />
  </div>
  <div
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #040a10;
    "
    :class="{ isShow: isShow }"
    @click="handelPause"
  >
    <video
      style="width: 100%; height: 100%; cursor: pointer"
      ref="videoPlayer"
      @ended="onVideoEnded"
      :autoplay="true"
      :loop="true"
    >
      <source :src="gif" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { Right, Search, CaretBottom } from "@element-plus/icons-vue"
import url1 from "@//assets/homebg1.jpg"
import url2 from "@/assets/homebg2.jpg"
import url3 from "@/assets/homebg3.jpg"
import gif from "@/assets/gif.mp4"

const { push } = useRouter()

const list = [url1, url2, url3]
const input1 = ref("")
const input2 = ref("")

const isShow = ref(false)
const videoPlayer = ref(null)

const onVideoEnded = () => {
  videoPlayer.value.play()
}

const handelPause = () => {
  videoPlayer.value.pause()
  isShow.value = true
}

const goTrational = () => {
  push("/traditional-games")
}

const goShop = () => {
  push("/shop")
}
</script>

<style scoped>
.page-header {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.img {
  width: 100%;
  height: 600px;
}
.puppet {
  padding: 20px;
  text-align: center;
}
.search {
  width: 400px;
  margin-bottom: 40px;
}
.p-title {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}
.intro {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
}
.tradit {
  width: 450px;
  height: 260px;
  border-radius: 10px;
  background-image: url("@/assets/traditional.png");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.name {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  width: 400px;
  text-align: center;
}
.modern {
  width: 450px;
  height: 260px;
  border-radius: 10px;
  background-image: url("@/assets/modern.png");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.more {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  background-image: url("@/assets/efly.svg");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
}
.more-title {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
.more-sub-title {
  color: #889aa4;
  font-size: 14px;
  text-align: center;
  margin: 10px 0 20px;
}
.isShow {
  display: none;
}
</style>
