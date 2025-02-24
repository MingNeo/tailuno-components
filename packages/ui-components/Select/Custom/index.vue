<script setup>
if (!import.meta.env.SSR) {
  import('./index.js')
}
</script>

<template>
  <!-- #region snippet -->
  <div class="tailuno-select relative w-[200px] group" data-open="false">
    <button
      class="select-button w-full px-4 py-2 text-left text-gray-700 bg-white border border-solid border-gray-300 rounded-md shadow-sm flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
    >
      <span>请选择</span>
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-200 group-data-[open=true]:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      class="select-dropdown absolute z-[10] w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto dark:bg-gray-800 dark:border-gray-600 hidden group-data-[open=true]:block"
    >
      <div class="select-option option-item px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 [&[data-selected='true']]:bg-gray-100 [&[data-selected='true']]:dark:bg-blue-900/50 [&[data-selected='true']]:dark:text-blue-400">
        选项 1
      </div>
      <div class="select-option option-item px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 [&[data-selected='true']]:bg-gray-100 [&[data-selected='true']]:dark:bg-blue-900/50 [&[data-selected='true']]:dark:text-blue-400">
        选项 2
      </div>
      <div class="select-option option-item px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 [&[data-selected='true']]:bg-gray-100 [&[data-selected='true']]:dark:bg-blue-900/50 [&[data-selected='true']]:dark:text-blue-400">
        选项 3
      </div>
      <div class="select-option option-item px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700 [&[data-selected='true']]:bg-gray-100 [&[data-selected='true']]:dark:bg-blue-900/50 [&[data-selected='true']]:dark:text-blue-400">
        选项 4
      </div>
    </div>
  </div>
  <!-- #endregion snippet -->
</template>
