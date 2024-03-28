<template>
  <div class="footer-container">
    <div class="footer">
      <div class="left">
        <el-image class="img" :src="url" fit="fill" @click="goHome" />
        <div class="text">
          Hand-Puppet is dedicated to providing more and more complete resources of Bu Bu Bu Opera. You can share the
          latest Bujutsu culture and peripherals, watch or buy moments and Bujutsu peripherals from Bujutsu enthusiasts
          all over the world.
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="title">Hand-Puppet</div>
          <div class="item" @click="goOtherPage('/opera-performers')">Performers</div>
          <div class="item" @click="goOtherPage('/explore')">Explore</div>
          <div class="item" @click="goOtherPage('/introduce')">introduce</div>
          <div class="item" @click="goOtherPage('/traditional-games')">Traditional puppet show</div>
          <div class="item" @click="goOtherPage('/modern-games')">Modern puppet show</div>
          <div class="item" @click="goOtherPage('/feedback')">Feedback</div>
        </div>
        <div class="list">
          <div class="title">Shop</div>
          <div class="item" @click="goOtherPage('/shop')">Shop</div>
        </div>
        <div class="list">
          <div class="title">User</div>
          <div class="item" @click="logIn">log in</div>
          <div class="item">Members</div>
          <div class="item" style="cursor: text">Privacy policy</div>
          <div class="item" style="cursor: text">Terms of service</div>
        </div>
      </div>
    </div>
    <Divider />
    <div class="down">
      <div class="tips">©2020 Hand-Puppet. All rights reserved.</div>
      <div class="btns">
        <el-icon color="#889aa4" size="15"><ChatDotRound /></el-icon>
        <el-icon color="#889aa4" size="15"><Dessert /></el-icon>
        <el-icon color="#889aa4" size="15"><Clock /></el-icon>
        <el-icon color="#889aa4" size="15"><User /></el-icon>
        <el-icon color="#889aa4" size="15"><MessageBox /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import url from '../../assets/head1.png'
import Divider from '../Divider/index.vue'
import { removeToken } from '../../utils/auth'

const { replace, push } = useRouter()

const goOtherPage = (url) => {
  if (url) {
    push(url)
  }
}

const goHome = () => {
  push('/')
}

const logIn = () => {
  removeToken()
  replace('/login')
}
</script>

<style scoped>
.footer-container {
  padding: 0 15%;
}
.footer {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.45);
}
.img {
  width: 160px;
  height: 100px;
  margin-right: 20px;
  cursor: pointer;
}
.text {
  color: #889aa4;
  font-size: 14px;
  width: 260px;
}
.right {
  display: flex;
  padding-top: 40px;
}
.list {
  width: 180px;
}
.title {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
}
.item {
  color: #889aa4;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
}
.item:hover {
  color: #fff;
}
.down {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.tips {
  color: #889aa4;
  font-size: 14px;
}

.btns > i {
  margin: 0 2px;
}
</style>
