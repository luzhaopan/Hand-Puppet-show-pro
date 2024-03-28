<template>
  <div class="page-header">
    <div class="shop">
      <img src="../../assets/928.jpg" alt="" />
      <div class="code-info">
        <div class="code-name">
          King of West Chu Zhangzhou Puppet Show Dolls
        </div>
        <div class="path">
          <div style="font-size: 10px">
            <div style="display: flex; align-items: center; line-height: 30px">
              <div
                style="
                  position: relative;
                  background: #988877;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                "
              >
                <el-image
                  style="
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                  "
                  :src="url"
                  fit="fill"
                />
              </div>
              <span style="margin-left: 8px">from</span>
              <div
                @mouseenter="
                  () => {
                    store = false
                  }
                "
                @mouseleave="
                  () => {
                    store = true
                  }
                "
              >
                <span style="margin-left: 8px" v-if="store">storefront1</span>
                <span style="color: red; margin-left: 8px" v-else>
                  OlehChananov
                </span>
              </div>
            </div>
            <div style="display: flex; align-items: center; line-height: 30px">
              <el-image
                style="width: 10px; height: 10px"
                :src="love"
                fit="fill"
              />
              <span style="margin-left: 8px"> Bookmark (Internet) </span>
            </div>
            <div style="display: flex; align-items: center; line-height: 30px">
              <el-icon><Share /></el-icon>
              <span style="margin-left: 8px">Share</span>
            </div>
            <div>
              <el-icon size="10" color="#999"><Star /></el-icon>
              <el-icon size="10" color="#999" style="margin-left: 5px"
                ><Star
              /></el-icon>
              <el-icon size="10" color="#999" style="margin-left: 5px"
                ><Star
              /></el-icon>
              <el-icon size="10" color="#999" style="margin-left: 5px"
                ><Star
              /></el-icon>
              <el-icon size="10" color="#999" style="margin-left: 5px"
                ><Star
              /></el-icon>
            </div>
          </div>
          <div class="qr-code"></div>
        </div>
        <el-button style="width: 200px; margin-top: 40px" type="danger">
          ￥200
        </el-button>
      </div>
    </div>
    <div class="text">
      <div>Name:Zhangzhou Puppets</div>
      <div>[Brand]:Zhangzhou Puppet Workshop</div>
      <div>
        [Size]:33CM(35CM with back flag, 33CM without back flag)
        [Material]:Resin head, clothes for special
      </div>
      <div>order weaving cotton cloth</div>
      <div>Hat handmade paper hat</div>
      <div>
        [use]; friends and family gifts, new homes and housewarming, birthdays,
        children's educational toys,
      </div>
      <div>
        furniture furnishings unit gifts [scope of use]; study office living
        room showroom shopper
      </div>
      <div>
        recommended: this puppet is a handmade hand puppet, children's
        introductory practice puppets, but
      </div>
      <div>
        also gifts to friends and relatives, home decoration, office furnishings
        of good articles
      </div>
    </div>
    <Divider />
    <div class="oleh">
      <div
        style="
          position: relative;
          background: #988877;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        "
      >
        <el-image class="homeimg" :src="url" fit="fill" />
      </div>
      <div
        @mouseenter="
          () => {
            front = false
          }
        "
        @mouseleave="
          () => {
            front = true
          }
        "
      >
        <span
          style="margin-left: 8px; color: #fff; font-weight: bold"
          v-if="front"
          >storefront1</span
        >
        <span style="color: red; font-weight: bold; margin-left: 8px" v-else>
          Oleh
        </span>
        <div style="margin-left: 8px; color: #fff">classify</div>
      </div>
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Divider from "@/components/Divider/index.vue"
import url from "../../assets/home.png"
import love from "../../assets/love.png"
const store = ref(true)
const front = ref(true)
</script>

<style scoped>
.page-header {
  background-color: #333333;
}
.shop {
  display: flex;
  justify-content: center;
  padding: 80px 10%;
}
img {
  width: 450px;
  height: 310px;
  border-radius: 10px;
}
.code-info {
  background-color: #fff;
  border-radius: 5px;
  width: 200px;
  padding: 20px;
  margin-left: 10px;
}
.code-name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}
.text {
  color: #999999;
  padding: 0px 20% 60px;
  font-size: 12px;
}
.path {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.qr-code {
  width: 70px;
  height: 65px;
  background-image: url("@/assets/483.jpg");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
}
.oleh {
  padding: 30px 20%;
  font-size: 12px;
  display: flex;
}
.homeimg {
  position: absolute;
  z-index: 999;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
