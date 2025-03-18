<template>
  <div class="flex flex-col gap-4">
    <p>
      基础进度条
    </p>
    <!-- 基础进度条 -->
    <div class="h-2.5 w-full rounded-full bg-gray-200">
      <div class="h-2.5 rounded-full bg-blue-600 transition" :style="{ width: '45%' }" />
    </div>

    <!-- 带数字进度条 -->
    <div class="h-4 w-full rounded-full bg-gray-200">
      <div class="h-4 rounded-full bg-blue-600 px-1 text-center text-[10px] leading-4 text-white transition" :style="{ width: '45%' }">
        45%
      </div>
    </div>

    <p>
      带标签进度条
    </p>
    <!-- 带标签进度条 -->
    <div>
      <div class="mb-1 flex justify-between">
        <span class="text-sm font-medium text-blue-700">进度</span>
        <span class="text-sm font-medium text-blue-700">45%</span>
      </div>
      <div class="h-2.5 w-full rounded-full bg-gray-200">
        <div class="h-2.5 rounded-full bg-blue-600 transition" :style="{ width: '45%' }" />
      </div>
    </div>

    <p>
      带步骤进度条
    </p>
    <!-- 带步骤进度条 -->
    <div class="relative">
      <div class="mb-2 flex justify-between text-xs font-medium">
        <div class="w-1/3">
          申请
        </div>
        <div class="w-1/3 text-center">
          审批
        </div>
        <div class="w-1/3 text-right">
          完成
        </div>
      </div>
      <div class="mb-6 h-2.5 w-full rounded-full bg-gray-200">
        <div class="h-2.5 rounded-full bg-blue-600 transition" :style="{ width: '50%' }" />
      </div>
    </div>
  </div>
</template>
