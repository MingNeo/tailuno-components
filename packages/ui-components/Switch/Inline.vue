<template>
  <div class="vp-raw flex flex-col space-y-4">
    <!-- #region snippet -->
    <label>基础开关</label>
    <input type="checkbox" class="relative h-7 w-[52px] cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out before:absolute before:left-1 before:top-1 before:size-5 before:rounded-full before:bg-white before:transition-all before:duration-200 before:content-[''] checked:bg-primary checked:before:translate-x-6 disabled:cursor-not-allowed disabled:bg-gray-200">

    <label>小型开关</label>
    <input type="checkbox" class="relative h-6 w-11 cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out before:absolute before:left-1 before:top-1 before:size-4 before:rounded-full before:bg-white before:transition-all before:duration-200 before:content-[''] checked:bg-primary checked:before:translate-x-5 disabled:cursor-not-allowed disabled:bg-gray-200">

    <label>大型开关</label>
    <input type="checkbox" class="relative h-8 w-14 cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out before:absolute before:left-1 before:top-1 before:size-6 before:rounded-full before:bg-white before:transition-all before:duration-200 before:content-[''] checked:bg-primary checked:before:translate-x-6 disabled:cursor-not-allowed disabled:bg-gray-200">

    <label>禁用状态 <span class="text-sm text-gray-500">即默认状态增加disabled属性</span></label>
    <input type="checkbox" disabled class="relative h-7 w-[52px] cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out before:absolute before:left-1 before:top-1 before:size-5 before:rounded-full before:bg-white before:transition-all before:duration-200 before:content-[''] checked:bg-primary checked:before:translate-x-6 disabled:cursor-not-allowed disabled:bg-gray-200">

    <label>带文字</label>
    <label class="flex items-center gap-3" for="switch">
      <input type="checkbox" class="relative h-7 w-[52px] cursor-pointer appearance-none rounded-full bg-gray-300 transition-colors duration-200 ease-in-out before:absolute before:left-1 before:top-1 before:size-5 before:rounded-full before:bg-white before:transition-all before:duration-200 before:content-[''] checked:bg-primary checked:before:translate-x-6 disabled:cursor-not-allowed disabled:bg-gray-200">
      <span class="text-sm font-medium">开启状态</span>
    </label>
    <!-- #endregion snippet -->
  </div>
</template>
