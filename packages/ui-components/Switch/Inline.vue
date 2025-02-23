<template>
  <div class="flex flex-col space-y-4 vp-raw">
    <!-- #region snippet -->
    <label>基础开关</label>
    <input type="checkbox" class="appearance-none w-[52px] h-7 rounded-full bg-gray-300 cursor-pointer checked:bg-primary relative transition-colors ease-in-out duration-200 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:top-1 before:left-1 before:bg-white before:transition-all before:duration-200 checked:before:translate-x-6">

    <label>小型开关</label>
    <input type="checkbox" class="appearance-none w-11 h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-primary relative transition-colors ease-in-out duration-200 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:top-1 before:left-1 before:bg-white before:transition-all before:duration-200 checked:before:translate-x-5">

    <label>大型开关</label>
    <input type="checkbox" class="appearance-none w-14 h-8 rounded-full bg-gray-300 cursor-pointer checked:bg-primary relative transition-colors ease-in-out duration-200 before:content-[''] before:absolute before:w-6 before:h-6 before:rounded-full before:top-1 before:left-1 before:bg-white before:transition-all before:duration-200 checked:before:translate-x-6">

    <label>禁用状态</label>
    <input type="checkbox" disabled class="appearance-none w-[52px] h-7 rounded-full bg-gray-200 cursor-not-allowed opacity-50 relative before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:top-1 before:left-1 before:bg-white">

    <label>带文字</label>
    <label for="switch">
      <input name="switch" type="checkbox" class="appearance-none w-[52px] h-7 rounded-full vertical-middle bg-gray-300 cursor-pointer checked:bg-primary relative transition-colors ease-in-out duration-200 before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:top-1 before:left-1 before:bg-white before:transition-all before:duration-200 checked:before:translate-x-6">
      开启状态
    </label>
    <!-- #endregion snippet -->
  </div>
</template>
