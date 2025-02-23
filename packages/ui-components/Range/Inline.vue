<template>
  <div class="flex flex-col gap-8 items-start">
    <!-- #region snippet -->
    <!-- 基础滑块 -->
    <input
      type="range"
      class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400"
    >

    <!-- 带标签的滑块 -->
    <div class="w-full space-y-2">
      <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      <input
        type="range"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400"
      >
    </div>

    <!-- 带图标的滑块 -->
    <div class="w-full flex items-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
      <input
        type="range"
        class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- 禁用滑块 -->
    <div class="w-full">
      <input type="range" class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400" disabled>
    </div>

    <!-- 最小值和最大值 -->
    <div class="w-full">
      <input type="range" class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400" min="1" max="5">
    </div>

    <!-- 指定步长 -->
    <div class="w-full">
      <input type="range" class="w-full h-2 rounded-lg appearance-none cursor-pointer disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-700 accent-primary dark:accent-blue-400" min="0" max="1" step="0.1">
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
