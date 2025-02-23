<template>
  <div class="flex flex-wrap items-start gap-6 bg-gray-300 p-4">
    <!-- #region snippet -->
    <!-- 基础卡片结构 -->
    <div
      class="w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <span class="px-2 py-1 text-xs bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300 rounded">标签</span>
      <h3 class="text-lg font-semibold mt-2 dark:text-white">
        基础卡片
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
        描述内容描述内容描述内容
      </p>
      <button
        class="text-sm mt-3 text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
        了解更多 →
      </button>
    </div>

    <!-- 悬浮遮罩卡片 - 基于基础结构 -->
    <div
      class="w-64 p-4 bg-white rounded-lg shadow-md group relative bg-black/0 transition-all duration-500 hover:shadow-lg hover:bg-black/70">
      <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">标签</span>
      <h3 class="text-lg font-semibold mt-2 group-hover:text-white dark:text-white transition duration-500">
        悬浮遮罩
      </h3>
      <p class="group-hover:text-gray-200 dark:text-gray-400 text-sm mt-2 transition duration-500">
        描述内容描述内容描述内容
      </p>
      <button
        class="text-sm mt-3 text-blue-500 dark:text-blue-200 font-medium hover:text-blue-100 dark:hover:text-blue-300 transition duration-500">
        了解更多 →
      </button>
    </div>

    <!-- 带图片的卡片 - 基于基础结构 -->
    <div class="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src="https://picsum.photos/300/300" class="w-full h-40 object-cover">
      <div class="p-4">
        <span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">标签</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          带图片的基础卡片
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          描述内容描述内容描述内容
        </p>
        <button
          class="text-sm mt-3 text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
          了解更多 →
        </button>
      </div>
    </div>

    <!-- 带图片的卡片，左右结构 -->
    <div
      class="flex w-[360px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div class="w-40 h-full">
        <img src="https://picsum.photos/300/300" class="w-full h-full object-cover">
      </div>
      <div class="p-4">
        <span class="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded">标签</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          带图片的基础卡片
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          描述内容描述内容描述内容
        </p>
        <button
          class="text-sm mt-3 text-blue-500 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
          了解更多 →
        </button>
      </div>
    </div>

    <!-- 展开详情卡片 - 基于基础结构 -->
    <div class="w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
      <span class="px-2 py-1 text-xs bg-indigo-100 text-indigo-600 rounded">展开</span>
      <h3 class="text-lg font-semibold mt-2 dark:text-white">
        展开详情
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
        悬浮展开更多内容
      </p>
      <div class="mt-3 overflow-hidden">
        <button class="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
          更多信息 ↓
        </button>
        <div class="max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
          <p class="text-sm text-gray-500 dark:text-gray-400 pt-2 border-t">
            这里是展开后显示的更多详细信息内容。可以放置额外的描述、标签或其他元素。
          </p>
        </div>
      </div>
    </div>

    <!-- 绝对定位展开卡片 - 基于基础结构 -->
    <div class="relative group w-64 h-40">
      <div class="p-4 absolute left-0 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
        <span class="px-2 py-1 text-xs bg-indigo-100 text-indigo-600 rounded">展开</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          绝对定位展开详情卡片
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          绝对定位方式展开更多内容
        </p>
        <div class="mt-3 overflow-hidden">
          <button class="text-sm text-indigo-500 dark:text-indigo-400 font-medium">
            更多信息 ↓
          </button>
          <div class="max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
            <p class="text-sm text-gray-500 dark:text-gray-400 pt-2 border-t">
              这里是展开后显示的更多详细信息内容。可以放置额外的描述、标签或其他元素。
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 玻璃拟态卡片 - 基于基础结构 -->
    <div class="w-64 p-4 backdrop-blur-md bg-white/30 rounded-lg border border-solid border-white/20">
      <span class="px-2 py-1 text-xs bg-white/20 text-white rounded">玻璃</span>
      <h3 class="text-white text-lg font-semibold mt-2">
        玻璃拟态
      </h3>
      <p class="text-white text-sm mt-2">
        模拟磨砂玻璃效果
      </p>
      <button class="text-sm text-white mt-3 font-medium hover:text-white/80">
        浏览 →
      </button>
    </div>

    <p class="w-full">
      特殊效果
    </p>

    <!-- 渐变边框卡片 - 基于基础结构 -->
    <div class="w-64 p-[1px] relative shadow-sm hover:shadow-lg transition-shadow rounded-lg
      before:content-[''] before:absolute before:inset-0 before:rounded-lg
      before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-purple-500
      before:transition-all before:duration-500 hover:before:scale-102 hover:before:rounded-2.5">
      <div class="relative bg-white dark:bg-gray-800 p-4 rounded-lg h-full">
        <!-- 基础卡片内容结构 -->
        <span class="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">特色</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          渐变边框
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          使用渐变色边框
        </p>
        <button
          class="text-sm mt-3 text-purple-500 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300">
          查看详情 →
        </button>
      </div>
    </div>

    <!-- 边框动画卡片 - 基于基础结构 -->
    <div class="relative w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md group p-4 overflow-hidden">
      <!-- 边框动画层 -->
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
        opacity-0 group-hover:opacity-100 transition-all duration-500" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
               -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
               mask-composite: exclude; -webkit-mask-composite: xor; padding: 2px;" />
      <!-- 基础卡片内容结构 -->
      <div class="relative">
        <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">动画</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          边框动画
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          悬浮时展现流动的边框效果
        </p>
        <button class="text-sm mt-3 text-blue-500 dark:text-blue-400 font-medium">
          浏览 →
        </button>
      </div>
    </div>

    <!-- 纸片堆叠卡片 -->
    <div class="w-64 relative
          before:content-[''] before:bg-white before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_15px_rgba(0,0,0,0.1)]
          after:content-[''] after:bg-white after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_15px_rgba(0,0,0,0.1)]
          before:-rotate-2 after:rotate-2 before:z-[1] after:z-0
          before:transition-transform after:transition-transform before:duration-300 after:duration-300
          before:hover:rotate-0 after:hover:rotate-0">
      <div class="relative bg-white dark:bg-gray-800 group z-[2] rounded-lg p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <span class="px-2 py-1 text-xs bg-amber-100 text-amber-600 rounded">纸片</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          纸片堆叠
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          模拟纸片堆叠效果
        </p>
        <button class="text-sm mt-3 text-amber-500 dark:text-amber-400 font-medium">
          详情 →
        </button>
      </div>
    </div>

    <!-- 第二个纸片堆叠卡片优化 -->
    <div class="w-64 relative group
          before:content-[''] before:bg-white before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_15px_rgba(0,0,0,0.1)]
          after:content-[''] after:bg-white after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_15px_rgba(0,0,0,0.1)]
          before:translate-y-1 after:translate-y-2 before:z-[2] after:z-[1]
          before:transition-transform after:transition-transform before:duration-300 after:duration-300
          before:hover:translate-y-0 after:hover:translate-y-0">
      <div class="relative bg-white dark:bg-gray-800 group z-[2] rounded-lg p-4 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        <span class="px-2 py-1 text-xs bg-amber-100 text-amber-600 rounded">纸片</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          纸片堆叠
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          模拟纸片堆叠效果
        </p>
        <button class="text-sm mt-3 text-amber-500 dark:text-amber-400 font-medium">
          详情 →
        </button>
      </div>
    </div>

    <!-- 3D翻转卡片 -->
    <div class="group w-64 h-40 [perspective:1000px]">
      <div
        class="relative h-full w-full rounded-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0 rounded-lg bg-white shadow-lg">
          <div class="p-4">
            <span class="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">3D</span>
            <h3 class="text-lg font-semibold mt-2 dark:text-white">
              3D翻转效果
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
              悬浮时展现3D翻转动画效果
            </p>
            <button class="text-sm mt-3 text-green-500 dark:text-green-400 font-medium">
              翻转查看 ↻
            </button>
          </div>
        </div>
        <div
          class="absolute inset-0 h-full w-full rounded-lg bg-green-50 px-4 py-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 class="text-lg font-bold text-green-600 dark:text-white">
            背面内容
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-4">
            这是卡片的背面内容，可以放置更多信息
          </p>
        </div>
      </div>
    </div>

    <!-- 3D上下翻转卡片 -->
    <div class="group w-64 h-40 [perspective:1000px]">
      <div
        class="relative h-full w-full rounded-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400 to-red-500">
          <div class="p-4 text-white">
            <span class="px-2 py-1 text-xs bg-white/20 rounded">3D</span>
            <h3 class="text-lg font-semibold mt-2 dark:text-white">
              3D上下翻转
            </h3>
            <p class="text-sm mt-2">
              翻转效果
            </p>
            <button class="text-sm mt-3 font-medium">
              打开 ↑
            </button>
          </div>
        </div>
        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500 to-orange-400
                    [transform:rotateX(180deg)] [backface-visibility:hidden]">
          <div class="p-4 text-white">
            <h3 class="text-lg font-bold">
              内容展开
            </h3>
            <p class="text-sm mt-4">
              展示更多精彩内容
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 立体投影卡片 -->
    <div
      class="w-64 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-solid border-2 border-black hover:shadow-sm hover:translate-x-[5px] hover:translate-y-[5px] transition-all">
      <span class="px-2 py-1 text-xs bg-black text-white rounded">立体</span>
      <h3 class="text-lg font-semibold mt-2 dark:text-white">
        复古立体
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
        带有复古风格的立体投影效果
      </p>
      <button class="text-sm mt-3 font-medium hover:text-gray-700">
        查看 →
      </button>
    </div>

    <!-- 弹跳缩放卡片 -->
    <div
      class="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105">
      <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded">弹跳</span>
      <h3 class="text-lg font-semibold mt-2 dark:text-white">
        弹跳效果
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
        悬浮时上浮并放大的动画效果
      </p>
      <button
        class="mt-3 text-yellow-500 dark:text-yellow-400 font-medium hover:text-yellow-600 dark:hover:text-yellow-300">
        查看 ↑
      </button>
    </div>

    <!-- 渐变覆盖效果卡片 -->
    <div class="group w-64 bg-white dark:bg-gray-800 rounded-lg p-4 relative overflow-hidden"
      style="background-image: url(https://picsum.photos/300/300?random=1);">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 opacity-0
                  group-hover:opacity-100 transition-opacity duration-500" />
      <div class="relative">
        <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">渐变覆盖</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          渐变覆盖
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          模拟渐变覆盖效果
        </p>
        <button class="text-sm mt-3 text-blue-500 dark:text-blue-400 font-medium">
          触碰 →
        </button>
      </div>
    </div>

    <!-- 脉冲动画卡片 -->
    <div class="relative w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0
                  group-hover:opacity-100 group-hover:transition duration-1000 group-hover:duration-200
                  group-hover:animate-pulse" />
      <div class="relative bg-white p-4 rounded-lg">
        <span class="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">脉冲</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          脉冲效果
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          边框呈现脉冲动画效果
        </p>
        <button class="text-sm mt-3 text-purple-600 dark:text-purple-400 font-medium">
          查看 →
        </button>
      </div>
    </div>

    <!-- 全遮罩效果 -->
    <div class="relative w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg group">
      <div class="absolute -inset-0.5 bg-black rounded-lg blur opacity-0
                  group-hover:opacity-60 group-hover:transition-all duration-1000 group-hover:duration-400
                  group-hover:w-screen group-hover:h-screen group-hover:left-0 group-hover:top-0 group-hover:fixed
                  pointer-events-none group-hover:z-[9998]" />
      <div class="relative bg-white p-4 rounded-lg group-hover:z-[9999]">
        <span class="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">全遮罩</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          全遮罩效果
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          全遮罩效果
        </p>
        <button class="text-sm mt-3 text-purple-600 dark:text-purple-400 font-medium">
          查看 →
        </button>
      </div>
    </div>

    <!-- 倾斜悬浮卡片 -->
    <div class="w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transform transition-all duration-300
                hover:rotate-2 hover:scale-105 hover:shadow-xl">
      <span class="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">倾斜</span>
      <h3 class="text-lg font-semibold mt-2 dark:text-white">
        倾斜效果
      </h3>
      <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
        悬浮时卡片轻微倾斜
      </p>
      <button class="text-sm mt-3 text-orange-500 dark:text-orange-400 font-medium">
        探索 →
      </button>
    </div>

    <!-- 磁贴效果卡片 -->
    <div class="group w-64 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg p-[2px]">
      <div class="bg-white rounded-lg p-4 h-full transform transition-transform duration-300
                  group-hover:translate-x-[3px] group-hover:translate-y-[3px]">
        <span class="px-2 py-1 text-xs bg-violet-100 text-violet-600 rounded">磁贴</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          磁贴效果
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">
          模拟Windows磁贴效果
        </p>
        <button class="text-sm mt-3 text-violet-500 dark:text-violet-400 font-medium">
          查看 →
        </button>
      </div>
    </div>

    <!-- 能量充能卡片 -->
    <div class="group w-64 bg-gray-900 dark:bg-gray-800 rounded-lg p-4 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-blue-500 to-cyan-300 origin-bottom scale-y-0
                  transition-transform duration-700 ease-in-out group-hover:scale-y-100" />
      <div class="absolute bottom-0 left-0 w-full h-1 bg-primary">
        <div class="h-full bg-cyan-300 transform scale-x-0 origin-left transition-transform duration-700
                    group-hover:scale-x-100" />
      </div>
      <div class="relative text-white">
        <span class="px-2 py-1 text-xs bg-primary/20 rounded">充能</span>
        <h3 class="text-lg font-semibold mt-2 dark:text-white">
          能量充能
        </h3>
        <p class="text-gray-400 dark:text-gray-400 text-sm mt-2">
          模拟能量充能动画效果
        </p>
        <button class="text-sm mt-3 text-blue-400 dark:text-blue-300 font-medium group-hover:text-white">
          启动 →
        </button>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
