<template>
  <div class="flex flex-col gap-4">
    <p>
      基础进度条
    </p>
    <!-- 基础进度条 -->
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div class="transition bg-blue-600 h-2.5 rounded-full" :style="{ width: '45%' }" />
    </div>

    <!-- 带数字进度条 -->
    <div class="w-full bg-gray-200 rounded-full h-4">
      <div class="transition bg-blue-600 h-4 rounded-full text-[10px] leading-4 text-white text-center px-1" :style="{ width: '45%' }">
        45%
      </div>
    </div>

    <p>
      带标签进度条
    </p>
    <!-- 带标签进度条 -->
    <div>
      <div class="flex justify-between mb-1">
        <span class="text-sm font-medium text-blue-700">进度</span>
        <span class="text-sm font-medium text-blue-700">45%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5">
        <div class="transition bg-blue-600 h-2.5 rounded-full" :style="{ width: '45%' }" />
      </div>
    </div>

    <p>
      带步骤进度条
    </p>
    <!-- 带步骤进度条 -->
    <div class="relative">
      <div class="flex mb-2 justify-between text-xs font-medium">
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
      <div class="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div class="transition bg-blue-600 h-1.5 rounded-full" :style="{ width: '50%' }" />
      </div>
    </div>
  </div>
</template>
