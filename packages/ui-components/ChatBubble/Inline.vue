<template>
  <div class="space-y-4">
    <!-- #region snippet -->
    <!-- 左侧消息 -->
    <div class="flex items-start gap-2">
      <div class="relative max-w-[70%]">
        <div class="mb-1 text-xs text-gray-500">
          用户名 12:30
        </div>
        <div class="relative rounded-xl rounded-bl-none bg-gray-100 px-4 py-2 text-gray-800">
          这是一条左侧消息
          <svg class="absolute bottom-0 left-0 translate-x-[-6px] text-gray-100" width="8" height="8"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 右侧消息 -->
    <div class="flex justify-end gap-2">
      <div class="relative max-w-[70%]">
        <div class="mb-1 text-right text-xs text-gray-500">
          我 12:35
        </div>
        <div class="relative rounded-xl rounded-br-none bg-primary px-4 py-2 text-white">
          这是一条右侧消息
          <svg class="absolute bottom-0 right-0 translate-x-[6px] rotate-90 text-blue-800" width="8" height="8"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 带头像的消息 -->
    <div class="flex items-start gap-2">
      <img src="https://picsum.photos/id/185/50/50" class="mt-5 size-10 rounded-full shadow-sm">
      <div class="relative max-w-[70%]">
        <div class="mb-1 text-xs text-gray-500">
          张三 12:40
        </div>
        <div class="relative rounded-xl rounded-bl-none bg-gray-100 px-4 py-2 text-gray-800">
          这是一条带头像的消息
          <svg class="absolute bottom-0 left-0 translate-x-[-6px] text-gray-100" width="8" height="8"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
          </svg>
        </div>
      </div>
    </div>

    <!-- 带头像的右侧消息 -->
    <div class="flex justify-end gap-2">
      <div class="relative max-w-[70%]">
        <div class="mb-1 text-right text-xs text-gray-500">
          我 12:45
        </div>
        <div class="relative rounded-xl rounded-br-none bg-primary px-4 py-2 text-white">
          这是一条带头像的右侧消息
          <svg class="absolute bottom-0 right-0 translate-x-[6px] rotate-90 text-blue-800" width="8" height="8"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M0 8 L8 8 L8 0 C8 4 4 8 0 8" />
          </svg>
        </div>
      </div>
      <img src="https://picsum.photos/id/185/50/50" class="mt-5 size-10 rounded-full shadow-sm">
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
