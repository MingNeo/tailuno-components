<script setup>
import { ref } from 'vue'

const showDrawer = ref(false)

function handleOpenDrawer() {
  showDrawer.value = true
}

function handleCloseDrawer() {
  showDrawer.value = false
}
</script>

<template>
  <button
    class="px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600"
    @click="handleOpenDrawer"
  >
    打开抽屉
  </button>

  <!-- 抽屉 -->
  <div v-if="showDrawer" class="drawer-overlay" @click="handleCloseDrawer">
    <div class="drawer-container">
      <div class="drawer-header">
        <h3>抽屉</h3>
        <button class="drawer-close" @click="handleCloseDrawer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="drawer-content">
        这是一个从抽屉示例。
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import './index.css';
</style>
