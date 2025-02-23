<template>
  <!-- #region snippet -->
  <div class="flex gap-1 text-2xl">
    <input type="radio" name="rating" id="star1" class="hidden peer/star1">
    <input type="radio" name="rating" id="star2" class="hidden peer/star2">
    <input type="radio" name="rating" id="star3" class="hidden peer/star3" checked>
    <input type="radio" name="rating" id="star4" class="hidden peer/star4">
    <input type="radio" name="rating" id="star5" class="hidden peer/star5">
    <label for="star1" class="cursor-pointer text-gray-300 order-1 hover:text-yellow-400 peer-checked/star1:text-yellow-400 peer-checked/star2:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star2" class="cursor-pointer text-gray-300 order-2 hover:text-yellow-400 peer-checked/star2:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star3" class="cursor-pointer text-gray-300 order-3 hover:text-yellow-400 peer-checked/star3:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star4" class="cursor-pointer text-gray-300 order-4 hover:text-yellow-400 peer-checked/star4:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
    <label for="star5" class="cursor-pointer text-gray-300 order-5 hover:text-yellow-400 peer-checked/star5:text-yellow-400">★</label>
  </div>
  <!-- #endregion snippet -->
</template>
