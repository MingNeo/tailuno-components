<template>
  <div class="flex flex-wrap gap-6">
    <!-- 基础卡片 -->
    <div class="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src="placeholder.jpg" class="w-full h-40 object-cover" />
      <div class="p-4">
        <span class="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">标签</span>
        <h3 class="text-lg font-semibold mt-2">标题文本</h3>
        <p class="text-gray-600 text-sm mt-2">描述内容描述内容描述内容</p>
        <button class="mt-3 text-blue-500 font-medium hover:text-blue-700">了解更多 →</button>
      </div>
    </div>

    <!-- 渐变边框卡片 -->
    <div class="w-64 p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div class="bg-white p-4 rounded-lg h-full">
        <span class="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">特色</span>
        <h3 class="text-lg font-semibold mt-2">渐变边框</h3>
        <p class="text-gray-600 text-sm mt-2">使用渐变色边框突出显示的卡片设计</p>
        <button class="mt-3 text-purple-500 font-medium hover:text-purple-700">查看详情 →</button>
      </div>
    </div>

    <!-- 深色主题卡片 -->
    <div class="w-64 bg-gray-900 text-white rounded-lg shadow-xl p-4">
      <span class="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded">暗色</span>
      <h3 class="text-lg font-semibold mt-2">深色主题</h3>
      <p class="text-gray-400 text-sm mt-2">适合深色主题的卡片样式设计</p>
      <button class="mt-3 text-gray-300 font-medium hover:text-white">探索 →</button>
    </div>

    <!-- 玻璃拟态卡片 -->
    <div class="w-64 backdrop-blur-md bg-white/30 rounded-lg p-4 border border-white/20">
      <span class="px-2 py-1 text-xs bg-white/20 text-white rounded">玻璃</span>
      <h3 class="text-lg font-semibold mt-2">玻璃拟态</h3>
      <p class="text-sm mt-2">模拟磨砂玻璃效果的现代卡片设计</p>
      <button class="mt-3 font-medium hover:text-white/80">浏览 →</button>
    </div>

    <!-- 极简卡片 -->
    <div class="w-64 border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <span class="px-2 py-1 text-xs text-gray-500 border border-gray-200 rounded">简约</span>
      <h3 class="text-lg font-semibold mt-2">极简设计</h3>
      <p class="text-gray-600 text-sm mt-2">保持简洁的最小化卡片设计</p>
      <button class="mt-3 text-gray-600 font-medium hover:text-gray-800">详情 →</button>
    </div>

    <!-- 立体投影卡片 -->
    <div class="w-64 bg-white rounded-lg p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-2 border-black">
      <span class="px-2 py-1 text-xs bg-black text-white rounded">立体</span>
      <h3 class="text-lg font-semibold mt-2">复古立体</h3>
      <p class="text-gray-600 text-sm mt-2">带有复古风格的立体投影效果</p>
      <button class="mt-3 font-medium hover:text-gray-700">查看 →</button>
    </div>
  </div>
</template>
