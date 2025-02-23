<script setup>
import { ref } from 'vue'
const options = ['选项 1', '选项 2', '选项 3', '选项 4']
const isOpen = ref(false)
const selected = ref('')

function toggleOpen() {
  isOpen.value = !isOpen.value
}

function selectOption(option) {
  selected.value = option
  isOpen.value = false
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- #region snippet -->
    <!-- 基础选择器 -->
    <select class="select">
      <option selected>
        请选择
      </option>
      <option>选项 1</option>
      <option>选项 2</option>
      <option>选项 3</option>
    </select>

    <!-- 带图标的选择器 -->
    <div class="select-wrapper">
      <select class="select">
        <option selected>
          请选择
        </option>
        <option>选项 1</option>
        <option>选项 2</option>
        <option>选项 3</option>
      </select>
      <svg class="select-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    </div>

    <!-- 自定义下拉菜单 -->
    <div class="select-custom-wrapper">
      <button class="select-custom-trigger" @click="toggleOpen">
        <span>{{ selected || '请选择' }}</span>
        <svg class="select-custom-arrow" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-show="isOpen" class="select-custom-dropdown">
        <div
          v-for="option in options"
          :key="option"
          class="select-custom-option"
          :class="{ 'select-custom-selected': selected === option }"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>

<style lang="css">
  @import './index.css';
</style>
