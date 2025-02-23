<template>
  <div class="space-y-4">
    <!-- #region snippet -->
    <!-- 基础提示 -->
    <div class="flex items-center gap-4">
      <!-- start -->
      <div class="relative group">
        <button class="relative px-4 text-[14px] border border-[#ddd] border-solid rounded-[6px]">
          上方提示
        </button>
        <div
          class="z-[100] absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-gray-800 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个上方提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="relative group">
        <button class="px-4 text-[14px] border border-[#ddd] border-solid rounded-[6px]">
          下方提示
        </button>
        <div
          class="z-[100] absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:top-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-gray-800 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个下方提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="relative group">
        <button class="px-4 text-[14px] border border-[#ddd] border-solid rounded-[6px]">
          左侧提示
        </button>
        <div
          class="z-[100] absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:right-[-5px] after:top-[50%] after:translate-y-[-50%] after:w-[10px] after:h-[10px] after:bg-gray-800 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个左侧提示文字
        </div>
      </div>
      <!-- end -->

      <!-- start -->
      <div class="relative group">
        <button class="px-4 text-[14px] border border-[#ddd] border-solid rounded-[6px]">
          右侧提示
        </button>
        <div
          class="z-[100] absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm text-white bg-gray-800 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:left-[-5px] after:top-[50%] after:translate-y-[-50%] after:w-[10px] after:h-[10px] after:bg-gray-800 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个右侧提示文字
        </div>
      </div>
      <!-- end -->
    </div>

    <!-- 不同主题色 -->
    <div class="space-x-4">
      <div class="relative inline-block group">
        <button class="px-4 text-[14px] border border-primary text-primary rounded-[6px]">
          主要提示
        </button>
        <div
          class="z-[100] absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-primary rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-primary after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个提示文字
        </div>
      </div>

      <div class="relative inline-block group">
        <button class="px-4 text-[14px] border border-green-500 text-green-500 rounded-[6px]">
          成功提示
        </button>
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-green-500 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-green-500 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个提示文字
        </div>
      </div>

      <div class="relative inline-block group">
        <button class="px-4 text-[14px] border border-yellow-500 text-yellow-500 rounded-[6px]">
          警告提示
        </button>
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-yellow-500 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-yellow-500 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个提示文字
        </div>
      </div>

      <div class="relative inline-block group">
        <button class="px-4 text-[14px] border border-red-500 text-red-500 rounded-[6px]">
          危险提示
        </button>
        <div
          class="absolute bottom-full left-1/2 -translate-x-1/2 px-2 py-1 text-sm text-white bg-red-500 rounded-sm transition-all duration-200 invisible opacity-0 group-hover:visible group-hover:opacity-100 whitespace-nowrap
        after:content-[''] after:absolute after:bottom-[-5px] after:left-[50%] after:translate-x-[-50%] after:w-[10px] after:h-[10px] after:bg-red-500 after:rotate-[45deg] after:transition-[inherit] after:duration-[inherit] after:ease-[inherit]"
        >
          这是一个提示文字
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
