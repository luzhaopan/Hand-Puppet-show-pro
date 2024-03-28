<template>
  <div class="app-wrapper">
    <NavBar />
    <AppMain />
    <Footer />
  </div>
  <el-backtop />
</template>

<script setup>
import NavBar from "@/components/NavBar/index.vue"
import AppMain from "@/components/AppMain/index.vue"
import Footer from "@/components/Footer/index.vue"
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;
  background: #0f0f0f;
  overflow: auto;
}
</style>
