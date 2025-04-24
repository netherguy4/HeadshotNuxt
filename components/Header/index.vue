<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/">
        <SvgoLogo id="logo" class="header__logo" />
      </NuxtLink>
      <ClientOnly>
        <NavigationComponent class="header__navigation" />
      </ClientOnly>
      <address class="header__contacts">
        <SvgoPhone class="header__phone" />
        <a href="tel:+38(067)799 22 42" class="header__contact-number"
          >+38(067)799 22 42</a
        >
        <a href="tel:+38(063)397 76 77" class="header__contact-number"
          >+38(063)397 76 77</a
        >
      </address>
      <button
        @click="toggleDrawer"
        class="header__burger-button"
        aria-label="Відкрити меню"
      >
        <IconBurger
          class="header__burger"
          :class="drawerOpened ? '_active' : ''"
        />
      </button>
    </div>
    <DropdownComponent />
  </header>
</template>

<script setup>
  const drawerOpened = useState("drawerOpened", () => false);
  const toggleDrawer = () => {
    drawerOpened.value = !drawerOpened.value;
  };
</script>

<style lang="scss" scoped>
  .header {
    background: #125a28;
    color: #fff;
    font-weight: 600;
    position: relative;
    z-index: 10;
    &__container {
      height: torem(81);
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      @media (min-width: $M) {
        height: torem(120);
      }
      @media (min-width: $L) {
        gap: 30px;
      }
    }
    &__navigation {
      display: none;
      @media (min-width: $L) {
        display: grid;
      }
    }
    &__logo {
      color: #fff;
      width: tovw(132, 360);
      min-width: 132px;
      max-width: 250px;
      height: percent(33, 250);
      margin: 0;
    }
    &__phone {
      position: absolute;
      width: 26px;
      height: 26px;
      top: 50%;
      left: 0;
      margin: 0;
      translate: 0 -45%;
    }
    &__contacts {
      display: none;
      @media (min-width: $L) {
        display: flex;
        flex-direction: column;
        font-style: normal;
        gap: 10px;
        position: relative;
        padding: 0 0 0 35px;
      }
    }
    &__contact-number {
      color: inherit;
      &:visited {
        color: inherit;
      }
      @include hover {
        transition: $hoverTime;
        color: #fa8013;
      }
    }
    &__burger {
      width: 28px;
      height: 28px;
      color: #125a28;
      margin: 0;
      &-button {
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        background: #d9d9d9;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        @media (min-width: $L) {
          display: none;
        }
      }
    }
  }
</style>
