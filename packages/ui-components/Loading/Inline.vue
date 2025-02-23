<template>
  <div class="flex flex-col gap-4 items-start">
    <!-- #region snippet -->
    <!-- Spinner -->
    <div class="w-5 h-5 border-solid border-[3px] border-blue-200 border-t-blue-500 rounded-full animate-spin animate-duration-1500" />

    <!-- Dots -->
    <div class="flex space-x-2">
      <div class="w-1 h-1 bg-primary rounded-full animate-ping animate-duration-1200 animate-delay-0" />
      <div class="w-1 h-1 bg-primary rounded-full animate-ping animate-duration-1200 animate-delay-250" />
      <div class="w-1 h-1 bg-primary rounded-full animate-ping animate-duration-1200 animate-delay-500" />
    </div>

    <div class="animate-spin animate-duration-1500 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path fill="currentColor" fill-rule="evenodd" d="M11 16a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-6.259-3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m11.578.5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M18.5 9.319a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M2.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m15.286-.793a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8 0a3 3 0 1 1 0 6a3 3 0 0 1 0-6m7.5 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" />
      </svg>
    </div>
    <!-- #endregion snippet -->
  </div>
</template>
