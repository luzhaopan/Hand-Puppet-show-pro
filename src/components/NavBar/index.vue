<template>
  <div class="headbar-container">
    <el-image class="img" :src="url" fit="fill" @click="goHome" />
    <el-input
      v-model="input1"
      class="search"
      size="large"
      style="width: 400px"
      placeholder="Search in Hand-Puppet"
      :suffix-icon="Search"
    >
      <template #prepend
        >screen
        <el-icon><CaretBottom /></el-icon>
      </template>
    </el-input>
    <div
      class="scan"
      @mouseenter="
        () => {
          scan = false
        }
      "
      @mouseleave="
        () => {
          scan = true
        }
      "
    >
      <span v-if="scan">scan</span>
      <span v-else>浏览</span>
      <el-icon><CaretBottom /></el-icon>
    </div>
    <div
      class="members"
      @click="dialogVisible = true"
      @mouseenter="
        () => {
          members = false
        }
      "
      @mouseleave="
        () => {
          members = true
        }
      "
    >
      <span v-if="members">members</span>
      <span v-else>会员</span>
    </div>
    <el-dropdown style="margin-left: 20px" popper-class="popper-list" trigger="click">
      <el-icon color="#999999" size="20"><MoreFilled /></el-icon>
      <template #dropdown>
        <el-dropdown-menu style="background: #333333; border: none">
          <el-dropdown-item @click="goOtherPage('/opera-performers')">
            <span class="item-text">Performers</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="goOtherPage('/explore')">
            <span class="item-text">Explore</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="goOtherPage('/introduce')">
            <span class="item-text">Introduction to the puppet</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="goOtherPage('/traditional-games')">
            <span class="item-text">Traditional puppet show</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="goOtherPage('/modern-games')">
            <span class="item-text">Modern puppet show</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="goOtherPage('/feedback')">
            <span class="item-text">Feedback</span>
          </el-dropdown-item>
          <Divider />
          <el-dropdown-item class="item-text" style="cursor: text">
            <span class="item-text">Privacy policy</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" style="cursor: text">
            <span class="item-text">Terms of service</span>
          </el-dropdown-item>
          <el-dropdown-item class="item-text" @click="logIn">
            <span class="item-text">Log in</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button type="danger" @click="logIn" class="loginBtn">
      <el-image class="upload" :src="upload" fit="fill" />
      log in
    </el-button>
    <el-dialog v-model="dialogVisible" title="" width="450">
      <div class="dialog">
        <el-image class="email" :src="email" fit="fill" />
        <div class="club">Join our members club for more freebies!</div>
        <div class="weekly">Get weekly coupons in your inb</div>
        <div style="position: relative">
          <el-input
            v-model="input3"
            style="max-width: 330px"
            size="large"
            placeholder="Enter your email"
            class="input-with-select"
          >
          </el-input>
          <el-button class="btn" type="danger" :icon="Right" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Right, Search, CaretBottom } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { removeToken } from '@/utils/auth'
import Divider from '@/components/Divider/index.vue'
import url from '@/assets/head1.png'
import email from '@/assets/email.svg'
import upload from '@/assets/upload.png'

const { replace, push } = useRouter()

const input1 = ref('')
const input3 = ref('')
const dialogVisible = ref(false)
const scan = ref(true)
const members = ref(true)

const goHome = () => {
  push('/')
}

const goOtherPage = (url) => {
  if (url) {
    push(url)
  }
}

const logIn = () => {
  removeToken()
  replace('/login')
}
</script>

<style scoped>
.headbar-container {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  position: relative;
}
.img {
  width: 160px;
  height: 100px;
  margin-right: 20px;
  cursor: pointer;
}
.search {
  width: 350px;
  margin-right: 20px;
}
.scan {
  color: #999999;
  font-size: 20px;
  font-weight: bold;
  margin: 0 40px;
  cursor: pointer;
  width: 65px;
}
.scan:hover {
  color: #fff;
}

.members {
  color: #999999;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
  cursor: pointer;
  width: 70px;
}
.members:hover {
  color: #fff;
}
.loginBtn {
  position: absolute;
  top: 28px;
  right: 30px;
}
.dialog {
  padding: 30px;
}
.email {
  width: 300px;
  height: 220px;
}
.club {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  width: 350px;
  line-height: 30px;
}
.weekly {
  font-size: 14px;
  margin-bottom: 20px;
}
.item-text {
  color: #999999;
}
.item-text:hover {
  color: #fff;
}

.btn {
  position: absolute;
  right: 33px;
  top: 10px;
}

.upload {
  width: 17px;
  height: 17px;
  margin-right: 10px;
}

::v-deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
  background-color: transparent;
}
::v-deep(.el-input-group__prepend) {
  background: #575554;
  box-shadow: none;
  border-right: 1px solid #aaaaaa;
}
::v-deep(.el-input__wrapper) {
  background: #575554;
  box-shadow: none;
  /* background: #fff;
  border: 1px solid #eee; */
}
</style>
