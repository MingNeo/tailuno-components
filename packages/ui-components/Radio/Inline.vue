<template>
  <div class="flex flex-col items-start gap-4">
    <!-- #region snippet -->
    <!-- 直接使用 -->
    <input type="radio" name="test" value="1" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
    <!-- 带文字 -->
    <label class="space-x-2">
      <input type="radio" name="test" value="2" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
      <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
    </label>
    <!-- 禁用状态 -->
    <label class="cursor-not-allowed items-center space-x-2 opacity-50">
      <input disabled type="radio" name="test" value="3" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
      <span class="text-gray-700 dark:text-gray-300">Disabled Radio</span>
    </label>

    <!-- Radio 组 -->
    <div class="inline-flex space-x-2">
      <label class="space-x-2">
        <input type="radio" name="test" value="4" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
      <label class="space-x-2">
        <input type="radio" name="test" value="5" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
      <label class="space-x-2">
        <input type="radio" name="test" value="6" class="my-0 size-3 appearance-none rounded-full border-gray-300 bg-white text-blue-600 ring-1 ring-primary ring-offset-2 checked:bg-primary disabled:ring-gray-300 dark:border-gray-600 dark:bg-gray-700">
        <span class="text-gray-700 dark:text-gray-300">Default Radio</span>
      </label>
    </div>

    <!-- Radio按钮组 -->
    <div class="inline-flex">
      <label class="group cursor-pointer items-center border border-solid border-gray-300 bg-white px-3 py-1.5 first:rounded-l-md last:rounded-r-md has-[:checked]:z-[2] has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:!text-white [&:not(:first-child)]:-ml-px">
        <input type="radio" name="test" value="4" class="sr-only">
        <span>Radio1</span>
      </label>
      <label class="group cursor-pointer items-center border border-solid border-gray-300 bg-white px-3 py-1.5 first:rounded-l-md last:rounded-r-md has-[:checked]:z-[2] has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:!text-white [&:not(:first-child)]:-ml-px">
        <input type="radio" name="test" value="5" class="sr-only">
        <span>Radio2</span>
      </label>
      <label class="group cursor-pointer items-center border border-solid border-gray-300 bg-white px-3 py-1.5 first:rounded-l-md last:rounded-r-md has-[:checked]:z-[2] has-[:checked]:border-transparent has-[:checked]:bg-primary has-[:checked]:!text-white [&:not(:first-child)]:-ml-px">
        <input type="radio" name="test" value="6" class="sr-only">
        <span>Radio3</span>
      </label>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
