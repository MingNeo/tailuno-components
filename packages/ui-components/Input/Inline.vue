<template>
  <div class="flex flex-col space-y-4 vp-raw">
    <!-- #region snippet -->
    <!-- 基础输入框 -->
    <div class="space-x-4">
      <input
        type="text"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="基础输入框"
      >

      <input
        type="text"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none [&:not(:disabled)]:bg-white disabled:bg-gray-100 cursor-not-allowed"
        placeholder="禁用状态"
        disabled
      >

      <input
        type="text"
        class="w-[200px] px-3 py-2 border border-solid border-red-500 rounded-md outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="错误状态"
      >
    </div>

    <!-- 不同尺寸 -->
    <div class="space-x-4">
      <input
        type="text"
        class="w-[200px] px-2 py-1 text-sm border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="小尺寸"
      >

      <input
        type="text"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="默认尺寸"
      >

      <input
        type="text"
        class="w-[200px] px-4 py-3 text-lg border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="大尺寸"
      >
    </div>

    <!-- 不同类型 -->
    <div class="space-x-4">
      <input
        type="password"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="密码输入框"
      >

      <input
        type="number"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="数字输入框"
      >

      <input
        type="search"
        class="w-[200px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] [&:not(:disabled)]:bg-white disabled:bg-gray-100"
        placeholder="搜索输入框"
      >
    </div>

    <div class="flex flex-col space-y-6">
      <!-- 带图标的输入框 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">带图标的输入框</label>
        <div class="space-y-4">
          <!-- 前置图标 -->
          <div class="flex items-center w-[300px] border border-solid border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#1f293733]">
            <svg class="h-5 w-5 ml-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              class="flex-1 px-3 py-2 min-w-0 outline-none rounded-r-md"
              placeholder="请输入"
            >
          </div>
          <!-- 前置图标end -->

          <!-- 前置图标 -->
          <div class="flex items-center w-[300px] border border-solid border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#1f293733]">
            <svg class="h-5 w-5 ml-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <input
              type="text"
              class="flex-1 px-3 py-2 min-w-0 outline-none rounded-r-md"
              placeholder="请输入"
            >
          </div>
          <!-- 前置图标end -->

          <!-- 输入内容后显示清除按钮 -->
          <div class="group flex w-[300px] border border-solid border-gray-300 rounded-md focus-within:ring-1 focus-within:ring-[#1f293733]">
            <input
              type="text"
              class="flex-1 px-3 py-2 min-w-0 outline-none rounded-l-md"
              placeholder="请输入"
            >
            <button class="flex items-center px-3 [&:not(:disabled)]:group-hover:text-gray-600 text-gray-400">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- 输入内容后显示清除按钮end -->
        </div>
      </div>

      <!-- 带前缀/后缀的输入框 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">带前缀/后缀的输入框</label>
        <div class="space-y-4">
          <!-- 前缀 -->
          <div class="flex w-[260px] border border-solid border-gray-300 rounded-md outline-none focus-within:ring-1 focus-within:ring-[#1f293733]">
            <span class="inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-500">
              http://
            </span>
            <input
              type="text"
              class="flex-1 px-3 py-2 min-w-0"
              placeholder="请输入网址"
            >
          </div>

          <!-- 后缀 -->
          <div class="flex w-[260px] border border-solid border-gray-300 rounded-md outline-none focus-within:ring-1 focus-within:ring-[#1f293733]">
            <input
              type="text"
              class="flex-1 px-3 py-2 min-w-0"
              placeholder="请输入金额"
            >
            <span class="inline-flex items-center px-3 rounded-r-md bg-gray-50 text-gray-500">
              ¥
            </span>
          </div>
        </div>
      </div>

      <!-- 组合输入框 -->
      <div class="space-y-2">
        <label class="block text-sm font-medium text-gray-700">组合输入框</label>
        <div class="flex space-x-2">
          <input
            type="text"
            class="w-[140px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733]"
            placeholder="请输入"
          >
          <span class="inline-flex items-center text-gray-500">-</span>
          <input
            type="text"
            class="w-[140px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733]"
            placeholder="请输入"
          >
        </div>
      </div>

      <label class="block text-sm font-medium text-gray-700">label效果</label>
      <!-- label效果 -->
      <div class="relative mb-6">
        <input
          id="exampleLabelInput"
          type="text"
          class="peer block w-[260px] px-3 py-2 border border-solid border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1f293733] dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary placeholder:opacity-0"
          placeholder="Email address"
        >
        <label
          for="exampleLabelInput"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[5px] leading-[2.15] text-[#999] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:bg-white peer-active:-translate-y-[1.15rem] peer-active:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
        >Email address
        </label>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
