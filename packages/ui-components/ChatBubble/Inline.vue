<template>
  <div class="space-y-4">
    <!-- #region snippet -->
    <div class="space-y-4">
      <!-- 左侧消息 -->
      <div class="flex items-start gap-2">
        <div class="relative max-w-[70%]">
          <div class="mb-1 text-xs text-gray-500">用户名 12:30</div>
          <div class="relative px-4 py-2 bg-gray-100 text-gray-800 rounded-xl rounded-bl-none">
            这是一条左侧消息
            <svg class="absolute left-0 bottom-0 -translate-x-[6px] text-gray-100" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
            </svg>
          </div>
        </div>
      </div>

      <!-- 右侧消息 -->
      <div class="flex justify-end gap-2">
        <div class="relative max-w-[70%]">
          <div class="mb-1 text-xs text-gray-500 text-right">我 12:35</div>
          <div class="relative px-4 py-2 bg-primary text-white rounded-xl rounded-br-none">
            这是一条右侧消息
            <svg class="absolute right-0 bottom-0 translate-x-[6px] rotate-90 text-blue-800" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
            </svg>
          </div>
        </div>
      </div>

      <!-- 带头像的消息 -->
      <div class="flex items-start gap-2">
        <img src="https://picsum.photos/50/50" class="rounded-full w-10 h-10 mt-5 shadow-sm">
        <div class="relative max-w-[70%]">
          <div class="mb-1 text-xs text-gray-500">张三 12:40</div>
          <div class="relative px-4 py-2 bg-gray-100 text-gray-800 rounded-xl rounded-bl-none">
            这是一条带头像的消息
            <svg class="absolute left-0 bottom-0 -translate-x-[6px] text-gray-100" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
            </svg>
          </div>
        </div>
      </div>

      <!-- 带头像的右侧消息 -->
      <div class="flex justify-end gap-2">
        <div class="relative max-w-[70%]">
          <div class="mb-1 text-xs text-gray-500 text-right">我 12:45</div>
          <div class="relative px-4 py-2 bg-primary text-white rounded-xl rounded-br-none">
            这是一条带头像的右侧消息
            <svg class="absolute right-0 bottom-0 translate-x-[6px] rotate-90 text-blue-800" width="8" height="8" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
            </svg>
          </div>
        </div>
        <img src="https://picsum.photos/50/50" class="rounded-full w-10 h-10 mt-5 shadow-sm">
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
