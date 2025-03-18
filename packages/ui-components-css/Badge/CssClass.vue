<template>
  <div class="flex flex-wrap gap-4">
    <!-- 基础徽章 -->
    <span class="badge">
      默认徽章
    </span>

    <!-- 带边框徽章 -->
    <span class="badge badge-bordered">
      边框徽章
    </span>

    <!-- 带图标徽章 -->
    <span class="badge">
      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
      带图标徽章
    </span>

    <!-- 带图片徽章 -->
    <span class="badge">
      <img class="badge-icon" src="https://picsum.photos/id/185/20/20">
      图片徽章
    </span>

    <!-- 可移除徽章 -->
    <span class="badge">
      可移除
      <button class="badge-close-btn"></button>
    </span>

    <hr class="w-full">

    <span class="badge badge-status">
      Normal
    </span>

    <span class="badge badge-status badge-status-processing">
      Processing
    </span>

    <span class="badge badge-status badge-status-success">
      Success
    </span>

    <span class="badge badge-status badge-status-warning">
      Warning
    </span>

    <span class="badge badge-status badge-status-error">
      Error
    </span>

    <hr class="w-full">

    <div class="badge-wrapper">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="badge badge-dot" ></span>
    </div>

    <div class="badge-wrapper">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="badge" >
        8
      </span>
    </div>

    <div class="badge-wrapper">
      <img class="size-10 rounded-md" src="https://picsum.photos/id/185/40/40">
      <span class="badge" >
        99+
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
  @import './index.css';
</style>
