<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- 直接使用 -->
    <input type="radio" name="test" value="1" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
    <!-- 带文字 -->
    <label class="space-x-2">
      <input type="radio" name="test" value="2" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
      <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
    </label>
    <!-- 禁用状态 -->
    <label class="items-center opacity-50 cursor-not-allowed space-x-2">
      <input disabled type="radio" name="test" value="3" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
      <span class="text-gray-700 dark:text-gray-300">Disabled Radio</span>
    </label>

    <!-- Radio 组 -->
    <div class="inline-flex space-x-2">
      <label class="space-x-2">
        <input type="radio" name="test" value="4" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
      <label class="space-x-2">
        <input type="radio" name="test" value="5" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
      <label class="space-x-2">
        <input type="radio" name="test" value="6" class="appearance-none w-3 h-3 my-0 rounded-full ring-1 ring-offset-2 ring-primary disabled:ring-gray-300 text-blue-600 bg-white border-gray-300 checked:bg-primary dark:bg-gray-700 dark:border-gray-600">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
    </div>

    <!-- Radio按钮组 -->
    <div class="inline-flex">
      <label class="group items-center px-3 py-1.5 bg-white border border-solid border-gray-300 first:rounded-l-md last:rounded-r-md [&:not(:first-child)]:ml-[-1px] cursor-pointer has-[:checked]:bg-primary has-[:checked]:!text-white has-[:checked]:border-transparent has-[:checked]:z-[2]">
        <input type="radio" name="test" value="4" class="sr-only">
        <span>Radio1</span>
      </label>
      <label class="group items-center px-3 py-1.5 bg-white border border-solid border-gray-300 first:rounded-l-md last:rounded-r-md [&:not(:first-child)]:ml-[-1px] cursor-pointer has-[:checked]:bg-primary has-[:checked]:!text-white has-[:checked]:border-transparent has-[:checked]:z-[2]">
        <input type="radio" name="test" value="5" class="sr-only">
        <span>Radio2</span>
      </label>
      <label class="group items-center px-3 py-1.5 bg-white border border-solid border-gray-300 first:rounded-l-md last:rounded-r-md [&:not(:first-child)]:ml-[-1px] cursor-pointer has-[:checked]:bg-primary has-[:checked]:!text-white has-[:checked]:border-transparent has-[:checked]:z-[2]">
        <input type="radio" name="test" value="6" class="sr-only">
        <span>Radio3</span>
      </label>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
