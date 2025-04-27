<template>
  <section class="promo">
    <div class="container">
      <h2 class="title promo__title">Актуальні акції</h2>
      <div class="promo__slider-container">
        <Swiper
          class="promo__slider"
          :modules="[Navigation, A11y]"
          :slides-per-view="'auto'"
          :space-between="71"
          :allow-touch-move="false"
          :navigation="{
            prevEl: '.promo__button--prev',
            nextEl: '.promo__button--next',
          }"
          :lazy-preload-prev-next="1"
        >
          <SwiperSlide
            :lazy="true"
            v-for="card in promo"
            :key="card.title"
            class="promo__slide"
          >
            <MainPromoSlide
              :title="card.title"
              :subtitle="card.subtitle"
              :image="card.image"
              class="promo__card"
            />
          </SwiperSlide>
        </Swiper>
        <button class="promo__button promo__button--prev">
          <SvgoSliderArrow class="slider-arrow" />
        </button>
        <button class="promo__button promo__button--next">
          <SvgoSliderArrow class="slider-arrow" />
        </button>
      </div>
      <img
        src="/svg/dash-curved-deco.svg"
        alt=""
        loading="lazy"
        class="promo__deco"
      />
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, A11y } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/navigation";
  import promo from "@/assets/json/promo";
</script>

<style lang="scss" scoped>
  .promo {
    position: relative;
    @include adaptiv-font(32, 20);
    &__title {
      color: #125a28;
      margin: 0 0 30px 0;
    }
    &__slider {
      color: #fff;
      @media (min-width: $M) {
        background: url("/svg/dash-through.svg") center no-repeat scroll;
      }
    }
    &__slider-container {
      position: relative;
      padding: 0 30px;
      @media (min-width: $M) {
        padding: 0 calc(133px - 50px);
      }
    }
    &__deco {
      display: none;
      @media (min-width: $M) {
        display: initial;
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        height: 55%;
      }
    }
    &__slide {
      user-select: none;
      max-width: em(450, 32);
      @media (min-width: $M) {
        max-width: em(343, 32);
      }
    }
    &__button {
      position: absolute;
      top: 50%;
      translate: 0 -50%;
      transition: $hoverTime;
      width: 23px;
      height: 23px;
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
