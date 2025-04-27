<template>
  <div class="card">
    <div class="card__container image-wrapper">
      <NuxtLink :to="props.href" :aria-label="props.title" class="card__link" />
      <SvgoLinkArrow class="card__image--link" />
      <h3 class="card__title">{{ title }}</h3>
      <NuxtImg
        loading="lazy"
        width="424"
        height="218"
        format="webp"
        :quality="60"
        :src="`/img/pros/${props.image}.jpg`"
        :alt="props.title"
        class="card__image image"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
    image: String,
    href: String,
  });
</script>

<style lang="scss" scoped>
  .card {
    border: 2px solid #34b3cf;
    &__container {
      height: 100%;
      padding-bottom: percent(220, 427);
    }
    &__link {
      position: absolute;
      inset: 0;
      z-index: 3;
    }
    &__image--link {
      transition: $trTime;
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
      stroke: #34b3cf;
    }
    &__title {
      transition: $trTime;
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 1;
      text-transform: uppercase;
    }
    &__image {
      background: rgba(18, 90, 40, 0.4);
      filter: blur(2.5px);
      opacity: 0.6;
      transition: $trTime;
    }
    @include hover {
      .card {
        &__image {
          transition: $hoverTime;
          filter: blur(0);
        }
        &__title {
          transition: $hoverTime;
          bottom: 50%;
          left: 50%;
          translate: -50% 50%;
          scale: 1.2;
        }
        &__image--link {
          stroke: #fa8013;
        }
      }
    }
  }
</style>
