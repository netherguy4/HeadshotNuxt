<template>
  <section class="packs">
    <div class="container">
      <h2 class="title packs__title">Пакети</h2>
      <Component v-if="isBigScreen" :is="dashCurved" class="packs__deco" />
      <div class="packs__content">
        <PacksCard
          v-for="item in props.data"
          :name="item.name"
          :price="item.price"
          :list="item.list"
        />
        <PacksAddon />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'
import PacksCard from './PacksCard.vue'
import PacksAddon from './PacksAddon.vue'
import dashCurved from '@/assets/svg/dash-curved.svg'

const isBigScreen = useMediaQuery('(min-width: 768px)')

const props = defineProps({
  data: Array,
})
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
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    // z-index: ;
    pointer-events: none;
    height: percent(347, 670);
    stroke: #fff;
  }
  &__content {
    position: relative;
    @include adaptiv-grid(1, 4, 250px, 20px, 30px);
  }
}
</style>
