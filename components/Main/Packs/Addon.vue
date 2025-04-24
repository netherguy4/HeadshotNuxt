<template>
  <div class="card">
    <div class="card__container">
      <div class="card__title-wrapper">
        <div class="card__title">доповнення</div>
      </div>
      <div class="card__content">
        <ul class="card__list">
          <li class="card__li">Жилет</li>
          <li class="card__li">Наколінники</li>
          <li class="card__li">Налокітники</li>
          <li class="card__li">Подовжений ствол</li>
          <li class="card__li">Захист шиї</li>
          <li class="card__li">Бандаж</li>
        </ul>
      </div>
      <div class="card__price">по 50 грн</div>
    </div>
  </div>
</template>

<script setup></script>

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
      padding: 20px;
    }
  }
  &__title {
    @include adaptiv-font(32, 20);
  }
  &__content {
    padding: 20px;
    flex: 1 1 auto;
  }
  &__list {
    display: grid;
    row-gap: torem(5);
    padding: 10px 0 0;
    color: #125a28;
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
    margin: 0 0 20px 0;
  }
}
</style>
