<template>
  <div class="space-y-8">
    <!-- #region snippet -->
    <h2>基础样式</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="rounded-lg bg-white p-4 shadow">
        <div class="text-sm text-gray-500">
          总用户
        </div>
        <div class="text-3xl font-bold">
          31K
        </div>
        <div class="mt-2 flex items-center text-xs text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 size-2.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9" /></svg>
          <span>4.1%</span>
          <span class="ml-1 text-gray-500">较上月</span>
        </div>
      </div>

      <div class="rounded-lg bg-white p-4 shadow">
        <div class="text-sm text-gray-500">
          新订单
        </div>
        <div class="text-3xl font-bold">
          4,200
        </div>
        <div class="mt-2 flex items-center text-xs text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 size-2.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22V2M3 13l9 9l9-9" /></svg>
          <span>2.3%</span>
          <span class="ml-1 text-gray-500">较上月</span>
        </div>
      </div>

      <div class="rounded-lg bg-white p-4 shadow">
        <div class="text-sm text-gray-500">
          总收入
        </div>
        <div class="text-3xl font-bold">
          $89,400
        </div>
        <div class="mt-2 flex items-center text-xs text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 size-2.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9" /></svg>
          <span>8.2%</span>
          <span class="ml-1 text-gray-500">较上月</span>
        </div>
      </div>
    </div>

    <h2>带图标样式</h2>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div class="rounded-lg bg-white p-4 shadow">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-500">
              访问量
            </div>
            <div class="text-3xl font-bold">
              89,400
            </div>
          </div>
          <div class="rounded-full bg-white p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-primary" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.85 0-3.488-.713T5.65 18.35q-1.225-1.225-1.938-2.863T3 12q0-1.85.713-3.488T5.65 5.65q1.225-1.225 2.863-1.938T12 3q1.55 0 2.975.5t2.675 1.45l-1.4 1.4q-.95-.7-2.038-1.075T12 4.8q-3 0-5.1 2.1T4.8 12q0 3 2.1 5.1t5.1 2.1q3 0 5.1-2.1t2.1-5.1q0-.9-.2-1.775t-.65-1.675L20 7.15q.55 1.35.775 2.75T21 12q0 1.85-.713 3.488T18.35 18.35q-1.225 1.225-2.863 1.938T12 21m-1.4-5.4l-4.25-4.25l1.4-1.4l2.85 2.85l10-10.025l1.4 1.4z" /></svg>
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-green-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 size-2.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9" /></svg>
          <span>12%</span>
          <span class="ml-1 text-gray-500">较上周</span>
        </div>
      </div>

      <div class="rounded-lg bg-white p-4 shadow">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-sm text-gray-500">
              销售额
            </div>
            <div class="text-3xl font-bold">
              $12,623
            </div>
          </div>
          <div class="rounded-full bg-primary/10 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6 text-primary" viewBox="0 0 56 56"><path fill="currentColor" fill-rule="evenodd" d="m41.47 12l-9.596 16.937h6.186v2.575h-7.454v3.625h7.454v2.576h-7.454v6.542h-4.765v-6.542h-7.453v-2.576h7.453v-3.625h-7.453v-2.575h6.186L15 12h5.333l7.847 14.634h.131L36.158 12z" /></svg>
          </div>
        </div>
        <div class="mt-4 flex items-center text-xs text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-0.5 size-2.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22V2M3 13l9 9l9-9" /></svg>
          <span>2.3%</span>
          <span class="ml-1 text-gray-500">较上周</span>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
