<template>
  <div class="space-y-4 bg-gray-100 p-4">
    <!-- #region snippet -->
    <div class="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
      <div class="flex flex-col gap-1">
        <h3 class="font-bold">
          你喜欢什么宠物？
        </h3>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-300">说明：请选择你喜欢的宠物</span>
      </div>
      <label class="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-2">
        <input type="checkbox"
          class="relative size-4 appearance-none rounded-sm border border-solid border-gray-300 bg-white checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
      checked:before:top-0 checked:before:block checked:before:h-3 checked:before:w-1.5 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
      checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] focus:outline-none">
        <span class="flex-1 font-normal text-gray-700 dark:text-gray-300">小猫</span>
      </label>
      <label class="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-2">
        <input type="checkbox"
          class="relative size-4 appearance-none rounded-sm border border-solid border-gray-300 bg-white checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
      checked:before:top-0 checked:before:block checked:before:h-3 checked:before:w-1.5 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
      checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] focus:outline-none">
        <span class="flex-1 font-normal text-gray-700 dark:text-gray-300">小狗</span>
      </label>
      <button class="w-full cursor-pointer rounded-[6px] border border-solid border-primary bg-primary px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
        投票
      </button>
    </div>

    <div class="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
      <div class="flex flex-col gap-1">
        <h3 class="font-bold">
          你喜欢什么宠物？
        </h3>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-300">说明：请选择你喜欢的宠物</span>
      </div>
      <label class="flex flex-row-reverse items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-2">
        <input type="checkbox"
          class="relative size-4 appearance-none rounded-sm border border-solid border-gray-300 bg-white checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
      checked:before:top-0 checked:before:block checked:before:h-3 checked:before:w-1.5 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
      checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] focus:outline-none">
        <span class="flex-1 font-normal text-gray-700 dark:text-gray-300">小猫</span>
      </label>
      <label class="flex flex-row-reverse items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-2">
        <input type="checkbox"
          class="relative size-4 appearance-none rounded-sm border border-solid border-gray-300 bg-white checked:border-transparent checked:bg-primary checked:before:absolute checked:before:left-[5px]
      checked:before:top-0 checked:before:block checked:before:h-3 checked:before:w-1.5 checked:before:rotate-45 checked:before:border-0 checked:before:border-b-2
      checked:before:border-r-2 checked:before:border-solid checked:before:border-white checked:before:content-[''] focus:outline-none">
        <span class="flex-1 font-normal text-gray-700 dark:text-gray-300">小狗</span>
      </label>
      <button class="w-full cursor-pointer rounded-[6px] border border-solid border-primary bg-primary px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
        投票
      </button>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
