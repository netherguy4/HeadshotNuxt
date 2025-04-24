<template>
  <div class="slide">
    <div class="slide__container">
      <div class="slide__image-wrapper image-wrapper">
        <img
          loading="lazy"
          :src="`/img/promo/${props.image}.webp`"
          :alt="props.title"
          class="slide__image image"
        />
        <div class="slide__text">
          <h3 class="slide__title">{{ title }}</h3>
          <p class="slide__subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <button class="slide__button">Детальніше</button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    subtitle: String,
    image: String,
  });
</script>

<style lang="scss" scoped>
  .slide {
    background: #e5ebea;
    overflow: hidden;
    &__container {
      display: flex;
      flex-direction: column;
    }
    &__image-wrapper {
      padding-bottom: percent(333, 343);
      margin-bottom: -1px;
    }
    &__image {
      pointer-events: none;
      transition: $trTime;
      opacity: 0.9;
      filter: blur(2.5px);
    }
    &__text {
      transition: $trTime;
      position: absolute;
      pointer-events: none;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(18, 90, 40, 0.3);
      padding: 15px;
    }
    &__title {
      text-transform: uppercase;
      line-height: 130%;
    }
    &__subtitle {
      @include adaptiv-font(20, 16);
    }
    &__button {
      will-change: transform;
      background: #34b3cf;
      padding: 12px 0;
      transform-origin: bottom;
      color: inherit;
      transition: $trTime;
      @include adaptiv-font(20, 16);
    }
    @include hover {
      .slide {
        &__image {
          transition: $hoverTime;
          filter: blur(0px);
        }
        &__button {
          transition: $hoverTime;
          scale: 1.3;
        }
      }
    }
  }
</style>
