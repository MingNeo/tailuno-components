<template>
  <div class="flex flex-col gap-8">
    <!-- #region snippet -->
    <!-- 基础分割线 -->
    <div class="relative w-full flex items-center text-gray-500 dark:text-gray-400 text-sm before:content-[''] before:flex-1 before:h-px before:bg-gray-200 dark:before:bg-gray-700 after:content-[''] after:flex-1 after:h-px after:bg-gray-200 dark:after:bg-gray-700" />

    <!-- 带文字的分割线 -->
    <div class="relative w-full flex items-center text-gray-500 dark:text-gray-400 text-sm before:content-[''] before:flex-1 before:h-px before:bg-gray-200 dark:before:bg-gray-700 after:content-[''] after:flex-1 after:h-px after:bg-gray-200 dark:after:bg-gray-700">
      或
    </div>

    <!-- 带图标的分割线 -->
    <div class="relative w-full flex items-center text-gray-500 dark:text-gray-400 text-sm before:content-[''] before:flex-1 before:h-px before:bg-gray-200 dark:before:bg-gray-700 after:content-[''] after:flex-1 after:h-px after:bg-gray-200 dark:after:bg-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-4 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
      </svg>
    </div>

    <div class="flex w-full h-20">
      <div class="flex-1 bg-gray-200 dark:bg-gray-700" />
      <!-- 纵向带文字的分割线 -->
      <div class="relative flex flex-col items-center text-gray-500 dark:text-gray-400 text-sm before:content-[''] before:flex-1 before:w-px before:bg-gray-200 dark:before:bg-gray-700 after:content-[''] after:flex-1 after:w-px after:bg-gray-200 dark:after:bg-gray-700">
        或
      </div>
      <div class="flex-1 bg-gray-200 dark:bg-gray-700" />
    </div>

    <!-- #endregion snippet -->
  </div>
</template>
