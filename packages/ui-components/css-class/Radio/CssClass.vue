<template>
  <div class="radio-group">
    <label class="radio-item">
      <input type="radio" name="test" value="4" class="radio-input">
      <span class="radio-label">Default Radio</span>
    </label>
    <label class="radio-item">
      <input type="radio" name="test" value="5" class="radio-input">
      <span class="radio-label">Default Radio</span>
    </label>
    <label class="radio-item">
      <input type="radio" name="test" value="6" class="radio-input">
      <span class="radio-label">Default Radio</span>
    </label>
  </div>
</template>

<style lang="css">
  .radio-group {
    @apply inline-flex gap-2;
  }

  .radio-item {
    @apply px-3 py-1.5 bg-white border border-gray-300 hover:bg-gray-50 cursor-pointer;

    &:first-child {
      @apply rounded-l-md;
    }

    &:last-child {
      @apply rounded-r-md;
    }
  }

  .radio-input {
    @apply sr-only peer;

    &:checked+.radio-label {
      @apply bg-primary text-white;
    }
  }

  .radio-label {
    @apply text-gray-700 dark:text-gray-300;
  }
</style>
