<template>
  <div class="flex flex-wrap items-center gap-4">
    <!-- #region snippet -->
    <!-- 基础按钮 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-gray-300 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-gray-600 transition disabled:!cursor-not-allowed
     disabled:opacity-60 dark:text-white hover:[&:not(:disabled)]:border-transparent hover:[&:not(:disabled)]:bg-gray-200 active:[&:not(:disabled)]:scale-95 dark:[&:not(:disabled)]:hover:bg-white/5">
      默认按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-primary bg-transparent px-4 py-2 text-[14px] leading-[14px] text-primary transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95">
      主要按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-green-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-green-500 transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-green-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95">
      成功按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-yellow-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-yellow-500
    transition disabled:opacity-60 hover:[&:not(:disabled)]:bg-yellow-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95">
      警告按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-red-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-red-500 transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-red-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95">
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- plain按钮 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-transparent bg-gray-200 px-4 py-2 text-[14px] leading-[14px] transition disabled:!cursor-not-allowed disabled:opacity-60
    dark:border-transparent dark:bg-[#ffffff0d] hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95">
      默认按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-primary bg-primary px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
      主要按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-green-500 bg-green-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
      成功按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-yellow-500 bg-yellow-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
      警告按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-red-500 bg-red-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95">
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- 禁用状态 -->
    <!-- 上面所有基础按钮定义中已包含禁用样式，设置disabled属性即可显示禁用样式 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-gray-300 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-gray-600 transition disabled:!cursor-not-allowed
     disabled:opacity-60 dark:text-white hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:text-primary active:[&:not(:disabled)]:scale-95"
      disabled>
      默认按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-primary bg-transparent px-4 py-2 text-[14px] leading-[14px] text-primary transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95"
      disabled>
      主要按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-green-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-green-500 transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-green-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95"
      disabled>
      成功按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-yellow-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-yellow-500 transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-yellow-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95"
      disabled>
      警告按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-red-500 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-red-500 transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:bg-red-500 hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95"
      disabled>
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- plain禁用状态 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-transparent bg-gray-200 px-4 py-2 text-[14px] leading-[14px] transition disabled:!cursor-not-allowed disabled:opacity-60
    dark:border-transparent dark:bg-[#ffffff0d] hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:text-white active:[&:not(:disabled)]:scale-95"
      disabled>
      默认按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-primary bg-primary px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled>
      主要按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-green-500 bg-green-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled>
      成功按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-yellow-500 bg-yellow-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled>
      警告按钮
    </button>
    <button class="cursor-pointer rounded-[6px] border border-solid border-red-500 bg-red-500 px-4 py-2 text-[14px] leading-[14px] text-white transition
    disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled>
      危险按钮
    </button>

    <hr class="!m-0 w-full">

    <!-- 图标按钮 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-gray-300 bg-transparent p-2 text-[14px] leading-[14px] text-gray-600 transition disabled:!cursor-not-allowed
     disabled:opacity-60 hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:text-primary active:[&:not(:disabled)]:scale-95">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
    </button>

    <!-- 文字图标按钮 -->
    <button class="flex cursor-pointer items-center justify-center gap-1 rounded-[6px] border border-solid border-gray-300 bg-transparent px-4 py-2 text-[14px] leading-[14px] text-gray-600 transition
     disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:text-primary active:[&:not(:disabled)]:scale-95">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" /></svg>
      带图标
    </button>

    <!-- 小尺寸 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-gray-300 bg-transparent px-2 py-1 text-[12px] leading-[12px] text-gray-600 transition
     disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:text-primary active:[&:not(:disabled)]:scale-95">
      小尺寸
    </button>

    <!-- 大尺寸 -->
    <button class="cursor-pointer rounded-[6px] border border-solid border-gray-300 bg-transparent px-5 py-3 text-[16px] leading-[16px] text-gray-600 transition
     disabled:!cursor-not-allowed disabled:opacity-60 hover:[&:not(:disabled)]:border-primary hover:[&:not(:disabled)]:text-primary active:[&:not(:disabled)]:scale-95">
      大尺寸
    </button>
    <!-- #endregion snippet -->
  </div>
</template>
