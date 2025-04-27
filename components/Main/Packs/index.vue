<template>
  <section class="packs">
    <div class="container">
      <h2 class="title packs__title">Пакети</h2>
      <img
        src="/svg/dash-curved-deco.svg"
        alt=""
        loading="lazy"
        class="packs__deco"
      />
      <div class="packs__content">
        <MainPacksCard
          v-for="item in data"
          :name="item.name"
          :price="item.price"
          :list="item.list"
        />
        <MainPacksAddon />
      </div>
    </div>
  </section>
</template>

<script setup>
  import packs from "assets/json/packs";
  const route = useRoute();
  const data = computed(() => {
    if (route.name === "airsoft") {
      return packs[0].strikeball;
    } else return packs[0].paintball;
  });
</script>

<style lang="scss" scoped>
  .packs {
    position: relative;
    background: #125a28;
    color: #fff;
    @include adaptiv-font(20, 18);
    &__title {
      margin: 0 0 30px 0;
      padding-top: 20px;
    }
    &__deco {
      display: none;
      @media (min-width: $M) {
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%)
          saturate(0%) hue-rotate(220deg) brightness(103%) contrast(102%);
        display: initial;
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
        height: 307px;
        stroke: #fff;
      }
    }
    &__content {
      position: relative;
      @include adaptiv-grid(1, 4, 250px, 20px, 30px);
    }
  }
</style>
