<template>
  <div class="page-header">
    <div class="page-title">
      <div class="title">Select backgro-und music</div>
      <div class="desc">Audio source NetEase cloud music</div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.page-header {
  display: flex;
}
.page-title {
  color: #fff;
  width: 280px;
  height: 380px;
  background: linear-gradient(rgb(252, 45, 96) 0%, rgb(47, 4, 14) 100%);
  border-radius: 40.5px;
  padding: 30px;
  z-index: 22;
}
.title {
  font-size: 50px;
  font-weight: 600;
  width: 100px;
}
.desc {
  font-size: 12px;
  width: 180px;
  margin-top: 40px;
}
.bg {
  width: 280px;
  height: 380px;
  background: linear-gradient(
    160.731deg,
    rgba(205, 205, 205, 0.13) 7.49038%,
    rgb(218, 115, 119) 94.5333%
  );
  border-width: 4px;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-radius: 83px;
  opacity: 0.25;
  padding: 30px;
  z-index: 2;
  margin: 40px 0 0 -300px;
}
</style>
