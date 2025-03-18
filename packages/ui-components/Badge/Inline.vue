<template>
  <div class="flex flex-wrap gap-4">
    <!-- 基础徽章 -->
    <span class="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-800">
      默认徽章
    </span>

    <!-- 带边框徽章 -->
    <span class="inline-flex items-center rounded-md border border-solid border-gray-200 px-1.5 py-0.5 text-xs font-medium">
      边框徽章
    </span>

    <span class="inline-flex items-center gap-1 rounded-md bg-green-500 px-1.5 py-0.5 text-xs font-medium text-white">
      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
      图标徽章
    </span>

    <!-- 带图片徽章 -->
    <span class="inline-flex items-center gap-1 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-800">
      <img class="size-3 rounded-md" src="https://picsum.photos/id/185/20/20">
      图片徽章
    </span>

    <!-- 可移除徽章 -->
    <span class="inline-flex items-center gap-1 rounded-md bg-gray-100 py-0.5 pl-1.5 pr-1 text-xs font-medium text-gray-800">
      可移除
      <button type="button" class="ml-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-md hover:bg-[#0000000d] focus:bg-[#0000000d] focus:outline-none">
        <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
      </button>
    </span>

    <hr class="w-full">

    <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium">
      <span class="size-2 rounded-full bg-gray-400" />
      Normal
    </span>

    <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium">
      <span class="size-2 rounded-full bg-blue-400" />
      Processing
    </span>

    <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium">
      <span class="size-2 rounded-full bg-green-400" />
      Success
    </span>

    <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium">
      <span class="size-2 rounded-full bg-orange-400" />
      Warning
    </span>

    <span class="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-medium">
      <span class="size-2 rounded-full bg-red-400" />
      Error
    </span>

    <hr class="w-full">

    <div class="relative">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-[2] size-4 rounded-full border-2 border-solid border-white bg-red-400" />
    </div>

    <div class="relative">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-[2] flex h-6 min-w-6 px-1.5 items-center justify-center rounded-full border-2 border-solid border-white bg-red-400 text-xs font-medium text-white" >
        8
      </span>
    </div>

    <div class="relative">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-[2] flex h-6 min-w-6 px-1.5 items-center justify-center rounded-full border-2 border-solid border-white bg-red-400 text-xs font-medium text-white" >
        99+
      </span>
    </div>

  </div>
</template>
