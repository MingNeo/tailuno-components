<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <!-- #region snippet -->
      <!-- Focus方式折叠面板 -->
      <h3 class="font-medium mb-2">Focus控制方式</h3>
      <div tabindex="0" class="border rounded-lg overflow-hidden focus:outline-none group">
        <div class="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
          <span>点击展开(失焦自动关闭)</span>
          <svg
            class="w-5 h-5 transition-transform group-focus:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>
          </svg>
        </div>
        <div class="hidden group-focus:block px-4 py-2 border-t">
          这是折叠面板的内容。点击其他地方面板会自动关闭。
        </div>
      </div>

      <!-- Checkbox方式折叠面板 -->
      <h3 class="font-medium mb-2">Checkbox控制方式</h3>
      <div class="border rounded-lg overflow-hidden">
        <div class="group">
          <input type="checkbox" class="peer hidden" id="collapse1">
          <label
            for="collapse1"
            class="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-50 cursor-pointer peer-checked:[&_svg]:rotate-180"
          >
            <span>点击切换展开/收起</span>
            <svg
              class="w-5 h-5 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>
            </svg>
          </label>
          <div class="hidden peer-checked:block px-4 py-2 border-t">
            这是折叠面板的内容。需要再次点击才会关闭。
          </div>
        </div>
      </div>

      <!-- 带图标的Checkbox折叠面板 -->
      <div class="border rounded-lg overflow-hidden">
        <div class="group">
          <input type="checkbox" class="peer hidden" id="collapse2">
          <label
            for="collapse2"
            class="w-full px-4 py-2 flex justify-between items-center hover:bg-gray-50 cursor-pointer peer-checked:[&_.collapse-arrow]:rotate-180"
          >
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"/>
              </svg>
              <span>带图标的折叠面板</span>
            </div>
            <svg
              class="collapse-arrow w-5 h-5 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>
            </svg>
          </label>
          <div class="hidden peer-checked:block px-4 py-2 border-t">
            这是带图标的折叠面板内容。
          </div>
        </div>
      </div>
      <!-- #endregion snippet -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen1 = ref(false)
const isOpen2 = ref(false)
const isOpen3 = ref(false)
</script>
