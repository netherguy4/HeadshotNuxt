<template>
  <section class="pros">
    <div class="container">
      <h2 class="title pros__title">Що ми пропонуємо?</h2>
      <div class="pros__content">
        <MainProsCard
          v-for="(card, index) in pros"
          :key="card.title"
          :title="card.title"
          :image="card.image"
          :href="card.href"
          :style="getOrder(index)"
          class="pros__card"
        />
        <div style="order: 3" class="pros__card--big image-wrapper">
          <img
            loading="lazy"
            src="/img/pros/pros.webp"
            alt="Що ми пропонуємо?"
            class="pros__image image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import pros from "@/assets/json/pros";

  const getOrder = (index) => {
    if (index >= 4) {
      return `order: ${index + 2};`;
    } else {
      return `order: ${index + 1};`;
    }
  };
</script>

<style lang="scss" scoped>
  .pros {
    background: #125a28;
    color: #fff;
    @include adaptiv-font(32, 20);
    .pros {
      &__title {
        text-align: right;
        margin: 0 0 30px 0;
      }
      &__content {
        grid-auto-rows: 1fr;
        @include adaptiv-grid(1, 3, 280px, 30px, 30px);
      }
      // &__card {
      // }
      &__card--big {
        display: none;
        @media (min-width: $M) {
          display: initial;
          grid-row: span 2;
          padding-bottom: percent(470, 427);
        }
      }
      &__image {
        scale: -1 1;
        object-position: 50% 70%;
      }
    }
  }
</style>
