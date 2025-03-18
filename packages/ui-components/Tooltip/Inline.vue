<template>
  <div class="flex flex-wrap gap-4">
    <!-- #region snippet -->
    <!-- 基础提示 -->
    <div class="group relative">
      <button class="text-[14px]">
        Top
      </button>
      <div class="invisible absolute bottom-full left-1/2 z-[100] mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:bottom-[-5px]
        after:left-1/2 after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-gray-800 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Top tooltip
      </div>
    </div>

    <div class="group relative">
      <button class="text-[14px]">
        Bottom
      </button>
      <div class="invisible absolute left-1/2 top-full z-[100] mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:left-1/2
        after:top-[-5px] after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-gray-800 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Bottom tooltip
      </div>
    </div>

    <div class="group relative">
      <button class="text-[14px]">
        Left
      </button>
      <div class="invisible absolute right-full top-1/2 z-[100] mr-2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:right-[-5px]
        after:top-1/2 after:size-[10px] after:-translate-y-1/2 after:rotate-45 after:bg-gray-800 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Left tooltip
      </div>
    </div>

    <div class="group relative">
      <button class="text-[14px]">
        Right
      </button>
      <div class="invisible absolute left-full top-1/2 z-[100] ml-2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:left-[-5px]
        after:top-1/2 after:size-[10px] after:-translate-y-1/2 after:rotate-45 after:bg-gray-800 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Right tooltip
      </div>
    </div>

    <!-- 不同主题色 -->

    <div class="group relative inline-block">
      <button class="text-[14px] text-primary">
        Primary
      </button>
      <div class="invisible absolute bottom-full left-1/2 z-[100] mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-primary px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:bottom-[-5px]
        after:left-1/2 after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-primary after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Primary tooltip
      </div>
    </div>

    <div class="group relative inline-block">
      <button class="text-[14px] text-green-500">
        Success
      </button>
      <div class="invisible absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-green-500 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:bottom-[-5px]
        after:left-1/2 after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-green-500 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Success tooltip
      </div>
    </div>

    <div class="group relative inline-block">
      <button class="text-[14px] text-yellow-500">
        Warning
      </button>
      <div class="invisible absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-yellow-500 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:bottom-[-5px]
        after:left-1/2 after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-yellow-500 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Warning tooltip
      </div>
    </div>

    <div class="group relative inline-block">
      <button class="text-[14px] text-red-500">
        Danger
      </button>
      <div class="invisible absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm bg-red-500 px-2 py-1 text-sm text-white opacity-0 transition-all duration-200 after:absolute after:bottom-[-5px]
        after:left-1/2 after:size-[10px] after:-translate-x-1/2 after:rotate-45 after:bg-red-500 after:transition-[inherit] after:duration-[inherit] after:ease-[inherit] after:content-[''] group-hover:visible group-hover:opacity-100">
        Danger tooltip
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
