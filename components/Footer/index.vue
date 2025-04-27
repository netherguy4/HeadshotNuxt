<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo-container">
        <NuxtLink
          to="/"
          aria-label="Повернутись на головну."
          class="image-wrapper footer__logo"
        >
          <NuxtImg
            width="250"
            height="33"
            aria-hidden="true"
            loading="lazy"
            class="image"
            src="/img/logo.png"
          />
        </NuxtLink>
        <span class="footer__copy">Політика Конфіденційності</span>
      </div>
      <NavigationComponent class="footer__navigation" />
      <img
        alt="Разробник сайту. UPack."
        src="/svg/dev.svg"
        loading="lazy"
        class="upack-logo"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    color: #125a28;
    font-weight: 600;
    &__container {
      padding-top: 71px;
      padding-bottom: 40px;
      display: grid;
      align-items: center;
      gap: 30px;
      justify-items: center;
      text-align: center;
      @media (min-width: $M) {
      }
      @media (min-width: $L) {
        grid-template-columns: auto 1fr auto;
        text-align: left;
        justify-items: stretch;
        padding-top: 23px;
        padding-bottom: 22px;
      }
    }
    &__logo {
      width: 179px;
      display: block;
      padding: 0 0 24px;
      margin: 0 auto 5px;
      filter: brightness(0) saturate(100%) invert(20%) sepia(16%)
        saturate(7177%) hue-rotate(119deg) brightness(92%) contrast(86%);
      @media (min-width: $M) {
        margin: 0 0 5px 0;
        padding: 0 0 33px;
        width: 250px;
      }
    }
    &__copy {
      text-transform: uppercase;
    }
  }
</style>
