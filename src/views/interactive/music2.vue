<template>
  <div>
    <div><el-image class="pic" :src="m2" fit="fill" /></div>
    <div class="item">
      <el-image class="img" :src="play" fit="fill" />
      <div style="margin-left: 60px">
        <div style="color: #999; font-size: 14px">name</div>
        <div style="color: #fff; font-size: 22px; font-weight: bold">
          泪与诗
        </div>
      </div>
    </div>
    <div>
      <el-button type="danger" class="btn2">
        <span style="color: #fff; font-size: 22px; font-weight: bold"
          >Choose</span
        >
      </el-button>
    </div>
  </div>
</template>

<script setup>
import play from "@/assets/play.png"
import m2 from "@/assets/m2.png"
</script>

<style scoped>
.img {
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.pic {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.item {
  display: flex;
  align-items: center;
  margin: 20px 0;
}
.btn2 {
  width: 300px;
  height: 50px;
  border-radius: 37px;
  background: linear-gradient(
    rgb(252, 45, 96) 2.11242e-13%,
    rgb(47, 4, 14) 100%
  );
}
</style>
