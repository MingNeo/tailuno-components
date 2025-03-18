<template>
  <div class="flex flex-col gap-8">
    <!-- #region snippet -->
    <!-- 基础分割线 -->
    <div class="h-px w-full bg-gray-200 dark:bg-gray-700" />

    <!-- 带文字的分割线 -->
    <div class="flex w-full items-center text-sm text-gray-500 before:h-px before:flex-1 before:bg-gray-200 before:content-[''] after:h-px after:flex-1 after:bg-gray-200 after:content-[''] dark:text-gray-400 dark:before:bg-gray-700 dark:after:bg-gray-700">
      或
    </div>

    <!-- 带图标的分割线 -->
    <div class="flex w-full items-center text-sm text-gray-500 before:h-px before:flex-1 before:bg-gray-200 before:content-[''] after:h-px after:flex-1 after:bg-gray-200 after:content-[''] dark:text-gray-400 dark:before:bg-gray-700 dark:after:bg-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="mx-4 size-5 text-gray-400 dark:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
      </svg>
    </div>

    <div class="flex h-20 w-full">
      <div class="flex-1 bg-gray-200 dark:bg-gray-700" />
      <!-- 纵向带文字的分割线 -->
      <div class="flex flex-col items-center text-sm text-gray-500 before:w-px before:flex-1 before:bg-gray-200 before:content-[''] after:w-px after:flex-1 after:bg-gray-200 after:content-[''] dark:text-gray-400 dark:before:bg-gray-700 dark:after:bg-gray-700">
        或
      </div>
      <div class="flex-1 bg-gray-200 dark:bg-gray-700" />
    </div>

    <!-- #endregion snippet -->
  </div>
</template>
