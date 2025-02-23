<template>
  <div class="flex flex-wrap gap-4">
    <!-- 基础徽章 -->
    <span class="inline-flex items-center px-1.5 py-0.5 rounded-sm text-xs font-medium bg-gray-100 text-gray-800">
      默认徽章
    </span>

    <!-- 带边框徽章 -->
    <span class="inline-flex items-center px-1.5 py-0.5 rounded-sm text-xs font-medium border border-solid border-gray-200">
      边框徽章
    </span>

    <!-- 成功徽章 -->
    <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-xs font-medium bg-green-500 text-white">
      <span class="w-2 h-2 bg-green-700 rounded-full" />
      成功状态
    </span>

    <!-- 带图片徽章 -->
    <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-xs font-medium bg-gray-100 text-gray-800">
      <img class="w-3 h-3 rounded-sm" src="https://picsum.photos/20/20">
      图片徽章
    </span>

    <!-- 可移除徽章 -->
    <span class="inline-flex items-center gap-1 pl-1.5 pr-1 py-0.5 rounded-sm text-xs font-medium bg-indigo-100 text-indigo-800">
      可移除
      <button type="button" class="shrink-0 ml-0.5 h-4 w-4 rounded-sm inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
        <span class="sr-only">移除</span>
        <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
          <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
        </svg>
      </button>
    </span>
  </div>
</template>
