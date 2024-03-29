<template>
  <div class="page-header">
    <div class="inheritors">The Inheritors of Puppet Show</div>
    <div class="actor">
      <div class="container f1">
        <div class="item">
          <el-avatar :size="70" fit="fill" :src="h" />
          <div class="name">黄朱璜</div>
          <div class="desc">Budai Opera Artist</div>
          <div>
            <el-image
              style="width: 12px; height: 12px; margin-right: 3px"
              :src="wc"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="qq"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="phone"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px"
              :src="weibo"
              fit="fill"
            />
          </div>
          <div class="text">
            Huang Zhu Juan was born in 1961 in Nanlang Village, Mazhang Town,
            Cangnan County, Zhejiang Province. He is a folk single-file Bubu
            Opera artiste in Cangnan County, and is also the youngest Bubu Opera
            artiste in Cangnan.
          </div>
        </div>
        <div class="item">
          <el-avatar :size="70" fit="fill" :src="d" />
          <div class="name">屠方传</div>
          <div class="desc">Inheritor of the "Single-stage Puppet Theatre</div>
          <div>
            <el-image
              style="width: 12px; height: 12px; margin-right: 3px"
              :src="wc"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="qq"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px"
              :src="phone"
              fit="fill"
            />
          </div>
          <div class="text">
            Pingyang "single-file bag opera" inheritor, sports lottery entity
            shop of non-heritage bag opera inheritor
          </div>
        </div>
      </div>
      <div class="container f2">
        <div class="item">
          <el-avatar :size="70" fit="fill" :src="zh" />
          <div class="name">庄陈华</div>
          <div class="desc">
            Representative Inheritor of the National Intangible Cultural
            Heritage Puppet Show
          </div>
          <div>
            <el-image
              style="width: 12px; height: 12px; margin-right: 3px"
              :src="wc"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="qq"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="phone"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px"
              :src="weibo"
              fit="fill"
            />
          </div>
          <div class="text">
            In 1958, he entered the puppet performance section of Zhangzhou City
            Art School in Fujian Province and learnt from puppet master Yang
            Sheng. In 1960, he became the main actor, deputy director and
            artistic director of Zhangzhou City Puppet
          </div>
        </div>
        <div class="item">
          <el-avatar :size="70" fit="fill" :src="zr" />
          <div class="name">庄晏红</div>
          <div class="desc">Puppetry Inheritors of the Puppet Theatre</div>
          <div>
            <el-image
              style="width: 12px; height: 12px; margin-right: 3px"
              :src="wc"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px; margin-right: 3px"
              :src="qq"
              fit="fill"
            />
            <el-image
              style="width: 14px; height: 14px"
              :src="phone"
              fit="fill"
            />
          </div>
          <div class="text">
            Representative Inheritor at the Provincial Level of Minnan Shadow
            Opera (Xiamen)
          </div>
          <div class="text">
            Provincial Representative Inheritor of Fujian Puppetry (Xiamen)
          </div>
        </div>
      </div>
      <div
        style="
          position: absolute;
          top: 550px;
          left: 50%;
          transform: translateX(-50%);
        "
      >
        <el-image style="width: 100px; height: 40px" :src="doot" fit="fill" />
      </div>
      <div
        style="
          position: absolute;
          top: 620px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
        "
      >
        <div
          style="
            background: #2c2c2c;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 230px;
            padding: 10px;
          "
        >
          <el-image style="width: 40px; height: 30px" :src="xin" fit="fill" />
          <div style="width: 180px; color: #999999">
            <div style="font-weight: bold">Contact</div>
            <div style="font-size: 10px; margin-top: 10px">
              If you have any questions, please contact us at our email address
            </div>
          </div>
        </div>
        <div
          style="
            background: #2c2c2c;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 230px;
            padding: 10px;
            margin: 0 20px;
          "
        >
          <el-image style="width: 40px; height: 30px" :src="share" fit="fill" />
          <div style="width: 180px; color: #999999">
            <div style="font-weight: bold">Focus on Channel</div>
            <div>
              <el-image
                style="width: 12px; height: 12px; margin-right: 3px"
                :src="ins"
                fit="fill"
              />
              <el-image
                style="width: 12px; height: 12px; margin-right: 3px"
                :src="wc"
                fit="fill"
              />
              <el-image
                style="width: 14px; height: 14px; margin-right: 3px"
                :src="qq"
                fit="fill"
              />
              <el-image
                style="width: 14px; height: 14px; margin-right: 3px"
                :src="phone"
                fit="fill"
              />
              <el-image
                style="width: 15px; height: 15px"
                :src="weibo"
                fit="fill"
              />
            </div>
          </div>
        </div>
        <div
          style="
            background: #2c2c2c;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 230px;
            padding: 10px;
          "
        >
          <el-image style="width: 40px; height: 30px" :src="laba" fit="fill" />
          <div style="width: 180px; color: #999999">
            <div style="font-weight: bold">News</div>
            <div style="font-size: 10px; margin-top: 10px">
              Get it by subscribing to our public number, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Review />
  </div>
</template>

<script setup>
import Review from "@/components/Review/index.vue"

import h from "@/assets/h.png"
import wc from "@/assets/wechat.png"
import qq from "@/assets/qq.png"
import phone from "@/assets/phone.png"
import weibo from "@/assets/weibo.png"
import d from "@/assets/d.png"
import zh from "@/assets/zh.png"
import zr from "@/assets/zr.png"
import doot from "@/assets/516.jpg"
import xin from "@/assets/xin.png"
import laba from "@/assets/laba.png"
import share from "@/assets/share.png"
import ins from "@/assets/in.png"
</script>

<style scoped>
.page-header {
  padding: 0;
}
.inheritors {
  width: 100%;
  height: 600px;
  background-image: url("@/assets/ac4.png");
  background-repeat: no-repeat;
  background-position: center 0.1px;
  background-size: 100% 100%;
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.actor {
  background-color: #0f0f0f;
  width: 100%;
  height: 760px;
  position: relative;
}
.container {
  display: flex;
  justify-content: center;
  align-items: start;
}
.f2 {
  position: absolute;
  left: 50%;
  top: 280px;
  transform: translateX(-50%);
}
.f1 {
  position: absolute;
  left: 50%;
  top: -20px;
  transform: translateX(-50%);
}
.item {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.name {
  color: #999999;
  font-size: 14px;
}
.desc {
  color: #999999;
  font-size: 12px;
  margin: 10px 0;
}
.text {
  color: #999999;
  font-size: 10px;
  width: 250px;
  line-height: 14px;
  text-align: center;
  margin-top: 5px;
}
.img {
  width: 13px;
  height: 13px;
}
</style>
