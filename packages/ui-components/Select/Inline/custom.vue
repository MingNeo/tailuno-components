<!-- Vue版本，直接复制此文件使用即可，不使用点击外侧自动收起的话，无需再引入其他js -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const options = [
  { label: '选项 1', value: '1' },
  { label: '选项 2', value: '2' },
  { label: '选项 3', value: '3' },
  { label: '选项 4', value: '4' },
]

const isOpen = ref(false)
const selected = ref('')

function toggleOpen() {
  isOpen.value = !isOpen.value
}

function selectOption(option) {
  selected.value = option
  isOpen.value = false
}

// 可选，点击外部时关闭下拉菜单
const selectRef = ref(null)
const listener = (event) => (!selectRef.value?.contains(event.target) && (isOpen.value = false))
onMounted(() => document.addEventListener('click', listener))
onUnmounted(() => document.removeEventListener('click', listener))
</script>

<template>
  <div ref="selectRef" class="relative w-[200px]">
    <button
      class="w-full px-4 py-2 text-left text-gray-700 bg-white border border-solid border-gray-300 rounded-md shadow-sm flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
      @click="toggleOpen"
    >
      <span>{{ selected?.label || '请选择' }}</span>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="absolute z-[10] w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto dark:bg-gray-800 dark:border-gray-600"
    >
      <div
        v-for="option in options"
        :key="option"
        class="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
        :class="{ 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400': selected?.value === option.value }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
