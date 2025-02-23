<template>
  <div class="flex items-start gap-4 flex-wrap">
    <!-- #region snippet -->
    <!-- 基础步骤条 -->
    <div class="flex items-center w-full">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
          1
        </div>
        <div class="flex-1 h-[2px] bg-primary mx-2" />
      </div>
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
          2
        </div>
        <div class="flex-1 h-[2px] bg-gray-200 mx-2" />
      </div>
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
          3
        </div>
        <div class="flex-1 h-[2px] bg-gray-200 mx-2" />
      </div>
      <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
        4
      </div>
    </div>

    <!-- 图标顶部带标题的步骤条 -->
    <div class="flex items-center w-full mt-8">
      <div class="relative flex flex-col gap-2 flex-1">
        <div class="flex items-center w-full">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
            1
          </div>
          <div class="flex-1 h-[2px] bg-primary mx-2" />
        </div>
        <div class="text-primary font-medium mb-2">
          步骤1
          <div class="text-gray-400 text-sm mt-2">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-col gap-2 flex-1">
        <div class="flex items-center w-full">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
            2
          </div>
          <div class="flex-1 h-[2px] bg-gray-200 mx-2" />
        </div>
        <div class="text-gray-600 font-medium mb-2">
          步骤2
          <div class="text-gray-400 text-sm mt-2">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-col gap-2 flex-1">
        <div class="flex items-center w-full">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
            3
          </div>
          <div class="flex-1 h-[2px] bg-gray-200 mx-2" />
        </div>
        <div class="text-gray-600 font-medium mb-2">
          步骤3
          <div class="text-gray-400 text-sm mt-2">
            这是第三步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-col gap-2 flex-1">
        <div class="flex items-center w-full">
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
            4
          </div>
        </div>
        <div class="text-gray-600 font-medium mb-2">
          步骤4

          <div class="text-gray-400 text-sm mt-2">
            这是第四步的描述
          </div>
        </div>
      </div>
    </div>

    <!-- 带标题和描述的步骤条 -->
    <div class="flex items-start w-full mt-8">
      <div class="flex flex-col items-center flex-1">
        <div class="flex items-center w-full mb-2">
          <div class="flex-1 h-[2px] bg-transparent" />
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mx-2">
            1
          </div>
          <div class="flex-1 h-[2px] bg-primary" />
        </div>
        <div class="text-primary font-medium">
          步骤1
        </div>
        <div class="text-gray-400 text-sm">
          这是第一步的描述
        </div>
      </div>
      <div class="flex flex-col items-center flex-1">
        <div class="flex items-center w-full mb-2">
          <div class="flex-1 h-[2px] bg-gray-200" />
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 mx-2">
            2
          </div>
          <div class="flex-1 h-[2px] bg-gray-200" />
        </div>
        <div class="text-gray-600 font-medium">
          步骤2
        </div>
        <div class="text-gray-400 text-sm">
          这是第二步的描述
        </div>
      </div>
      <div class="flex flex-col items-center flex-1">
        <div class="flex items-center w-full mb-2">
          <div class="flex-1 h-[2px] bg-gray-200" />
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 mx-2">
            3
          </div>
          <div class="flex-1 h-[2px] bg-gray-200" />
        </div>
        <div class="text-gray-600 font-medium">
          步骤3
        </div>
        <div class="text-gray-400 text-sm">
          这是第三步的描述
        </div>
      </div>
      <div class="flex flex-col items-center flex-1">
        <div class="flex items-center w-full mb-2">
          <div class="flex-1 h-[2px] bg-gray-200" />
          <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 mx-2">
            4
          </div>
          <div class="flex-1 h-[2px] bg-transparent" />
        </div>
        <div class="text-gray-600 font-medium">
          步骤4
        </div>
        <div class="text-gray-400 text-sm">
          这是第四步的描述
        </div>
      </div>
    </div>

    <!-- 垂直步骤条 -->
    <div class="flex flex-col gap-4 mt-8">
      <div class="flex items-start gap-4">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
          1
        </div>
        <div class="flex flex-col">
          <div class="text-primary font-medium">
            步骤1
          </div>
          <div class="text-gray-400 text-sm">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
          2
        </div>
        <div class="flex flex-col">
          <div class="text-gray-600 font-medium">
            步骤2
          </div>
          <div class="text-gray-400 text-sm">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600">
          3
        </div>
        <div class="flex flex-col">
          <div class="text-gray-600 font-medium">
            步骤3
          </div>
          <div class="text-gray-400 text-sm">
            这是第三步的描述
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
