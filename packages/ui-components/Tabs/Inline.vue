<template>
  <div class="flex flex-col space-y-4 vp-raw">
    <!-- #region snippet -->
    <label>基础标签页</label>
    <!-- 基础标签页 -->
    <nav class="flex space-x-4">
      <button
        class="relative px-1 text-sm font-medium text-primary border-b-2 border-primary transition-colors before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-0.5 before:rounded-full before:bg-primary"
      >
        标签1
      </button>
      <button
        class="relative px-1 text-sm font-medium text-gray-500 border-b-2 border-transparent transition-colors hover:text-primary"
      >
        标签2
      </button>
      <button
        class="relative px-1 text-sm font-medium text-gray-500 border-b-2 border-transparent transition-colors hover:text-primary"
      >
        标签3
      </button>
    </nav>

    <label>带图标的标签页</label>
    <!-- 带图标的标签页 -->
    <nav class="flex space-x-4">
      <button class="flex items-center px-1 text-sm font-medium text-primary border-b-2 border-primary transition-colors hover:text-primary">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        首页
      </button>
      <button class="flex items-center px-1 text-sm font-medium text-gray-500 border-b-2 border-transparent transition-colors hover:border-gray-300 hover:text-primary">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        关于
      </button>
    </nav>

    <label>卡片式标签页</label>
    <!-- 卡片式标签页 -->
    <div class="bg-gray-100 p-1.5 rounded-xl shadow-inner">
      <nav class="flex space-x-1">
        <button class="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-white shadow-md text-gray-900 transition-all">
          标签1
        </button>
        <button class="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:text-primary hover:bg-gray-50 transition-all">
          标签2
        </button>
        <button class="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:text-primary hover:bg-gray-50 transition-all">
          标签3
        </button>
      </nav>
    </div>

    <label>plain标签页</label>
    <!-- plain标签页 -->
    <nav class="flex space-x-1">
      <button class="px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 transition-all hover:bg-gray-200">
        标签1
      </button>
      <button class="px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50">
        标签2
      </button>
      <button class="px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50">
        标签3
      </button>
    </nav>

    <label>垂直标签页</label>
    <!-- 垂直标签页 -->
    <div class="flex space-x-4">
      <nav class="flex flex-col space-y-1">
        <button class="px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-900 transition-all hover:bg-gray-200">
          标签1
        </button>
        <button class="px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50">
          标签2
        </button>
        <button class="px-4 py-2.5 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50">
          标签3
        </button>
      </nav>
      <div class="flex-1 p-4 border rounded-lg shadow">
        内容区域
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
