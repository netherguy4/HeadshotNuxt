<template>
  <section class="contacts">
    <div class="container contacts__container">
      <div class="contacts__map-wrapper image-wrapper">
        <LazyMainContactsMap />
      </div>
      <address class="contacts__text">
        <h2 class="contacts__title title">Наші Контакти</h2>
        <p class="contacts__subtitle subtitle">
          Долучайтесь до пригод у HeadShot! Чекаємо на вас, щоб подарувати
          незабутні емоції та адреналін!
        </p>
        <div class="contacts__address-container">
          <div class="contacts__address">
            <icon name="mage:phone-fill" class="contacts__address-icon" />
            <div class="contacts__link-container">
              <a href="tel:+380677992242" class="contacts__link"
                >+38(067) 799 22 42</a
              >
              <span class="contacts__fraction">або</span>
              <a href="tel:+380633977677" class="contacts__link"
                >+38(063) 397 76 77</a
              >
            </div>
          </div>
          <div class="contacts__address">
            <icon name="tabler:clock-filled" class="contacts__address-icon" />
            Пн-вс: 10:00-20:00
          </div>
          <div class="contacts__address">
            <icon name="bxs:map" class="contacts__address-icon" />
            м. Одеса, вул. Сергія Ядова, 6
          </div>
        </div>
        <div class="contacts__socials">
          <a
            href="https://www.instagram.com/headshot_od/"
            class="contacts__social-link image-wrapper"
            aria-label="Instagram"
            target="_blank"
          >
            <icon class="contacts__social-icon" name="mdi:instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@headshot_od?_t=8qCz6iGfLYz&_r=1"
            aria-label="Tiktok"
            target="_blank"
            class="contacts__social-link image-wrapper"
          >
            <icon class="contacts__social-icon" name="ic:baseline-tiktok" />
          </a>
          <a
            href=""
            aria-label="Viber"
            target="_blank"
            class="contacts__social-link image-wrapper"
          >
            <icon class="contacts__social-icon _small" name="cib:viber" />
          </a>
          <a
            href="https://t.me/headshot_od_ua"
            aria-label="Telegram"
            target="_blank"
            class="contacts__social-link image-wrapper"
          >
            <icon class="contacts__social-icon" name="mdi:telegram" />
          </a>
        </div>
      </address>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .contacts {
    color: #fff;
    background: #125a28;
    @include adaptiv-font(20, 16);
    &__container {
      display: grid;
      align-items: center;
      gap: 20px;
      column-gap: 70px;
      @media (min-width: $M) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &__map-wrapper {
      aspect-ratio: 1;
      grid-row: 2;
      overflow: hidden;
      @media (min-width: $M) {
        grid-row: 1;
      }
    }
    &__map {
      aspect-ratio: 1;
    }
    &__text {
      font-style: normal;
      @media (min-width: $M) {
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    &__title {
      text-align: center;
      margin: 0 0 30px 0;
    }
    &__subtitle {
      margin: 0 0 25px 0;
    }
    &__address-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 0 10px 20px;
      @media (min-width: $L) {
        background: url("/svg/arrow-back.svg") 10px calc(100% - 20px) no-repeat;
        padding: 0 60px 70px 10px;
        margin-right: -50px;
      }
    }
    &__address {
      display: flex;
      column-gap: 30px;
      align-items: center;
      &-icon {
        width: 1.85em;
        height: 1.85em;
        color: #fa8013;
        flex-shrink: 0;
      }
    }
    &__link {
      flex-shrink: 0;
      color: inherit;
      transition: $trTime;
      @include hover {
        transition: $hoverTime;
        color: #fa8013;
      }
    }
    &__link-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      row-gap: 5px;
      column-gap: percent(20, 515);
      @media (min-width: $L) {
        flex-direction: row;
      }
    }
    &__fraction {
      display: none;
      @media (min-width: $L) {
        display: block;
      }
    }
    &__socials {
      display: flex;
      gap: 15px;
      padding: 0 8px;
      justify-content: center;
      @media (min-width: $M) {
        justify-content: start;
      }
      @media (min-width: $L) {
        gap: 30px;
      }
    }
    &__social-link {
      flex-shrink: 0;
      width: 40px;
      padding: 0 0 40px;
      background: #34b3cf;
      border-radius: 50%;
      color: #fff;
      transition: $trTime;
      @include hover {
        transition: $hoverTime;
        background: #fff;
        color: #34b3cf;
      }
    }
    &__social-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 26px;
      height: 26px;
      &._small {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
