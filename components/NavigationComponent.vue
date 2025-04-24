<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="route in navigation" :key="route.name" class="nav__li">
        <NuxtLink class="nav__link" :to="route.href">
          {{ route.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import navigation from "@/assets/json/navigation";
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    &__list {
      display: grid;
      row-gap: 10px;
      column-gap: tovw(50, 1440);
      margin: 0 auto;
      @media (min-width: $L) {
        grid-auto-flow: column;
        grid-template-rows: repeat(3, 1fr);
      }
      @media (min-width: toem(1200)) {
        grid-template-rows: repeat(2, 1fr);
      }
      @media (min-width: $XL) {
        column-gap: 50px;
      }
    }
    &__link {
      color: inherit;
      text-transform: uppercase;
      transition: $trTime;
      &:visited {
        color: inherit;
      }
      @include hover {
        transition: $hoverTime;
        color: #fa8013;
      }
      &.router-link-active {
        color: #fa8013;
      }
    }
  }
</style>
