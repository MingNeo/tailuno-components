<template>
  <div class="flex items-start gap-4 flex-wrap">
    <!-- #region snippet -->
    <!-- 基础按钮 -->
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
    >
      默认按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
    >
      主要按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-green-500 border-green-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-green-500 active:[&:not(:disabled)]:scale-95"
    >
      成功按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-yellow-500 border-yellow-500
    disabled:opacity-60 rounded-[6px]ite hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-yellow-500 active:[&:not(:disabled)]:scale-95"
    >
      警告按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-red-500 border-red-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-red-500 active:[&:not(:disabled)]:scale-95"
    >
      危险按钮
    </button>

    <hr class="w-full !m-0">

    <!-- plain按钮 -->
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-transparent border-solid cursor-pointer transition bg-[#eee] dark:bg-[#ffffff0d] dark:border-transparent
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
    >
      默认按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-primary border-primary
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
    >
      主要按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-green-500 border-green-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
    >
      成功按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-yellow-500 border-yellow-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
    >
      警告按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-red-500 border-red-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
    >
      危险按钮
    </button>

    <hr class="w-full !m-0">

    <!-- 禁用状态 -->
    <!-- 上面所有基础按钮定义中已包含禁用样式，设置disabled属性即可显示禁用样式 -->
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      disabled
    >
      默认按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
      disabled
    >
      主要按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-green-500 border-green-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-green-500 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      成功按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-yellow-500 border-yellow-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-yellow-500 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      警告按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-red-500 border-red-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-red-500 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      危险按钮
    </button>

    <hr class="w-full !m-0">

    <!-- plain禁用状态 -->
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-transparent border-solid cursor-pointer transition bg-[#eee] dark:bg-[#ffffff0d] dark:border-transparent
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      disabled
    >
      默认按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-primary border-primary
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      主要按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-green-500 border-green-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      成功按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-yellow-500 border-yellow-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      警告按钮
    </button>
    <button
      class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition text-white bg-red-500 border-red-500
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:opacity-70 active:[&:not(:disabled)]:scale-95"
      disabled
    >
      危险按钮
    </button>

    <div class="flex items-center gap-2 mb-4">
      <!-- 圆角按钮：基础按钮添加 rounded-full 类名即可实现圆角按钮 -->
      <button
        class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-solid cursor-pointer transition bg-transparent text-primary border-primary
    disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:bg-primary active:[&:not(:disabled)]:scale-95"
      >
        主要按钮
      </button>

      <!-- 图标按钮 -->
      <button
        class="py-2 px-2 text-[14px] leading-[14px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
      </button>

      <!-- 图标 + 文字 按钮：基础按钮增加flex items-center justify-center gap-1 类名来同时使用 文字和图标 -->
      <button
        class="py-2 px-4 text-[14px] leading-[14px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600 flex items-center justify-center gap-1
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
        带图标
      </button>

      <!-- 小尺寸：修改py、 px、 text、 leading类名以设置不同按钮尺寸 -->
      <button
        class="py-1 px-2 text-[12px] leading-[12px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        小尺寸
      </button>

      <!-- 大尺寸：修改py、 px、 text、 leading类名以设置不同按钮尺寸 -->
      <button
        class="py-3 px-5 text-[16px] leading-[16px] rounded-[6px] border border-[#ddd] border-solid cursor-pointer transition bg-transparent text-gray-600
     disabled:opacity-60 disabled:!cursor-not-allowed hover:[&:not(:disabled)]:text-primary hover:[&:not(:disabled)]:border-primary active:[&:not(:disabled)]:scale-95"
      >
        大尺寸
      </button>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
