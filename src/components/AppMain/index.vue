<template>
  <div class="app-main-container">
    <router-view v-slot="{ Component }">
      <keep-alive :include="getCaches">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { computed } from "vue"

const getCaches = computed(() => {
  return []
})
</script>

<style scoped></style>
