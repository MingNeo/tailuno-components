<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- 基础分页 -->
    <nav class="flex items-center gap-1">
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        Prev
      </button>
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        1
      </button>
      <button class="rounded-sm bg-gray-300 px-3 py-1 text-sm text-gray-900 dark:bg-blue-900/50 dark:text-blue-400">
        2
      </button>
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        3
      </button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        8
      </button>
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        9
      </button>
      <button class="rounded-sm bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:text-gray-400 dark:hover:bg-gray-700">
        Next
      </button>
    </nav>

    <!-- 圆形按钮分页 -->
    <nav class="flex items-center gap-1">
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        1
      </button>
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-300 text-sm text-gray-900 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        2
      </button>
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        3
      </button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        12
      </button>
      <button class="flex size-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>

    <!-- 基础分页 样式2 -->
    <nav class="flex items-center gap-1">
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        Prev
      </button>
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        1
      </button>
      <button class="rounded-sm border border-solid border-blue-500 bg-blue-50 px-3 py-1 text-sm text-blue-600 active:scale-95 dark:bg-blue-900/50 dark:text-blue-400">
        2
      </button>
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        3
      </button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        8
      </button>
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        9
      </button>
      <button class="rounded-sm border border-solid border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        Next
      </button>
    </nav>

    <!-- 圆形按钮分页 -->
    <nav class="flex items-center gap-1">
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        1
      </button>
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-blue-500 bg-blue-50 text-sm text-blue-600 active:scale-95 dark:bg-blue-900/50 dark:text-blue-400">
        2
      </button>
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        3
      </button>
      <span class="px-3 py-1 text-gray-700 dark:text-gray-400">...</span>
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        12
      </button>
      <button class="flex size-7 items-center justify-center rounded-full border border-solid border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>

    <!-- 简单分页 -->
    <nav class="flex items-center gap-4">
      <button class="flex items-center gap-0.5 rounded-sm bg-gray-100 p-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span class="text-sm text-gray-700 dark:text-gray-400">2</span>
      <button class="flex items-center gap-0.5 rounded-sm bg-gray-100 p-1 text-sm text-gray-700 hover:bg-gray-300 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
        <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <span class="text-sm text-gray-700 dark:text-gray-400">Total 10 Pages</span>
    </nav>
    <!-- #endregion snippet -->
  </div>
</template>
