<template>
  <div class="space-x-4">
    <!-- #region snippet -->
    <!-- 基础按钮组 -->
    <div class="inline-flex">
      <button
        class="py-2 px-4 text-[14px] leading-[14px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600 rounded-l-[6px]
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:z-[2] hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        左按钮
      </button>
      <button
        class="mx-[-1px] py-2 px-4 text-[14px] leading-[14px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:z-[2] hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        中按钮
      </button>
      <button
        class="py-2 px-4 text-[14px] leading-[14px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
        rounded-r-[6px]
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:z-[2] hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        右按钮
      </button>
    </div>

    <!-- 主要按钮组 -->
    <div class="inline-flex">
      <button
        class="py-2 px-4 text-[14px] leading-[14px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
        rounded-l-[6px] border-r-0
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
      >
        左按钮
      </button>
      <button
        class="py-2 px-4 text-[14px] leading-[14px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
        border-r-0
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
      >
        中按钮
      </button>
      <button
        class="py-2 px-4 text-[14px] leading-[14px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
        rounded-r-[6px]
        disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
      >
        右按钮
      </button>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
