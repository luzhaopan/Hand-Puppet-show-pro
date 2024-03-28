<template>
  <div>
    <div class="mbg">
      <el-image :class="{ pic: true, rotated: disabled }" :src="src" fit="fill" />
      <div class="down down1"></div>
      <div class="down down2"></div>
    </div>
    <div class="item">
      <div>
        <div class="play" @click="playVoice" v-if="!isPlay">
          <el-icon color="#fc2d60" size="45"><CaretRight /></el-icon>
        </div>
        <div class="play" @click="stopVoice" v-else>
          <el-image class="stopBtn" :src="stop" fit="fill" />
        </div>
      </div>
      <div style="margin-left: 60px">
        <div style="color: #999; font-size: 14px">name</div>
        <div style="color: #fff; font-size: 20px; font-weight: bold">{{ name }}</div>
      </div>
    </div>
    <div>
      <el-button type="danger" class="btn2">
        <span style="color: #fff; font-size: 22px; font-weight: bold">Choose</span>
      </el-button>
    </div>
    <audio ref="audio" controls hidden="true" :src="voicePath" />
  </div>
</template>

<script setup>
import { ref, nextTick, defineProps } from 'vue'
import { CaretRight } from '@element-plus/icons-vue'
import stop from '@/assets/stop.png'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})

const audio = ref(new Audio())
const voicePath = ref('')
const isPlay = ref(false)
const disabled = ref(false)

const playVoice = () => {
  disabled.value = true

  isPlay.value = true
  // 本地链接
  voicePath.value = new URL(props.url, import.meta.url).href

  nextTick(() => {
    // 从头开始
    audio.value.currentTime = 0
    // 播放
    audio.value?.play()
  })
}

const stopVoice = () => {
  disabled.value = false
  isPlay.value = false
  nextTick(() => {
    audio.value?.pause()
  })
}
</script>

<style scoped>
.mbg {
  position: relative;
  margin: 50px 0 0 100px;
}
.down {
  width: 300px;
  height: 300px;
  background: linear-gradient(155.898deg, rgba(205, 205, 205, 0.13) 10.5494%, rgb(218, 115, 115) 92.434%);
  border-radius: 248.5px;
  opacity: 0.25;
}
.down1 {
  background: linear-gradient(155.898deg, rgba(205, 205, 205, 0.13) 10.5494%, rgb(218, 115, 115) 92.434%);
  position: absolute;
  top: -35px;
  left: -60px;
}
.down2 {
  position: absolute;
  top: 55px;
  left: 50px;
}
.img {
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.stopBtn {
  width: 45px;
  height: 45px;
}
.pic {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.rotated {
  transform: translate(-26px, -26px) rotate(800deg);
  box-shadow: rgba(255, 255, 255, 0) 0px 0px 1px;
  transition: all 20000ms linear 0s;
  z-index: 0;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-duration: 20000ms;
}
.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.btn2 {
  width: 300px;
  height: 40px;
  border-radius: 37px;
  background: linear-gradient(rgb(252, 45, 96) 2.11242%, rgb(47, 4, 14) 100%);
  border: none;
}
.play {
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #3b2828;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
