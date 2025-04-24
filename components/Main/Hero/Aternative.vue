<template>
  <section class="hero">
    <div class="container">
      <div class="hero__container">
        <div class="hero__content">
          <address class="hero__address subtitle">
            <icon icon="bxs:map" width="1.1875em" height="1.1875em"></icon> одеса, вул. Сергія
            Ядова, 6
          </address>
          <h1 class="hero__title title">{{ title }}</h1>
          <ul class="hero__list" id="hero-list">
            <li style="order: 1" class="hero__li">Більше 15 років досвіду</li>
            <li :style="isLargeScreen ? 'order: 2' : 'order: 4'" class="hero__li">
              Нові маркери та маски
            </li>
            <li
              :style="isLargeScreen ? 'order: 4' : 'order: 2'"
              class="hero__li"
              style="grid-row: span 2"
            >
              Шість унікальних полігонів
            </li>
            <li style="order: 5" class="hero__li">Досвідчені інструктори</li>
          </ul>
          <div class="hero__buttons">
            <button @click="scrollToForm" class="hero__button">Замовити гру</button>
            <button @click="scrollToForm" class="hero__button">Порахувати вартість</button>
          </div>
        </div>
        <div class="hero__image-wrapper image-wrapper">
          <img loading="eager" src="/img/pros/pros.webp" alt="player" class="hero__image image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useMediaQuery } from '@vueuse/core'
gsap.registerPlugin(ScrollToPlugin)

import { Icon } from '@iconify/vue'

defineProps({
  title: String,
})

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const scrollToForm = () => {
  gsap.to(window, {
    duration: 2,
    ease: 'circ.inOut',
    scrollTo: { y: '#price-form', offsetY: 80 },
  })
}
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
    @media (min-width: $L) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__li {
    line-height: 130%;
    padding: 0 0 0 37px;
    background: url('./img/arrow.svg') 0 5px no-repeat;
  }
  &__buttons {
    display: flex;
    column-gap: 30px;
    row-gap: 10px;
    flex-wrap: wrap;
  }
  &__button {
    padding: em(12, 20) em(60, 20);
    font-weight: 600;
    font-size: inherit;
    color: #34b3cf;
    border: 2px solid #34b3cf;
    transition: $trTime;
    will-change: transform;
    @media (max-width: calc($L - 1px)) {
      flex-grow: 1;
    }
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
  &__image {
    object-position: center 85%;
  }
}
</style>
