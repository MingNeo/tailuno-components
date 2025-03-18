```vue
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
  <button class="rounded-sm bg-green-500 px-4 py-2 text-white hover:bg-green-600"
    @click="handleOpenDrawer">
    打开抽屉
  </button>

  <!-- 抽屉 -->
  <div v-if="showDrawer"
    class="fixed inset-0 z-[9999] bg-black/50"
    @click="handleCloseDrawer">
    <div class="fixed right-0 top-0 h-full w-[480px] animate-[slideIn_0.3s_ease-out] bg-white py-6">
      <div class="mb-4 flex items-center justify-between px-6">
        <h3 class="text-xl font-semibold">
          抽屉
        </h3>
        <button class="text-gray-500 hover:text-gray-700"
          @click="handleCloseDrawer">
          <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mb-4 px-6">
        这是一个从抽屉示例。
      </div>
    </div>
  </div>
</template>

<style>
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
```
