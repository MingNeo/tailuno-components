<template>
  <div class="rounded-lg bg-white px-4 py-8">
    <h2 class="mb-8 text-center text-2xl font-bold">
      快速登录
    </h2>
    <div class="flex items-center gap-1">
      <input class="h-10 flex-1 rounded-md bg-gray-100 px-2" type="text" placeholder="请输入手机号">
    </div>
    <p class="h-[18px] text-[12px] text-red-500">
      请输入手机号
    </p>

    <div class="flex items-center gap-1">
      <input class="h-10 flex-1 rounded-md bg-gray-100 px-2" type="text" placeholder="请输入验证码">
      <button class="h-10 w-[100px] text-nowrap rounded-md bg-gray-100 text-sm">
        获取验证码
      </button>
    </div>
    <p class="h-[18px] text-[12px] text-red-500">
      请输入验证码
    </p>

    <button type="submit"
      class="mt-6 block h-10 w-full rounded-md bg-primary text-white hover:bg-primary/80 active:scale-98">
      登录
    </button>

    <div class="mt-4 flex items-center gap-1 text-sm">
      <label class="flex cursor-pointer items-center gap-1">
        <input type="checkbox"
          class="size-4 rounded border-gray-300 text-primary focus:ring-primary">
        <span>我已阅读并同意</span>
      </label>
      <a href="" class="text-primary hover:text-primary/80">《用户协议》</a>
      和
      <a href="" class="text-primary hover:text-primary/80">《隐私政策》</a>
    </div>

    <div class="mt-4 text-center">
      <a class="cursor-pointer text-sm text-primary hover:text-primary/80">
        没有账号？去注册
      </a>
    </div>
  </div>
</template>
