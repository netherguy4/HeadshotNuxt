<template>
  <section class="hero">
    <div class="container">
      <div class="hero__container">
        <div class="hero__content">
          <address class="hero__address subtitle">
            <icon
              name="bxs:map"
              style="width: 1.1875em; height: 1.1875em"
            ></icon>
            одеса, вул. Сергія Ядова, 6
          </address>
          <h1 class="hero__title title">{{
            route.name === "paintball"
              ? "Найбільший  пейнтбол в Україні"
              : "Найбільший  Страйкбол в Україні"
          }}</h1>
          <ul class="hero__list" id="hero-list">
            <li class="hero__li">Більше 15 років досвіду</li>
            <li class="hero__li"> Шість унікальних полігонів </li>
            <li class="hero__li"> Нові маркери та маски </li>
            <li class="hero__li">Досвідчені інструктори</li>
          </ul>
          <div class="hero__buttons">
            <button @click="scrollToForm" class="hero__button"
              >Замовити гру</button
            >
            <button @click="scrollToForm" class="hero__button"
              >Порахувати вартість</button
            >
          </div>
        </div>
        <div class="hero__image-wrapper image-wrapper">
          <NuxtImg
            v-if="route.name === 'paintball'"
            width="680"
            height="680"
            format="webp"
            loading="eager"
            preload
            src="/img/hero-paintball.jpg"
            alt="player"
            class="hero__image image"
          />
          <NuxtImg
            v-else
            width="680"
            height="680"
            format="webp"
            loading="eager"
            src="/img/hero-strikeball.jpg"
            alt="player"
            class="hero__image image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  gsap.registerPlugin(ScrollToPlugin);

  const route = useRoute();

  const scrollToForm = () => {
    gsap.to(window, {
      duration: 2,
      ease: "circ.inOut",
      scrollTo: { y: "#price-form", offsetY: 80 },
    });
  };
</script>

<style lang="scss" scoped>
  .hero {
    color: #125a28;
    overflow: hidden;
    @include adaptiv-font(20, 16);
    &__container {
      display: grid;
      column-gap: 80px;
      @media (min-width: $M) {
        grid-template-columns: 1fr 0.85fr;
      }
    }
    &__content {
      display: flex;
      position: relative;
      z-index: 2;
      flex-direction: column;
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 30px;
    }
    &__address {
      text-transform: uppercase;
      font-style: normal;
      color: #fa8013;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 10px 0;
    }
    &__list {
      display: grid;
      column-gap: torem(50);
      row-gap: torem(5);
      padding: 30px 0;
      grid-auto-flow: column;
      grid-template-rows: repeat(4, auto);
      @media (min-width: $L) {
        grid-template-rows: repeat(2, auto);
      }
    }
    &__li {
      line-height: 130%;
      padding: 0 0 0 37px;
      background: url("/svg/arrow.svg") 0 5px no-repeat;
    }
    &__buttons {
      display: flex;
      column-gap: 30px;
      row-gap: 10px;
      flex-wrap: wrap;
      max-width: 640px;
    }
    &__button {
      padding: em(12, 20) em(60, 20);
      font-weight: 600;
      font-size: inherit;
      color: #34b3cf;
      border: 2px solid #34b3cf;
      transition: $trTime;
      will-change: transform;
      flex-grow: 2;
      @include hover {
        transition: $hoverTime;
        box-shadow: 0 0 5px #34b3cf;
        color: #fff;
        background: rgba(#34b3cf, 0.5);
        border-color: rgba(#34b3cf, 0.5);
        scale: 1.05;
      }
      &:active {
        transition: $activeTime;
        box-shadow: none;
        scale: 1;
      }
      &:first-child {
        background: #fa8013;
        color: #fff;
        border: 2px solid #fa8013;
        flex-grow: 1;
        @include hover {
          box-shadow: 0 0 5px #fa8013;
          color: #fa8013;
          background: rgba(#fff, 0.5);
        }
        &:active {
          box-shadow: none;
        }
      }
    }
    &__image-wrapper {
      pointer-events: none;
      position: relative;
      padding: 0 0 percent(301, 320);
      margin: 0 -20px;
      @media (min-width: $M) {
        margin: 0 -50px;
      }
    }
  }
</style>
