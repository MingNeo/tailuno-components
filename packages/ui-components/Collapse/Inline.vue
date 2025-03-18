<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <!-- #region snippet -->
      <!-- Focus方式折叠面板 -->
      <h3 class="mb-2 font-medium">
        Focus控制方式
      </h3>
      <div tabindex="0" class="group overflow-hidden rounded-lg border focus:outline-none">
        <div class="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-50">
          <span>点击展开(失焦自动关闭)</span>
          <svg class="size-5 transition-transform group-focus:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m6 9l6 6l6-6" />
          </svg>
        </div>
        <div class="hidden border-t px-4 py-2 group-focus:block">
          这是折叠面板的内容。点击其他地方面板会自动关闭。
        </div>
      </div>

      <!-- Checkbox方式折叠面板 -->
      <h3 class="mb-2 font-medium">
        Checkbox控制方式
      </h3>
      <div class="overflow-hidden rounded-lg border">
        <div class="group">
          <input id="collapse1" type="checkbox" class="peer hidden">
          <label for="collapse1"
            class="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-50 peer-checked:[&_svg]:rotate-180">
            <span>点击切换展开/收起</span>
            <svg class="size-5 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m6 9l6 6l6-6" />
            </svg>
          </label>
          <div class="hidden border-t px-4 py-2 peer-checked:block">
            这是折叠面板的内容。需要再次点击才会关闭。
          </div>
        </div>
      </div>

      <!-- 带图标的Checkbox折叠面板 -->
      <div class="overflow-hidden rounded-lg border">
        <div class="group">
          <input id="collapse2" type="checkbox" class="peer hidden">
          <label for="collapse2"
            class="flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-gray-50 peer-checked:[&_.collapse-arrow]:rotate-180">
            <div class="flex items-center gap-2">
              <svg class="size-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z" />
              </svg>
              <span>带图标的折叠面板</span>
            </div>
            <svg class="collapse-arrow size-5 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m6 9l6 6l6-6" />
            </svg>
          </label>
          <div class="hidden border-t px-4 py-2 peer-checked:block">
            这是带图标的折叠面板内容。
          </div>
        </div>
      </div>
      <!-- #endregion snippet -->
    </div>
  </div>
</template>
