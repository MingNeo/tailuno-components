<template>
  <div class="flex flex-col gap-4">
    <!-- 基础提示 -->
    <div class="flex items-center max-w-4/5 min-w-[300px] rounded-md bg-blue-50 p-4 text-sm">
      <svg class="h-[18px] w-[18px] text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="none"
          d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z" />
        <path fill="currentColor"
          d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z" />
      </svg>
      <p class="ml-3 flex-1 font-medium text-blue-700">
        这是一条信息提示
      </p>
      <a href="#" class="mr-3 whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">详情</a>

      <button type="button" class="-mx-1.5 -my-1.5 inline-flex rounded-md p-1.5 text-gray-400 hover:bg-[#ffffff99] focus:outline-none">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- 成功提示 -->
    <div class="flex items-center max-w-4/5 min-w-[300px] rounded-md bg-green-50 p-4 text-sm">
      <svg class="h-[18px] w-[18px] text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="currentColor"
          d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z" />
        <path fill="none" d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585z" />
      </svg>
      <p class="ml-3 flex-1 text-sm font-medium text-green-800">
        操作成功
      </p>

      <button type="button" class="-mx-1.5 -my-1.5 inline-flex rounded-md p-1.5 text-gray-400 hover:bg-[#ffffff99] focus:outline-none">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- 警告提示 -->
    <div class="flex items-center max-w-4/5 min-w-[300px] rounded-md bg-yellow-50 p-4 text-sm">
      <svg class="h-[18px] w-[18px] text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="currentColor"
          d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m-1.1 6h2.2v11h-2.2zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25" />
      </svg>
      <p class="ml-3 flex-1 text-sm font-medium text-yellow-800">
        这是一条警告提示
      </p>

      <button type="button" class="-mx-1.5 -my-1.5 inline-flex rounded-md p-1.5 text-gray-400 hover:bg-[#ffffff99] focus:outline-none">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- 错误提示 -->
    <div class="flex items-center max-w-4/5 min-w-[300px] rounded-md bg-red-50 p-4 text-sm">
      <svg class="h-[18px] w-[18px] text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill="currentColor"
          d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z" />
      </svg>
      <p class="ml-3 flex-1 text-sm font-medium text-red-800">
        这是一条错误提示
      </p>

      <button type="button" class="-mx-1.5 -my-1.5 inline-flex rounded-md p-1.5 text-gray-400 hover:bg-[#ffffff99] focus:outline-none">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>
