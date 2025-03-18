<template>
  <div class="vp-raw flex flex-col space-y-4">
    <!-- #region snippet -->
    <!-- 基础 -->
    <div class="group flex gap-0.5">
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-l-md bg-gray-100 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">-</span>
      <input type="text"
        class="size-7 bg-gray-100 text-center outline-none disabled:bg-gray-200 disabled:text-gray-300">
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-r-md bg-gray-100 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">+</span>
    </div>

    <!-- 禁用 -->
    <div class="group flex gap-0.5">
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-l-md bg-gray-100 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">-</span>
      <input type="text"
        class="size-7 bg-gray-100 text-center outline-none disabled:bg-gray-200 disabled:text-gray-300"
        disabled>
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-r-md bg-gray-100 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">+</span>
    </div>

    <div class="group flex gap-0.5">
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-full border border-solid border-gray-400 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">-</span>
      <input type="text"
        class="size-7 text-center outline-none disabled:bg-gray-200 disabled:text-gray-300">
      <span class="inline-flex size-7 cursor-pointer select-none items-center justify-center rounded-full border border-solid border-gray-400 text-gray-500 outline-none active:scale-95 group-has-[:disabled]:bg-gray-200 group-has-[:disabled]:text-gray-300">+</span>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
