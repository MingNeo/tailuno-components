<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- 基础分页 -->
    <nav class="flex items-center gap-1">
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">Prev</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">1</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-900 bg-gray-300 dark:bg-blue-900/50 dark:text-blue-400">2</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">3</button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">8</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">9</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700">Next</button>
    </nav>

    <!-- 圆形按钮分页 -->
    <nav class="flex items-center gap-1">
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-gray-100 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-gray-100 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">1</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-900 bg-gray-300 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">2</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-gray-100 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">3</button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-gray-100 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">12</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-gray-100 rounded-full active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>

   <!-- 基础分页 样式2 -->
    <nav class="flex items-center gap-1">
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Prev</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">1</button>
      <button class="px-3 py-1 text-sm rounded-sm text-blue-600 bg-blue-50 border border-solid border-blue-500 active:scale-95 dark:bg-blue-900/50 dark:text-blue-400">2</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">3</button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">8</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">9</button>
      <button class="px-3 py-1 text-sm rounded-sm text-gray-700 bg-white border border-solid border-gray-300 active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">Next</button>
    </nav>

    <!-- 圆形按钮分页 -->
    <nav class="flex items-center gap-1">
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-white border border-solid border-gray-300 rounded-full active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-white border border-solid border-gray-300 rounded-full active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">1</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-blue-600 bg-blue-50 border border-solid border-blue-500 rounded-full active:scale-95 dark:bg-blue-900/50 dark:text-blue-400">2</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-white border border-solid border-gray-300 rounded-full active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">3</button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-white border border-solid border-gray-300 rounded-full active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">12</button>
      <button class="flex items-center justify-center w-7 h-7 text-sm text-gray-700 bg-white border border-solid border-gray-300 rounded-full active:scale-95 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>

    <!-- 简单分页 -->
    <nav class="flex items-center gap-4">
      <button class="flex items-center gap-0.5 px-1 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="text-sm text-gray-700 dark:text-gray-400">2</span>
      <button class="flex items-center gap-0.5 px-1 py-1 text-sm rounded-sm text-gray-700 bg-gray-100 active:scale-95 hover:bg-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <span class="text-sm text-gray-700 dark:text-gray-400">Total 10 Pages</span>
    </nav>
    <!-- #endregion snippet -->
  </div>
</template>
