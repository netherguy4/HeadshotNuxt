<template>
  <section class="hero">
    <div class="container">
      <div class="hero__container">
        <div class="hero__content">
          <address class="hero__address subtitle">
            <icon name="bxs:map" width="1.1875em" height="1.1875em"></icon>
            одеса, вул. Сергія Ядова, 6
          </address>
          <h1 class="hero__title title"
            >Найбільший пейнтбол та страйкбол в україні</h1
          >
          <ul class="hero__list" id="hero-list">
            <ClientOnly>
              <li style="order: 1" class="hero__li">Криті/відкриті локації</li>
              <li
                :style="isLargeScreen ? 'order: 2' : 'order: 4'"
                class="hero__li"
              >
                Велика площа на 22000 кв.м.
              </li>
              <li
                :style="isLargeScreen ? 'order: 4' : 'order: 2'"
                class="hero__li"
                style="grid-row: span 2"
              >
                Більше 150 комплектів обладнання для пейнтболу та страйкболу
              </li>
              <li style="order: 5" class="hero__li"
                >Можливість організації харчування на полігоні</li
              >
              <li style="order: 6" class="hero__li">Більше 15 років досвіду</li>
            </ClientOnly>
          </ul>
          <div class="hero__buttons">
            <button @click="scrollToForm" class="hero__button"
              >Замовити гру</button
            >
            <button @click="scrollToForm" class="hero__button"
              >Порахувати вартість</button
            >
          </div>
        </div>
        <ClientOnly>
          <teleport defer :disabled="isLargeScreen" to="#hero-list">
            <component
              :is="isLargeScreen ? 'div' : 'li'"
              :style="isLargeScreen ? '' : 'order: 3;'"
              class="hero__image-wrapper image-wrapper"
            >
              <SvgoVectorArrow filled class="hero__image--arrow image" />
              <SvgoDash filled class="hero__image--dash image" />
              <NuxtImg
                loading="eager"
                src="/img/hero/front.png"
                preload
                :quality="80"
                format="webp"
                fit="inside"
                sizes="200px xs:450px sm:700px md:1000px lg:800px"
                width="792"
                height="792"
                alt="player"
                class="hero__image--front image"
              />
              <NuxtImg
                loading="eager"
                src="/img/hero/back.png"
                preload
                format="webp"
                fit="inside"
                sizes="200px xs:450px sm:700px md:900px lg:700px"
                width="680"
                height="680"
                alt="player"
                class="hero__image--back image"
              />
            </component>
          </teleport>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
  gsap.registerPlugin(ScrollToPlugin);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const scrollToForm = () => {
    gsap.to(window, {
      duration: 2,
      ease: "circ.inOut",
      scrollTo: { y: "#price-form", offsetY: 80 },
    });
  };
</script>

<style lang="scss" scoped>
  .hero {
    color: #125a28;
    overflow: hidden;
    @include adaptiv-font(20, 16);
    &__container {
      position: relative;
      min-height: 600px;
      padding-top: 40px;
      display: flex;
      align-items: center;
      @media (min-width: $L) {
        padding-top: 20px;
      }
    }
    &__content {
      display: flex;
      position: relative;
      z-index: 2;
      flex-direction: column;
      justify-content: center;
      backdrop-filter: blur(2px);
      @media (min-width: $L) {
        max-width: em(700, 20);
      }
    }
    &__address {
      text-transform: uppercase;
      font-style: normal;
      color: #fa8013;
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 10px 0;
    }
    &__list {
      flex: 1;
      display: grid;
      column-gap: torem(50);
      row-gap: torem(5);
      padding: 30px 0;
      min-height: em(532, 16);
      @media (min-width: $L) {
        min-height: em(174, 20);
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &__li {
      line-height: 130%;
      padding: 0 0 0 37px;
      background: url("/svg/arrow.svg") 0 5px no-repeat;
    }
    &__buttons {
      display: flex;
      column-gap: 30px;
      row-gap: 10px;
      flex-wrap: wrap;
    }
    &__button {
      padding: em(12, 20) em(60, 20);
      font-weight: 600;
      font-size: inherit;
      color: #34b3cf;
      border: 2px solid #34b3cf;
      transition: $trTime;
      will-change: transform;
      @media (max-width: calc($L - 1px)) {
        flex-grow: 1;
      }
      @include hover {
        transition: $hoverTime;
        box-shadow: 0 0 5px #34b3cf;
        color: #fff;
        background: rgba(#34b3cf, 0.5);
        border-color: rgba(#34b3cf, 0.5);
        scale: 1.05;
      }
      &:active {
        transition: $activeTime;
        box-shadow: none;
        scale: 1;
      }
      &:first-child {
        background: #fa8013;
        color: #fff;
        border: 2px solid #fa8013;
        @include hover {
          box-shadow: 0 0 5px #fa8013;
          color: #fa8013;
          background: rgba(#fff, 0.5);
        }
        &:active {
          box-shadow: none;
        }
      }
    }
    &__image-wrapper {
      pointer-events: none;
      position: relative;
      transform-origin: top;
      overflow: visible;
      padding: 0 0 percent(301, 320);
      @media (min-width: $L) {
        position: absolute;
        width: 600px;
        height: 600px;
        padding: 0;
        top: 0;
        right: -70px;
        scale: 1.1;
      }
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0;
        height: percent(221, 522);
        border-radius: 50% 50% 0 0;
        background: linear-gradient(
          190deg,
          transparent 26.66%,
          rgba(221, 224, 223, 0.5) 49.34%,
          #e5ebea 65.39%
        );
      }
    }
    &__image {
      &--front {
        object-fit: contain;
        scale: 1.2;
        z-index: 1;
      }
      &--back {
        content: "";
        translate: 0% 16%;
        scale: 0.95;
        rotate: 5deg;
      }
      &--dash {
        display: none;
        @media (min-width: $L) {
          display: initial;
          translate: -250px 20px;
          width: 504px;
          height: 62px;
        }
      }
      &--arrow {
        display: none;
        @media (min-width: $L) {
          display: initial;
          translate: -257px 75px;
          width: 15px;
          height: 16px;
        }
      }
    }
  }
</style>
