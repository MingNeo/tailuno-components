<template>
  <div class="flex flex-wrap items-start gap-4">
    <!-- #region snippet -->
    <!-- 基础步骤条 -->
    <div class="flex w-full items-center">
      <div class="flex flex-1 items-center">
        <div class="flex size-8 items-center justify-center rounded-full bg-primary text-white">
          1
        </div>
        <div class="mx-2 h-[2px] flex-1 bg-primary" />
      </div>
      <div class="flex flex-1 items-center">
        <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
          2
        </div>
        <div class="mx-2 h-[2px] flex-1 bg-gray-200" />
      </div>
      <div class="flex flex-1 items-center">
        <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
          3
        </div>
        <div class="mx-2 h-[2px] flex-1 bg-gray-200" />
      </div>
      <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
        4
      </div>
    </div>

    <!-- 图标顶部带标题的步骤条 -->
    <div class="mt-8 flex w-full items-center">
      <div class="relative flex flex-1 flex-col gap-2">
        <div class="flex w-full items-center">
          <div class="flex size-8 items-center justify-center rounded-full bg-primary text-white">
            1
          </div>
          <div class="mx-2 h-[2px] flex-1 bg-primary" />
        </div>
        <div class="mb-2 font-medium text-primary">
          步骤1
          <div class="mt-2 text-sm text-gray-400">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-1 flex-col gap-2">
        <div class="flex w-full items-center">
          <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            2
          </div>
          <div class="mx-2 h-[2px] flex-1 bg-gray-200" />
        </div>
        <div class="mb-2 font-medium text-gray-600">
          步骤2
          <div class="mt-2 text-sm text-gray-400">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-1 flex-col gap-2">
        <div class="flex w-full items-center">
          <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            3
          </div>
          <div class="mx-2 h-[2px] flex-1 bg-gray-200" />
        </div>
        <div class="mb-2 font-medium text-gray-600">
          步骤3
          <div class="mt-2 text-sm text-gray-400">
            这是第三步的描述
          </div>
        </div>
      </div>
      <div class="relative flex flex-1 flex-col gap-2">
        <div class="flex w-full items-center">
          <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            4
          </div>
        </div>
        <div class="mb-2 font-medium text-gray-600">
          步骤4

          <div class="mt-2 text-sm text-gray-400">
            这是第四步的描述
          </div>
        </div>
      </div>
    </div>

    <!-- 带标题和描述的步骤条 -->
    <div class="mt-8 flex w-full items-start">
      <div class="flex flex-1 flex-col items-center">
        <div class="mb-2 flex w-full items-center">
          <div class="h-[2px] flex-1 bg-transparent" />
          <div class="mx-2 flex size-8 items-center justify-center rounded-full bg-primary text-white">
            1
          </div>
          <div class="h-[2px] flex-1 bg-primary" />
        </div>
        <div class="font-medium text-primary">
          步骤1
        </div>
        <div class="text-sm text-gray-400">
          这是第一步的描述
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center">
        <div class="mb-2 flex w-full items-center">
          <div class="h-[2px] flex-1 bg-gray-200" />
          <div class="mx-2 flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            2
          </div>
          <div class="h-[2px] flex-1 bg-gray-200" />
        </div>
        <div class="font-medium text-gray-600">
          步骤2
        </div>
        <div class="text-sm text-gray-400">
          这是第二步的描述
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center">
        <div class="mb-2 flex w-full items-center">
          <div class="h-[2px] flex-1 bg-gray-200" />
          <div class="mx-2 flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            3
          </div>
          <div class="h-[2px] flex-1 bg-gray-200" />
        </div>
        <div class="font-medium text-gray-600">
          步骤3
        </div>
        <div class="text-sm text-gray-400">
          这是第三步的描述
        </div>
      </div>
      <div class="flex flex-1 flex-col items-center">
        <div class="mb-2 flex w-full items-center">
          <div class="h-[2px] flex-1 bg-gray-200" />
          <div class="mx-2 flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
            4
          </div>
          <div class="h-[2px] flex-1 bg-transparent" />
        </div>
        <div class="font-medium text-gray-600">
          步骤4
        </div>
        <div class="text-sm text-gray-400">
          这是第四步的描述
        </div>
      </div>
    </div>

    <!-- 垂直步骤条 -->
    <div class="mt-8 flex flex-col gap-4">
      <div class="flex items-start gap-4">
        <div class="flex size-8 items-center justify-center rounded-full bg-primary text-white">
          1
        </div>
        <div class="flex flex-col">
          <div class="font-medium text-primary">
            步骤1
          </div>
          <div class="text-sm text-gray-400">
            这是第一步的描述
          </div>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
          2
        </div>
        <div class="flex flex-col">
          <div class="font-medium text-gray-600">
            步骤2
          </div>
          <div class="text-sm text-gray-400">
            这是第二步的描述
          </div>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="flex size-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
          3
        </div>
        <div class="flex flex-col">
          <div class="font-medium text-gray-600">
            步骤3
          </div>
          <div class="text-sm text-gray-400">
            这是第三步的描述
          </div>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
