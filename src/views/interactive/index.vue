<template>
  <div class="page-header">
    <div class="intro1">
      <div style="display: flex; flex-direction: column; align-items: baseline; width: 100px; margin-top: 20px">
        <el-button
          type="info"
          style="background: #999999; width: 60px; margin-bottom: 20px"
          @click="handleclick(false)"
        ></el-button>
        <el-button type="danger" style="width: 60px" @click="handleclick(true)"></el-button>
      </div>

      <div class="tradit1">
        <div class="left1" :style="{ width: left1 ? '500px' : '260px' }"></div>
        <div class="right1" v-if="left1">
          <div class="name1">Recite in Extenso</div>
          <div class="pose1">“ 清风拂兮竹心涤, 明眸盼兮秋水离, 美人坐兮抚弦音, 有客来兮寥听意。”</div>
          <el-button style="width: 200px" type="danger" class="btn" size="large"> Recongnise </el-button>
        </div>
      </div>
      <div class="tradit1">
        <div class="right1" v-if="!left1">
          <div class="name1">Recite in Extenso</div>
          <div class="pose2">
            “ 征衣红尘化云烟， 江湖落拓不知年， 剑痴刀狂世纷云， 今将衣钵卸双肩； 踏尽千山无人识， 当初枉受盛名牵，
            东风吹醒英雄梦， 笑对青山万重天。”
          </div>
          <el-button style="width: 200px" type="danger" class="btn" size="large"> Recongnise </el-button>
        </div>
        <div class="left2" :style="{ width: !left1 ? '500px' : '260px' }"></div>
      </div>
    </div>
    <div class="intro2">
      <info style="margin-right: 100px" />
      <div style="display: flex; flex-direction: column">
        <Music :url="music1" :src="m1" name="参商" style="margin-bottom: 50px" />
        <Music :url="music2" :src="m2" name="泪与诗" />
      </div>
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Divider from '@/components/Divider/index.vue'
import info from './info.vue'
import Music from './music.vue'
import music1 from '@/assets/music1.mp3'
import music2 from '@/assets/music3.mp3'
import m1 from '@/assets/m1.png'
import m2 from '@/assets/m2.png'

const left1 = ref(true)

const handleclick = (val) => {
  left1.value = val
}
</script>

<style scoped>
.page-header {
  padding: 0;
}
.intro1 {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}

.tradit1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background: #fff;
  border-radius: 30px;
}
.left1 {
  height: 600px;
  border-radius: 10px;
  background-image: url('@/assets/r1.jpg');
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  border-radius: 30px;
}
.right1 {
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.left2 {
  height: 600px;
  border-radius: 10px;
  background-image: url('@/assets/r2.jpg');
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  border-radius: 30px;
}
.name1 {
  color: #000;
  font-size: 22px;
  font-weight: bold;
}
.pose1 {
  color: #000;
  font-size: 20px;
  width: 170px;
  border-right: 7px solid #eee;
  margin: 80px 0;
}

.pose2 {
  color: #000;
  font-size: 20px;
  width: 170px;
  border-left: 7px solid #eee;
  margin: 30px 0;
}
.intro2 {
  display: flex;
  height: 1000px;
  justify-content: center;
  margin-bottom: 80px;
}
</style>
