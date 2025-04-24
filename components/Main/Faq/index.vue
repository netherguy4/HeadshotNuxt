<template>
  <section class="faq">
    <div class="container">
      <h2 class="title faq__title">Відповіді на найчастіші питання</h2>
      <div class="faq__content">
        <div class="faq__spoiler-section">
          <faq-spoiler
            class="faq__spoiler"
            @click="addSpoiler"
            :active="activeSpoiler"
            title="Яка мінімальна кількість гравців?"
          >
            Ми регулярно оновлюємо наші спеціальні пропозиції, щоб зробити ваше відвідування ще
            приємнішим. Ви можете отримати знижки на ігри та спеціальні пропозиції для корпоративів!
          </faq-spoiler>
          <faq-spoiler
            @click="addSpoiler"
            class="faq__spoiler"
            :active="activeSpoiler"
            title="Чи проходять у нас збірні ігри?"
          >
            Так, у нас проходять збірні ігри. Якщо вам не вистачає гравців для повноцінної команди,
            ви можете приєднатися до інших учасників. У нас є загальний чат, де регулярно
            організовуються такі збори.
          </faq-spoiler>
          <faq-spoiler
            @click="addSpoiler"
            class="faq__spoiler"
            :active="activeSpoiler"
            title="З якого віку можна грати?"
          >
            У нас можна грати з різного віку залежно від виду гри. Для пейнтболу вік від 6 років,
            для джеліболу — від 4 років, а для страйкболу — від 14 років. Неповнолітні учасники
            можуть брати участь у іграх лише за наявності супроводу відповідальної особи.
          </faq-spoiler>
          <faq-spoiler
            @click="addSpoiler"
            class="faq__spoiler"
            :active="activeSpoiler"
            title="Чим можна зайнятися після гри?"
          >
            Після захопливої гри у нашому клубі є багато можливостей для відпочинку та розваг. Ви
            можете скористатися нашою кухнею та насолодитися смачними стравами, відпочити у затишних
            альтанках або місцях для відпочинку.
          </faq-spoiler>
          <faq-spoiler
            @click="addSpoiler"
            class="faq__spoiler"
            :active="activeSpoiler"
            title="Чи відпирається фарба?"
          >
            Так, використовувана в нашому клубі фарба для пейнтболу повністю відмивається. Вона
            виготовлена з нетоксичних компонентів і легко видаляється з одягу та шкіри звичайним
            мийним засобом.
          </faq-spoiler>
        </div>
        <div class="faq__image-wrapper image-wrapper">
          <img
            loading="lazy"
            class="faq__image image"
            src="/img/faq-image.webp"
            alt="Відповіді на найчастіші питання"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import FaqSpoiler from './FaqSpoiler.vue'

const activeSpoiler = ref()
const addSpoiler = (el) => {
  activeSpoiler.value === el.target
    ? (activeSpoiler.value = null)
    : (activeSpoiler.value = el.target)
}
</script>

<style lang="scss" scoped>
.faq {
  color: #fff;
  background: #125a28;
  @include adaptiv-font(20, 16);
  &__title {
    margin: 0 0 50px 0;
    text-align: center;
  }
  &__content {
    display: grid;
    // align-items: center;
    column-gap: tovw(84, 1440);
    row-gap: 20px;
    @media (min-width: $L) {
      grid-template-columns: minmax(em(685, 20), 1.2fr) 1fr;
    }
    @media (min-width: $XL) {
      column-gap: 84px;
    }
  }
  &__spoiler-section {
    align-self: center;
  }
  &__spoiler {
    border-bottom: 2px solid #fff;
    padding: 0.5em 0;
  }
  &__image-wrapper {
    width: 100%;
    padding-bottom: percent(320, 336);
    @media (min-width: $M) {
      padding-bottom: percent(300, 571);
    }
    @media (min-width: $L) {
      padding-bottom: percent(600, 571);
    }
  }
  &__image {
    object-position: top;
  }
}
</style>
