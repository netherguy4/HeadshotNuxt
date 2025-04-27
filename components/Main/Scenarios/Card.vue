<template>
  <div class="card">
    <div class="card__container">
      <div class="card__title-wrapper"
        ><slot name="icon"></slot> {{ title }}</div
      >
      <p class="card__text"><slot name="text"></slot></p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    text: String,
  });
</script>

<style lang="scss" scoped>
  .card {
    &__container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__title-wrapper {
      font-weight: 600;
      display: flex;
      gap: 20px;
      align-items: center;
      text-transform: uppercase;
      @include adaptiv-font(32, 20);
    }
    &__text {
      flex: 1 1 auto;
      font-size: 20px;
    }
  }
</style>
