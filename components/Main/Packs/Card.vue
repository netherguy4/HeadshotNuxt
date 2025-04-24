<template>
  <div class="card">
    <div class="card__container">
      <div class="card__title-wrapper">
        <div class="card__subtitle">Пакет</div>
        <div class="card__title">{{ name }}</div>
      </div>
      <div class="card__content">
        <ul class="card__list">
          <li v-for="item in props.list" class="card__li">{{ item }}</li>
        </ul>
        <div class="card__price">{{ price }} грн / люд</div>
      </div>
      <button class="card__button" @click="scrollToForm">Замовити гру</button>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const props = defineProps({
  name: String,
  price: Number,
  list: Array,
})

const scrollToForm = () => {
  gsap.to(window, {
    duration: 2,
    ease: 'circ.inOut',
    scrollTo: { y: '#price-form', offsetY: 80 },
  })
}
</script>

<style lang="scss" scoped>
.card {
  &__container {
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__title-wrapper {
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    background: #34b3cf;
    padding: 10px;
    font-weight: 600;
    @media (min-width: $M) {
      padding: 20px 10px 10px;
    }
  }
  &__subtitle {
    font-size: 20px;
  }
  &__title {
    @include adaptiv-font(32, 20);
  }
  &__content {
    padding: 20px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
  &__list {
    display: grid;
    flex: 1 1 auto;
    row-gap: torem(5);
    padding: 10px 0 0;
    color: #125a28;
    margin: 0 0 20px 0;
    @include adaptiv-font(20, 18);
  }
  &__li {
    line-height: 130%;
    padding: 0 0 0 37px;
    background: url('./img/arrow.svg') 0 5px no-repeat;
  }
  &__price {
    color: #fa8013;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }
  &__button {
    background: #fa8013;
    padding: em(12, 20);
    @include adaptiv-font(20, 18);
  }
}
</style>
