<script setup>
import { ref } from 'vue'

const showModal = ref(false)

function handleOpenModal() {
  showModal.value = true
}

function handleCloseModal() {
  showModal.value = false
}
</script>

<template>
  <!-- 基础模态框 -->
  <button
    class="px-4 py-2 bg-primary text-white rounded-sm hover:bg-blue-600"
    @click="handleOpenModal"
  >
    打开基础模态框
  </button>

  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
    @click="handleCloseModal"
  >
    <div class="bg-white rounded-lg w-[480px] py-6 shadow-sm [animation:modal-show_0.3s_ease_forwards]">
      <div class="flex justify-between items-center mb-4 px-6">
        <h3 class="text-xl font-semibold">
          基础模态框
        </h3>
        <button
          class="text-gray-500 hover:text-gray-700"
          @click="handleCloseModal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mb-4 px-6">
        这是一个基础的模态框示例，点击外部或关闭按钮可以关闭。
      </div>
      <div class="flex justify-end gap-2 px-6">
        <button
          class="px-4 py-2 border rounded-sm hover:bg-gray-100"
          @click="handleCloseModal"
        >
          取消
        </button>
        <button
          class="px-4 py-2 bg-primary text-white rounded-sm hover:bg-blue-600"
          @click="handleCloseModal"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes modal-show {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
