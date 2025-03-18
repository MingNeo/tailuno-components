<template>
  <div class="flex flex-col flex-wrap items-start gap-4">
    <!-- normal -->
    <input type="file" accept="*" class="appearance-none rounded-md border border-solid border-gray-300 text-[14px]
      [&::file-selector-button]:me-4 [&::file-selector-button]:border-none [&::file-selector-button]:bg-gray-100 [&::file-selector-button]:px-4 [&::file-selector-button]:py-2 [&::file-selector-button]:text-[14px] [&::file-selector-button]:text-gray-600
      [&::file-selector-button]:disabled:!cursor-not-allowed [&::file-selector-button]:disabled:opacity-60
      [&::file-selector-button]:dark:bg-gray-800 [&::file-selector-button]:dark:text-white
      [&::file-selector-button]:hover:[&:not(:disabled)]:border-primary [&::file-selector-button]:hover:[&:not(:disabled)]:text-primary
      [&::file-selector-button]:active:[&:not(:disabled)]:bg-gray-300">

    <!-- custom -->
    <label class="flex size-24 items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 has-[:active]:bg-gray-300">
      <input type="file" accept="*" class="sr-only">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
        <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
          <path d="M24.0605 10L24.0239 38" />
          <path d="M10 24L38 24" />
        </g>
      </svg>
    </label>
  </div>
</template>
