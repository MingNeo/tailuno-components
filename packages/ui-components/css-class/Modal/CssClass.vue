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
  <div class="flex flex-col gap-4">
    <!-- 基础模态框 -->
    <div>
      <button
        class="px-4 py-2 bg-primary text-white rounded-sm hover:bg-blue-600"
        @click="handleOpenModal"
      >
        打开基础模态框
      </button>

      <div v-if="showModal" class="modal-overlay" @click="handleCloseModal">
        <div class="modal-container">
          <div class="modal-header">
            <h3>基础模态框</h3>
            <button class="modal-close" @click="handleCloseModal">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="modal-content">
            这是一个使用CSS类构建的模态框示例。
          </div>
          <div class="modal-footer">
            <button class="modal-btn-secondary" @click="handleCloseModal">
              取消
            </button>
            <button class="modal-btn-primary" @click="handleCloseModal">
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import './index.css';
</style>
