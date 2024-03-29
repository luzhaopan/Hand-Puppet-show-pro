<template>
  <div class="page-header">
    <div class="intro1">
      <div
        style="
          display: flex;
          flex-direction: column;
          align-items: baseline;
          width: 100px;
          margin-top: 20px;
        "
      >
        <el-button
          type="info"
          style="background: #999999; width: 60px; margin-bottom: 20px"
          @click="handleclick(false)"
        ></el-button>
        <el-button
          type="danger"
          style="width: 60px"
          @click="handleclick(true)"
        ></el-button>
      </div>

      <div class="tradit1">
        <!-- <div class="left1" :style="{ width: left1 ? '500px' : '338px' }"></div> -->
        <div class="bgimg" :style="{ width: lefts ? '500px' : '270px' }">
          <div
            class="left1"
            :style="{
              'margin-left': lefts ? '0' : '-60px',
              width: lefts ? '100%' : '420px'
            }"
          ></div>
        </div>
        <div class="right1" v-if="lefts">
          <div class="name1">Recite in Extenso</div>
          <div class="pose1">
            <div>“ 清风拂兮竹心涤,</div>
            <div class="txt">明眸盼兮秋水离,</div>
            <div class="txt">美人坐兮抚弦音,</div>
            <div class="txt">有客来兮寥听意。”</div>
          </div>
          <el-button
            style="width: 200px; font-size: 18px; font-weight: bold"
            type="danger"
            class="btn"
            size="large"
          >
            Recongnise
          </el-button>
        </div>
      </div>
      <div class="tradit1">
        <div class="right1" v-if="!lefts">
          <div class="name1">Recite in Extenso</div>
          <div class="pose2">
            <div>“ 征衣红尘化云烟，</div>
            <div class="txt">江湖落拓不知年，</div>
            <div class="txt">剑痴刀狂世纷云，</div>
            <div class="txt">今将衣钵卸双肩；</div>
            <div class="txt">踏尽千山无人识，</div>
            <div class="txt">当初枉受盛名牵，</div>
            <div class="txt">东风吹醒英雄梦，</div>
            <div class="txt">笑对青山万重天。”</div>
          </div>
          <el-button
            style="width: 200px; font-size: 18px; font-weight: bold"
            type="danger"
            class="btn"
            size="large"
          >
            Recongnise
          </el-button>
        </div>
        <div class="bgimg" :style="{ width: !lefts ? '500px' : '270px' }">
          <div
            class="left2"
            :style="{
              'margin-left': !lefts ? '0' : '-60px',
              width: !lefts ? '100%' : '420px'
            }"
          ></div>
        </div>
      </div>
    </div>
    <div class="intro2">
      <info style="margin-right: 100px" />
      <div style="display: flex; flex-direction: column">
        <Music
          :url="music1"
          :src="m1"
          name="参商"
          style="margin-bottom: 50px"
        />
        <Music :url="music2" :src="m2" name="泪与诗" />
      </div>
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ref } from "vue"
import Divider from "@/components/Divider/index.vue"
import info from "./info.vue"
import Music from "./music.vue"
import music1 from "@/assets/music1.mp3"
import music2 from "@/assets/music3.mp3"
import m1 from "@/assets/m1.png"
import m2 from "@/assets/m2.png"
import leftpic2 from "@/assets/r2.jpg"

const lefts = ref(false)

const handleclick = (val) => {
  lefts.value = val
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
  border-radius: 80px;
}
.left1 {
  height: 600px;
  border-radius: 80px;
  background-image: url("@/assets/r1.jpg");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
}
.right1 {
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bgimg {
  border-radius: 80px;
  overflow: hidden;
}
.left2 {
  height: 600px;
  /* width: 400px; */
  border-radius: 80px;

  background-image: url("@/assets/r2.jpg");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  /* border-radius: 30px; */
}
.name1 {
  color: #000;
  font-size: 22px;
  font-weight: bold;
}
.pose1 {
  color: #838383;
  font-size: 20px;
  width: 210px;
  border-right: 7px solid #eee;
  margin: 80px 0;
}

.pose2 {
  color: #838383;
  font-size: 20px;
  width: 210px;
  border-left: 7px solid #eee;
  margin: 30px 0;
}
.intro2 {
  display: flex;
  height: 1000px;
  justify-content: center;
  margin-bottom: 80px;
}
.txt {
  padding-left: 25px;
}
</style>
