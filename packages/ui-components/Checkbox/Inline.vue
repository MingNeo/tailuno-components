<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础复选框 -->
    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        class="appearance-none h-5 w-5 border border-solid border-gray-300 rounded-sm checked:bg-primary checked:border-transparent focus:outline-none relative
        checked:before:content-[''] checked:before:block checked:before:absolute checked:before:left-[5px] checked:before:top-0 checked:before:w-2 checked:before:h-3.5
        checked:before:border-solid checked:before:border-0 checked:before:border-r-2 checked:before:border-b-2 checked:before:border-white checked:before:rotate-45
        indeterminate:bg-primary indeterminate:border-transparent indeterminate:before:content-[''] indeterminate:before:block indeterminate:before:absolute
        indeterminate:before:w-[10px] indeterminate:before:h-[2px] indeterminate:before:bg-white indeterminate:before:left-[4px] indeterminate:before:top-[8px]"
      >
      <span class="text-gray-700 dark:text-gray-300 font-normal">
        Checkbox
      </span>
    </label>

    <!-- 设置indeterminate时即为半选状态复选框 -->
    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        indeterminate
        class="appearance-none h-5 w-5 border border-solid border-gray-300 rounded-sm checked:bg-primary checked:border-transparent focus:outline-none relative
        checked:before:content-[''] checked:before:block checked:before:absolute checked:before:left-[5px] checked:before:top-0 checked:before:w-2 checked:before:h-3.5
        checked:before:border-solid checked:before:border-0 checked:before:border-r-2 checked:before:border-b-2 checked:before:border-white checked:before:rotate-45
        indeterminate:bg-primary indeterminate:border-transparent indeterminate:before:content-[''] indeterminate:before:block indeterminate:before:absolute
        indeterminate:before:w-[10px] indeterminate:before:h-[2px] indeterminate:before:bg-white indeterminate:before:left-[4px] indeterminate:before:top-[8px]"
      >
      <span class="text-gray-700 dark:text-gray-300 font-normal">
        Indeterminate
      </span>
    </label>
    <!-- #endregion snippet -->
  </div>
</template>
