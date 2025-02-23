<template>
  <div class="space-y-8">
    <!-- #region snippet -->
    <h2>基础样式</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="text-gray-500 text-sm">总用户</div>
        <div class="text-3xl font-bold">31K</div>
        <div class="text-success text-xs flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>4.1%</span>
          <span class="text-gray-500 ml-1">较上月</span>
        </div>
      </div>

      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="text-gray-500 text-sm">新订单</div>
        <div class="text-3xl font-bold">4,200</div>
        <div class="text-error text-xs flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22V2M3 13l9 9l9-9"/></svg>
          <span>2.3%</span>
          <span class="text-gray-500 ml-1">较上月</span>
        </div>
      </div>

      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="text-gray-500 text-sm">总收入</div>
        <div class="text-3xl font-bold">$89,400</div>
        <div class="text-success text-xs flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>8.2%</span>
          <span class="text-gray-500 ml-1">较上月</span>
        </div>
      </div>
    </div>

    <h2>带图标样式</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-gray-500 text-sm">访问量</div>
            <div class="text-3xl font-bold">89,400</div>
          </div>
          <div class="bg-primary/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.85 0-3.488-.713T5.65 18.35q-1.225-1.225-1.938-2.863T3 12q0-1.85.713-3.488T5.65 5.65q1.225-1.225 2.863-1.938T12 3q1.55 0 2.975.5t2.675 1.45l-1.4 1.4q-.95-.7-2.038-1.075T12 4.8q-3 0-5.1 2.1T4.8 12q0 3 2.1 5.1t5.1 2.1q3 0 5.1-2.1t2.1-5.1q0-.9-.2-1.775t-.65-1.675L20 7.15q.55 1.35.775 2.75T21 12q0 1.85-.713 3.488T18.35 18.35q-1.225 1.225-2.863 1.938T12 21m-1.4-5.4l-4.25-4.25l1.4-1.4l2.85 2.85l10-10.025l1.4 1.4z"/></svg>
          </div>
        </div>
        <div class="text-success text-xs flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>12%</span>
          <span class="text-gray-500 ml-1">较上周</span>
        </div>
      </div>

      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-gray-500 text-sm">销售额</div>
            <div class="text-3xl font-bold">$12,623</div>
          </div>
          <div class="bg-secondary/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-secondary" viewBox="0 0 56 56"><path fill="currentColor" fill-rule="evenodd" d="m41.47 12l-9.596 16.937h6.186v2.575h-7.454v3.625h7.454v2.576h-7.454v6.542h-4.765v-6.542h-7.453v-2.576h7.453v-3.625h-7.453v-2.575h6.186L15 12h5.333l7.847 14.634h.131L36.158 12z"/></svg>
          </div>
        </div>
        <div class="text-error text-xs flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22V2M3 13l9 9l9-9"/></svg>
          <span>2.3%</span>
          <span class="text-gray-500 ml-1">较上周</span>
        </div>
      </div>

      <div class="stat bg-base-100 shadow rounded-lg p-4">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-gray-500 text-sm">新用户</div>
            <div class="text-3xl font-bold">2,356</div>
          </div>
          <div class="bg-accent/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-accent" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/></svg>
          </div>
        </div>
        <div class="text-success text-xs flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>5.6%</span>
          <span class="text-gray-500 ml-1">较上周</span>
        </div>
      </div>
    </div>

    <h2>彩色背景样式</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="stat bg-primary text-primary-content rounded-lg p-4">
        <div class="text-sm text-white opacity-80">下载量</div>
        <div class="text-3xl text-white font-bold">31K</div>
        <div class="text-xs text-white flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>4.1%</span>
          <span class="opacity-80 ml-1">较上月</span>
        </div>
      </div>

      <div class="stat bg-secondary text-secondary-content rounded-lg p-4">
        <div class="text-sm opacity-80">新用户</div>
        <div class="text-3xl font-bold">4,200</div>
        <div class="text-xs flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 22V2M3 13l9 9l9-9"/></svg>
          <span>2.3%</span>
          <span class="opacity-80 ml-1">较上月</span>
        </div>
      </div>

      <div class="stat bg-accent text-accent-content rounded-lg p-4">
        <div class="text-sm text-white opacity-80">总收入</div>
        <div class="text-3xl text-white font-bold">$89,400</div>
        <div class="text-xs text-white flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 2v20M3 11l9-9l9 9"/></svg>
          <span>8.2%</span>
          <span class="opacity-80 ml-1">较上月</span>
        </div>
      </div>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
