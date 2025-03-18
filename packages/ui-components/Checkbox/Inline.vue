<template>
  <div class="flex flex-col gap-4">
    <!-- #region snippet -->
    <!-- 基础复选框 -->
    <input type="checkbox"
      class="relative size-5 appearance-none rounded-sm border border-solid border-gray-300 checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
      checked:before:top-0 checked:before:block checked:before:h-3.5 checked:before:w-2 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
      checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] indeterminate:border-transparent indeterminate:bg-primary
      indeterminate:before:absolute indeterminate:before:left-[4px] indeterminate:before:top-[8px] indeterminate:before:block indeterminate:before:h-[2px]
      indeterminate:before:w-[10px] indeterminate:before:bg-white indeterminate:before:content-[''] focus:outline-none">

    <!-- 带文字基础复选框 -->
    <label class="flex items-center space-x-2">
      <input type="checkbox"
        class="relative size-5 appearance-none rounded-sm border border-solid border-gray-300 checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
        checked:before:top-0 checked:before:block checked:before:h-3.5 checked:before:w-2 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
        checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] indeterminate:border-transparent indeterminate:bg-primary
        indeterminate:before:absolute indeterminate:before:left-[4px] indeterminate:before:top-[8px] indeterminate:before:block indeterminate:before:h-[2px]
        indeterminate:before:w-[10px] indeterminate:before:bg-white indeterminate:before:content-[''] focus:outline-none">
      <span class="font-normal text-gray-700 dark:text-gray-300">
        Checkbox
      </span>
    </label>

    <!-- 设置indeterminate时即为半选状态复选框 -->
    <label class="flex items-center space-x-2">
      <input type="checkbox"
        indeterminate
        class="relative size-5 appearance-none rounded-sm border border-solid border-gray-300 checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
        checked:before:top-0 checked:before:block checked:before:h-3.5 checked:before:w-2 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
        checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] indeterminate:border-transparent indeterminate:bg-primary
        indeterminate:before:absolute indeterminate:before:left-[4px] indeterminate:before:top-[8px] indeterminate:before:block indeterminate:before:h-[2px]
        indeterminate:before:w-[10px] indeterminate:before:bg-white indeterminate:before:content-[''] focus:outline-none">
      <span class="font-normal text-gray-700 dark:text-gray-300">
        Indeterminate
      </span>
    </label>
    <!-- #endregion snippet -->
  </div>
</template>
