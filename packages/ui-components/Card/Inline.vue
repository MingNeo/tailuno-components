<template>
  <div class="flex flex-wrap items-start gap-6 bg-gray-200 p-4">
    <!-- #region snippet -->
    <!-- 基础卡片结构 -->
    <div class="w-64 overflow-hidden rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
      <h3 class="text-lg font-semibold dark:text-white">
        基础卡片
      </h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        描述内容描述内容描述内容
      </p>
      <button class="mt-3 text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
        详情 →
      </button>
    </div>

    <!-- 悬浮遮罩卡片 - 基于基础结构 -->
    <div class="group relative w-64 rounded-lg bg-white p-4 shadow-md transition-all duration-500 hover:bg-black/70 hover:shadow-lg">
      <h3 class="text-lg font-semibold transition duration-500 group-hover:text-white dark:text-white">
        悬浮遮罩
      </h3>
      <p class="mt-2 text-sm transition duration-500 group-hover:text-gray-200 dark:text-gray-400">
        描述内容描述内容描述内容
      </p>
      <button class="mt-3 text-sm font-medium text-blue-500 transition duration-500 hover:text-blue-100 dark:text-blue-200 dark:hover:text-blue-300">
        详情 →
      </button>
    </div>

    <!-- 带图片的卡片 - 基于基础结构 -->
    <div class="w-64 overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
      <img src="https://picsum.photos/id/185/300/300" class="h-40 w-full object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold dark:text-white">
          带图片的基础卡片
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          描述内容描述内容描述内容
        </p>
        <button class="mt-3 text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          详情 →
        </button>
      </div>
    </div>

    <!-- 带图片的卡片，左右结构 -->
    <div class="flex w-[360px] overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
      <div class="h-full w-40">
        <img src="https://picsum.photos/id/185/300/300" class="size-full object-cover">
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold dark:text-white">
          带图片的基础卡片
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          描述内容描述内容描述内容
        </p>
        <button class="mt-3 text-sm font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          详情 →
        </button>
      </div>
    </div>

    <!-- 展开详情卡片 - 基于基础结构 -->
    <div class="group w-64 overflow-hidden rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <h3 class="text-lg font-semibold dark:text-white">
        展开详情
      </h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        悬浮展开更多内容
      </p>
      <div class="mt-3 overflow-hidden">
        <button class="text-sm font-medium text-indigo-500 dark:text-indigo-400">
          更多信息 ↓
        </button>
        <div class="max-h-0 transition-all duration-500 ease-in-out group-hover:max-h-40">
          <p class="border-t pt-2 text-sm text-gray-500 dark:text-gray-400">
            这里是展开后显示的更多详细信息内容。可以放置额外的描述、标签或其他元素。
          </p>
        </div>
      </div>
    </div>

    <!-- 绝对定位展开卡片 - 基于基础结构 -->
    <div class="group relative h-40 w-64">
      <div class="absolute left-0 top-0 w-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
        <h3 class="text-lg font-semibold dark:text-white">
          绝对定位展开详情卡片
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          绝对定位方式展开更多内容
        </p>
        <div class="mt-3 overflow-hidden">
          <button class="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            更多信息 ↓
          </button>
          <div class="max-h-0 transition-all duration-500 ease-in-out group-hover:max-h-40">
            <p class="border-t pt-2 text-sm text-gray-500 dark:text-gray-400">
              这里是展开后显示的更多详细信息内容。可以放置额外的描述、标签或其他元素。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 玻璃拟态卡片 - 基于基础结构 -->
    <div class="w-64 rounded-lg border border-solid border-white/20 bg-white/30 p-4 backdrop-blur-md">
      <h3 class="text-lg font-semibold text-white">
        玻璃拟态
      </h3>
      <p class="mt-2 text-sm text-white">
        模拟磨砂玻璃效果
      </p>
      <button class="mt-3 text-sm font-medium text-white hover:text-white/80">
        浏览 →
      </button>
    </div>

    <p class="w-full">
      特殊效果
    </p>

    <!-- 渐变外边框卡片 - 基于基础结构 -->
    <div class="relative w-64 rounded-lg p-px shadow-sm transition-shadow before:absolute
      before:inset-[2px] before:rounded-lg before:bg-gradient-to-r before:from-cyan-400
      before:via-blue-500 before:to-purple-500 before:transition-all before:duration-500
      before:content-[''] hover:shadow-lg hover:before:inset-[-1px] hover:before:rounded-[10px]">
      <div class="relative h-full rounded-lg bg-white p-4 dark:bg-gray-800">
        <h3 class="text-lg font-semibold dark:text-white">
          渐变外框
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          使用渐变色边框
        </p>
        <button class="mt-3 text-sm font-medium text-primary hover:text-primary/80">
          详情 →
        </button>
      </div>
    </div>

    <!-- 渐变内边框卡片 - 基于基础结构 -->
    <div class="group relative w-64 overflow-hidden rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        opacity-0 transition-all duration-500 group-hover:opacity-100" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
               -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
               mask-composite: exclude; -webkit-mask-composite: xor; padding: 4px;" />
      <div class="relative">
        <h3 class="text-lg font-semibold dark:text-white">
          渐变内边框
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          悬浮时展现流动的边框效果
        </p>
        <button class="mt-3 text-sm font-medium text-primary hover:text-primary/80">
          详情 →
        </button>
      </div>
    </div>

    <!-- 纸片堆叠卡片 -->
    <div class="relative w-64
          before:absolute before:inset-0 before:z-[1] before:-rotate-2 before:rounded-lg before:bg-white
          before:shadow-[0_0_15px_rgba(0,0,0,0.1)] before:transition-transform before:duration-300 before:content-[''] after:absolute after:inset-0
          after:z-0 after:rotate-2 after:rounded-lg after:bg-white
          after:shadow-[0_0_15px_rgba(0,0,0,0.1)] after:transition-transform after:duration-300 after:content-['']
          before:hover:rotate-0 after:hover:rotate-0">
      <div class="group relative z-[2] rounded-lg bg-white p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-gray-800">
        <h3 class="text-lg font-semibold dark:text-white">
          纸片堆叠
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          模拟纸片堆叠效果
        </p>
        <button class="mt-3 text-sm font-medium text-primary hover:text-primary/80">
          详情 →
        </button>
      </div>
    </div>

    <!-- 第二个纸片堆叠卡片优化 -->
    <div class="group relative w-64
          before:absolute before:inset-0 before:z-[2] before:translate-y-1 before:rounded-lg before:bg-white
          before:shadow-[0_0_15px_rgba(0,0,0,0.1)] before:transition-transform before:duration-300 before:content-[''] after:absolute after:inset-0
          after:z-[1] after:translate-y-2 after:rounded-lg after:bg-white
          after:shadow-[0_0_15px_rgba(0,0,0,0.1)] after:transition-transform after:duration-300 after:content-['']
          before:hover:translate-y-0 after:hover:translate-y-0">
      <div class="group relative z-[2] rounded-lg bg-white p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:bg-gray-800">
        <h3 class="text-lg font-semibold dark:text-white">
          纸片堆叠
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          模拟纸片堆叠效果
        </p>
        <button class="mt-3 text-sm font-medium text-primary hover:text-primary/80">
          详情 →
        </button>
      </div>
    </div>

    <!-- 3D翻转卡片 -->
    <div class="group h-40 w-64 [perspective:1000px]">
      <div class="relative size-full rounded-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0 rounded-lg bg-white shadow-lg">
          <div class="p-4">
            <h3 class="text-lg font-semibold dark:text-white">
              3D翻转效果
            </h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              悬浮时展现3D翻转动画效果
            </p>
          </div>
        </div>
        <div class="absolute inset-0 size-full rounded-lg bg-white px-4 py-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 class="text-lg font-bold">
            背面内容
          </h3>
          <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            这是卡片的背面内容，可以放置更多信息
          </p>
        </div>
      </div>
    </div>

    <!-- 3D上下翻转卡片 -->
    <div class="group h-40 w-64 [perspective:1000px]">
      <div class="relative size-full rounded-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400 to-red-500">
          <div class="p-4 text-white">
            <h3 class="text-lg font-semibold dark:text-white">
              3D上下翻转
            </h3>
            <p class="mt-2 text-sm">
              翻转效果
            </p>
          </div>
        </div>
        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500 to-orange-400
                    [backface-visibility:hidden] [transform:rotateX(180deg)]">
          <div class="p-4 text-white">
            <h3 class="text-lg font-bold">
              内容展开
            </h3>
            <p class="mt-4 text-sm">
              展示更多精彩内容
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 立体投影卡片 -->
    <div class="w-64 rounded-lg border-2 border-solid border-black bg-white p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-sm dark:bg-gray-800">
      <h3 class="text-lg font-semibold dark:text-white">
        复古立体
      </h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        带有复古风格的立体投影效果
      </p>
      <button class="mt-3 text-sm font-medium hover:text-gray-700">
        详情 →
      </button>
    </div>

    <!-- 磁贴效果卡片 -->
    <div class="group w-64 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 p-[2px]">
      <div class="h-full rounded-lg bg-white p-4 transition-transform duration-300 group-hover:translate-x-[3px]
                  group-hover:translate-y-[3px]">
        <h3 class="text-lg font-semibold dark:text-white">
          磁贴效果
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          模拟Windows磁贴效果
        </p>
        <button class="mt-3 text-sm font-medium text-violet-500 dark:text-violet-400">
          详情 →
        </button>
      </div>
    </div>

    <!-- 弹跳缩放卡片 -->
    <div class="w-64 rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 dark:bg-gray-800">
      <h3 class="text-lg font-semibold dark:text-white">
        弹跳效果
      </h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        悬浮时上浮并放大的动画效果
      </p>
      <button class="mt-3 font-medium text-yellow-500 hover:text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-300">
        更多 ↑
      </button>
    </div>

    <!-- 脉冲动画卡片 -->
    <div class="group relative w-64 rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div class="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 blur
                  duration-1000 group-hover:animate-pulse group-hover:opacity-100 group-hover:transition
                  group-hover:duration-200" />
      <div class="relative rounded-lg bg-white p-4">
        <h3 class="text-lg font-semibold dark:text-white">
          脉冲效果
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          边框呈现脉冲动画效果
        </p>
        <button class="mt-3 text-sm font-medium text-purple-600 dark:text-purple-400">
          详情 →
        </button>
      </div>
    </div>

    <!-- 全遮罩效果 -->
    <div class="group relative w-64 rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div class="pointer-events-none absolute -inset-0.5 rounded-lg bg-black
                  opacity-0 blur duration-1000 group-hover:fixed
                  group-hover:left-0 group-hover:top-0 group-hover:z-[9998] group-hover:h-screen group-hover:w-screen
                  group-hover:opacity-60 group-hover:transition-all" />
      <div class="relative rounded-lg bg-white p-4 group-hover:z-[9999]">
        <h3 class="text-lg font-semibold dark:text-white">
          全遮罩效果
        </h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          全遮罩效果
        </p>
        <button class="mt-3 text-sm font-medium text-purple-600 dark:text-purple-400">
          详情 →
        </button>
      </div>
    </div>

    <!-- 倾斜悬浮卡片 -->
    <div class="w-64 rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:rotate-2 hover:scale-105
                hover:shadow-xl dark:bg-gray-800">
      <h3 class="text-lg font-semibold dark:text-white">
        倾斜效果
      </h3>
      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
        悬浮时卡片轻微倾斜
      </p>
      <button class="mt-3 text-sm font-medium text-orange-500 dark:text-orange-400">
        探索 →
      </button>
    </div>

    <!-- 能量充能卡片 -->
    <div class="group relative w-64 overflow-hidden rounded-lg bg-gray-900 p-4 dark:bg-gray-800">
      <div class="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-blue-500 to-cyan-300
                  transition-transform duration-700 ease-in-out group-hover:scale-y-100" />
      <div class="absolute bottom-0 left-0 h-1 w-full bg-primary">
        <div class="h-full origin-left scale-x-0 bg-cyan-300 transition-transform duration-700 group-hover:scale-x-100" />
      </div>
      <div class="relative text-white">
        <h3 class="text-lg font-semibold dark:text-white">
          能量充能
        </h3>
        <p class="mt-2 text-sm text-gray-400 dark:text-gray-400">
          模拟能量充能动画效果
        </p>
        <button class="mt-3 text-sm font-medium text-blue-400 group-hover:text-white dark:text-blue-300">
          启动 →
        </button>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
