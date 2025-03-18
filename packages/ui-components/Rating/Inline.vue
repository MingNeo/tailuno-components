<template>
  <!-- #region snippet -->
  <div class="flex gap-1 text-2xl">
    <input id="star1" type="radio" name="rating" class="peer/star1 hidden">
    <input id="star2" type="radio" name="rating" class="peer/star2 hidden">
    <input id="star3" type="radio" name="rating" class="peer/star3 hidden" checked>
    <input id="star4" type="radio" name="rating" class="peer/star4 hidden">
    <input id="star5" type="radio" name="rating" class="peer/star5 hidden">
    <label for="star1" class="order-1 cursor-pointer text-gray-300 hover:text-yellow-400 peer-checked/star1:text-yellow-400 peer-checked/star2:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star2" class="order-2 cursor-pointer text-gray-300 hover:text-yellow-400 peer-checked/star2:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star3" class="order-3 cursor-pointer text-gray-300 hover:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star4" class="order-4 cursor-pointer text-gray-300 hover:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star5" class="order-5 cursor-pointer text-gray-300 hover:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
  </div>
  <!-- #endregion snippet -->
</template>
