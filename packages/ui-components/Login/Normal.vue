<template>
  <div class="rounded-lg bg-white px-4 py-8">
    <h1 class="mb-5 text-center text-[26px] font-medium">
      登录
    </h1>
    <input id="userName" type="text" placeholder="请输入用户名"
      class="block w-full rounded-md border border-solid border-gray-300 px-3 py-2 outline-none focus:ring-1 focus:ring-[#1f293733] dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary">
    <p class="h-5 text-[12px] text-red-500">
      请输入用户名
    </p>

    <input id="password" type="password" placeholder="请输入密码"
      class="peer block w-full rounded-md border border-solid border-gray-300 px-3 py-2 outline-none focus:ring-1 focus:ring-[#1f293733] dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary">
    <p class="h-5 text-[12px] text-red-500">
      请输入密码
    </p>

    <button type="submit"
      class="block h-10 w-full rounded-md bg-primary text-white hover:bg-primary/80 active:scale-98">
      登录
    </button>

    <div class="mt-4 flex items-center gap-1 text-sm">
      <label class="flex cursor-pointer items-center gap-1">
        <input type="checkbox" class="size-4 rounded border-gray-300 text-primary focus:ring-primary">
        <span>我已阅读并同意</span>
      </label>
      <a href="" class="text-primary hover:text-primary/80">《用户协议》</a>
      和
      <a href="" class="text-primary hover:text-primary/80">《隐私政策》</a>
    </div>

    <div class="mt-4 flex justify-between text-sm">
      <a href="" class="text-primary hover:text-primary/80">注册</a>
      <a href="" class="text-primary hover:text-primary/80">忘记密码</a>
    </div>
  </div>
</template>
