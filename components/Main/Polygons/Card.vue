<template>
  <div class="card">
    <div class="card__container">
      <div class="card__wrapper image-wrapper">
        <NuxtImg
          v-if="props.image"
          loading="lazy"
          sizes="420px"
          width="420"
          height="300"
          format="webp"
          :src="`/img/polygons/${props.image}`"
          :alt="props.title"
          class="card__image image"
        />
        <div class="card__title">
          {{ title }} <span class="card__title-span">{{ span }}</span>
        </div>
        <div class="card__desc">{{ square }} м²</div>
      </div>
      <ul class="card__list">
        <li v-for="li in list" class="card__li">{{ li }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    span: String,
    square: Number,
    list: Array,
    image: String,
  });
</script>

<style lang="scss" scoped>
  .card {
    @include adaptiv-font(20, 18);
    // &__container {
    // }
    &__wrapper {
      border: 2px solid #34b3cf;
      padding-bottom: percent(160, 320);
      @media (min-width: $M) {
        padding-bottom: percent(291, 427);
      }
    }
    &__image {
      opacity: 0.6;
    }
    &__title {
      position: absolute;
      left: 20px;
      bottom: 20px;
      text-transform: uppercase;
      @include adaptiv-font(32, 20);
      &-span {
        text-transform: none;
        @include adaptiv-font(20, 18);
      }
    }
    &__desc {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      background: #34b3cf;
    }
    &__list {
      display: grid;
      row-gap: torem(5);
      padding: 10px 0 0;
    }
    &__li {
      line-height: 130%;
      padding: 0 0 0 37px;
      background: url("/svg/arrow.svg") 0 5px no-repeat;
    }
  }
</style>
