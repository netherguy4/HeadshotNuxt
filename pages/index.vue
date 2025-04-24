<template>
  <Main class="main">
    <MainHero class="main__hero" />
    <MainPros class="main__pros" />
    <MainPromo class="main__promo" />
    <!-- <MainWhyUs class="main__why-us" /> -->
    <!-- <MainPrice class="main__price" /> -->
    <!-- <MainFaq class="main__faq" /> -->
    <!-- <MainSponsors class="main__sponsors" /> -->
    <!-- <MainContacts class="main__contacts" /> -->
  </Main>
</template>

<style lang="scss" scoped>
  .main {
    &__hero {
      padding-bottom: 80px;
      padding-top: 0px;
      @media (min-width: $L) {
        padding-top: 30px;
        padding-bottom: 55px;
      }
    }
    &__pros,
    &__promo,
    &__faq,
    &__sponsors,
    &__why-us,
    &__price {
      padding: 80px 0 80px;
      @media (min-width: $M) {
        padding: 80px 0 100px;
      }
    }
    &__contacts {
      padding: 80px 0 80px;
      @media (min-width: $M) {
        padding: 100px 0 100px;
      }
    }
  }
</style>
