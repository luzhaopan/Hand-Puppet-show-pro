<template>
  <div class="traditional-page">
    <div class="header">Traditional Puppet Show</div>
    <div class="bg"></div>
    <div class="content">
      <Item />
    </div>
    <Divider />
  </div>
</template>

<script setup>
import Divider from '@/components/Divider/index.vue'
import Item from './item.vue'
</script>

<style scoped>
.traditional-page {
  position: relative;
}
.header {
  width: 100%;
  height: 350px;
  background: #dadada;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 80px 0;
}
.header > span {
  margin-top: 30px;
}
.bg {
  width: 100%;
  height: 1300px;
}
.content {
  position: absolute;
  width: 75%;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  padding: 40px 20%;
  border-radius: 5px;
}
</style>
