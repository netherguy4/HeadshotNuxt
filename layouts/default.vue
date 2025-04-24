<template>
  <div class="wrapper">
    <Header class="wrapper__header" />
    <slot></slot>
    <Footer class="wrapper__footer" />
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    &__header,
    &__footer {
      flex-shrink: 0;
      @include adaptiv-font(19, 13);
    }
    &__footer {
      margin-top: auto;
      min-height: 130px;
    }
  }
</style>
