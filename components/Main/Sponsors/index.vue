<template>
  <section class="sponsors">
    <div class="container">
      <h2 class="title sponsors__title">Наші клієнти</h2>
      <div class="sponsors__slider-container">
        <swiper
          class="sponsors__slider"
          :modules="[Navigation, A11y]"
          :slides-per-view="'auto'"
          :space-between="10"
          grab-cursor
          :navigation="{
            prevEl: '.sponsors__button--prev',
            nextEl: '.sponsors__button--next',
          }"
          :breakpoints="{
            768: {
              spaceBetween: 30,
            },
          }"
        >
          <swiper-slide
            v-for="n in 9"
            lazy
            :key="n"
            class="sponsors__slide image-wrapper"
          >
            <NuxtImg
              loading="lazy"
              width="170"
              height="170"
              sizes="170px md:120px"
              fit="inside"
              class="sponsors__image image"
              :src="`/img/sponsors/sponsor${n}.png`"
              alt=""
            />
          </swiper-slide>
        </swiper>
        <button class="sponsors__button sponsors__button--prev">
          <SvgoSliderArrow class="slider-arrow" />
        </button>
        <button class="sponsors__button sponsors__button--next">
          <SvgoSliderArrow class="slider-arrow" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, A11y } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
</script>

<style lang="scss" scoped>
  .sponsors {
    position: relative;
    @include adaptiv-font(32, 20);
    &__title {
      color: #125a28;
      margin: 0 0 30px 0;
      text-align: center;
    }
    &__slider {
      color: #fff;
    }
    &__slider-container {
      position: relative;
      padding: 0 30px;
      @media (min-width: $M) {
        padding: 0 calc(133px - 50px);
      }
    }
    &__slide {
      user-select: none;
      max-width: 120px;
      padding-bottom: 120px;
      @media (min-width: $M) {
        max-width: 170px;
        padding-bottom: 170px;
      }
    }
    &__image {
      object-fit: contain;
    }
    &__button {
      position: absolute;
      top: 50%;
      translate: 0 -50%;
      transition: $hoverTime;
      width: 20px;
      height: 20px;
      @media (min-width: $M) {
        width: 40px;
        height: 40px;
      }
      &--prev {
        left: 0;
        scale: -1 1;
      }
      &--next {
        right: 0;
      }
      &.swiper-button-disabled {
        pointer-events: none;
        opacity: 0.3;
      }
    }
  }
</style>
