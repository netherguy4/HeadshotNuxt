<template>
  <section class="why">
    <div class="container">
      <div class="why__title title">Чому саме ми?</div>
      <div class="why__content">
        <div class="why__image-wrapper image-wrapper">
          <div v-html="frame1" class="why__image image"></div>
        </div>
        <div class="why__text-wrapper">
          <h6 class="why__subtitle subtitle">Найбільший клуб в Україні</h6>
          <p class="why__text">
            У нашому клубі є 6 різних локацій, загальний розмір яких становить більше ніж 22000 м2!
            Кожна локація унікальна, завдяки чому кожна гра у нас буде цікавою та новою!
          </p>
        </div>
        <div class="why__text-wrapper">
          <h6 class="why__subtitle subtitle">Якісне єкіпірування</h6>
          <p class="why__text">
            Ми ретельно перевіряємо обладнання і часто його оновлюємо, що може гарантувати безпеку
            при грі! Слідкувати за оновленнями можна у нашому Instagram!
          </p>
        </div>
        <div class="why__image-wrapper image-wrapper">
          <div v-html="frame2" class="why__image image"></div>
        </div>
        <div class="why__image-wrapper image-wrapper">
          <div v-html="frame3" class="why__image image"></div>
        </div>
        <div class="why__text-wrapper">
          <h6 class="why__subtitle subtitle">Досвід роботи</h6>
          <p class="why__text">
            Ми працюємо на цьому ринку вже більше 15 років, і за цей час набули величезного досвіду
            та експерності в організації захоплюючих ігор та корпоративних подій.
          </p>
        </div>
        <div class="why__text-wrapper">
          <h6 class="why__subtitle subtitle">Широкий вибір послуг</h6>
          <p class="why__text">
            Наш клуб пропонує широкий вибір послуг, які задовольнять будь-які ваші побажання. Від
            інтенсивних корпоративних ігор до захоплюючих квестів до Дня народження!
          </p>
        </div>
        <div class="why__image-wrapper image-wrapper">
          <div v-html="frame4" class="why__image image"></div>
        </div>
        <div class="why__image-wrapper image-wrapper">
          <div v-html="frame5" class="why__image image"></div>
        </div>
        <div class="why__text-wrapper">
          <h6 class="why__subtitle subtitle">З нами грати вигідно</h6>
          <p class="why__text">
            Ми регулярно оновлюємо наші спеціальні пропозиції, щоб зробити ваше відвідування ще
            приємнішим. Ви можете отримати знижки на ігри та спеціальні пропозиції для корпоративів!
          </p>
        </div>
      </div>
    </div>
    <!-- ! DO NOT TOUCH THIS -->
    <!-- * This section is nessesary for svg pictures to work properly in production -->
    <svg style="height: 0">
      <defs>
        <pattern id="pattern0_572_36" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_572_36"
            transform="matrix(0.000380241 0 0 0.000455192 -0.0151382 -0.153851)"
          ></use>
        </pattern>
        <image
          id="image0_572_36"
          width="2800"
          height="2800"
          preserveAspectRatio="none"
          href="/img/why-us/image1.webp"
        ></image>
        <pattern id="pattern0_171_776" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_171_776"
            transform="matrix(0.000312922 0 0 0.000368596 -0.0714205 0)"
          />
        </pattern>
        <image
          id="image0_171_776"
          width="4200"
          height="2800"
          preserveAspectRatio="none"
          href="/img/why-us/image2.webp"
        />
        <pattern id="pattern0_171_775" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_171_775"
            transform="matrix(0.000312922 0 0 0.000368596 -0.0714205 0)"
          />
        </pattern>
        <image
          id="image0_171_775"
          width="3500"
          height="2800"
          preserveAspectRatio="none"
          href="/img/why-us/image3.webp"
        />
        <pattern id="pattern0_171_774" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_171_774"
            transform="matrix(0.000440917 0 0 0.000538608 0 -0.257347)"
          />
        </pattern>
        <image
          id="image0_171_774"
          width="2300"
          height="3450"
          preserveAspectRatio="none"
          href="/img/why-us/image4.webp"
        />
        <pattern id="pattern0_572_38" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use
            xlink:href="#image0_572_38"
            transform="matrix(0.000279592 0 0 0.000372738 -0.040706 -0.00325347)"
          />
        </pattern>
        <image
          id="image0_572_38"
          width="4000"
          height="3000"
          preserveAspectRatio="none"
          href="/img/why-us/image5.webp"
        />
      </defs>
    </svg>
    <!-- * -->
    <!-- ! -->
  </section>
</template>

<script setup>
// ! DO NOT TOUCH
import frame1 from '@/assets/svg/why-us/frame1.svg?raw'
import frame2 from '@/assets/svg/why-us/frame2.svg?raw'
import frame3 from '@/assets/svg/why-us/frame3.svg?raw'
import frame4 from '@/assets/svg/why-us/frame4.svg?raw'
import frame5 from '@/assets/svg/why-us/frame5.svg?raw'
// !!!

import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const init = () => {
  const frames = document.querySelectorAll('.why__image')
  frames.forEach((frame) => {
    gsap.set(frame.children[0].children[0], {
      overflow: 'visible',
    })
  })
  const subtitles = document.querySelectorAll('.why__subtitle')
  const width = ['630', '535', '530', '555', '585']
  subtitles.forEach((subtitle, index) => {
    gsap
      .timeline({
        defaults: { duration: 0.35 },
        scrollTrigger: {
          trigger: subtitle,
          start: '+=60 bottom',
          toggleActions: 'play play play reverse',
        },
      })
      .fromTo(
        subtitle.parentElement,
        {
          autoAlpha: 0,
          y: 100,
        },
        { autoAlpha: 1, y: 0 },
      )
      .to(subtitle.parentElement, {
        '--width': width[index] ? width[index] : '0',
      })
      .to(subtitle.parentElement, {
        '--scale': '1',
        ease: 'back(2)',
      })
  })
}

onMounted(init)
</script>

<style lang="scss" scoped>
.why {
  background: #125a28;
  color: #fff;
  @include adaptiv-font(20, 16);
  &__title {
    text-align: right;
    margin: 0 0 18px 0;
    @media (min-width: $L) {
      margin: 0;
      text-align: center;
    }
  }
  &__content {
    display: grid;
    grid-auto-rows: auto 1fr;
    column-gap: 272px;
    align-items: center;
    padding: 25px 0 0;
    background:
      url('./img/why-us/dash-straight.svg') 8px top/2px 2255.5px repeat-y,
      url('./img/why-us/white-ellipse.svg') 0 0/18px 18px no-repeat,
      url('./img/why-us/white-ellipse.svg') bottom left/18px 18px no-repeat;
    @media (min-width: $L) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      grid-auto-rows: 1fr;
      background:
        url('./img/why-us/dash-curved.svg') center/auto 95% no-repeat,
        url('./img/why-us/white-ellipse.svg') 47.5% 2% no-repeat,
        url('./img/why-us/white-ellipse.svg') 51.6% 98% no-repeat;
    }
  }
  &__image-wrapper {
    margin: 10% 0 0 32px;
    padding-bottom: percent(264, 279.5);
    @media (min-width: $L) {
      padding-bottom: percent(595, 487);
      margin: 0 0 -40% 0;
    }
  }
  &__text-wrapper {
    --scale: 0;
    --before-translate: 0% 50%;
    @media (min-width: $L) {
      &:nth-child(even) {
        padding-left: percent(78, 534);
        --right: 0;
        --before-right: calc(var(--width) * 1px);
        --before-right-vw: calc(var(--width) / 1440 * 100vw);
        --before-translate: 50% 50%;
      }
      &:nth-child(odd) {
        padding-right: percent(78, 534);
        --left: 0;
        --before-left: calc(var(--width) * 1px);
        --before-left-vw: calc(var(--width) / 1440 * 100vw);
        --before-translate: -50% 50%;
      }
    }
    @media (max-width: calc($L - 1px)) {
      &:nth-child(2) {
        grid-row: 1;
      }
      &:nth-child(6) {
        grid-row: 5;
      }
      &:nth-child(10) {
        grid-row: 9;
      }
    }
  }
  &__subtitle {
    padding: 0 0 20px 32px;
    text-transform: uppercase;
    position: relative;
    @media (min-width: $L) {
      padding: 0 0 40px 0;
    }
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 10.5px;
      left: -1px;
      translate: var(--before-translate);
      border-radius: 50%;
      z-index: 1;
      background: #34b3cf;
      @media (min-width: $L) {
        right: var(--before-right-vw, auto);
        left: var(--before-left-vw, auto);
        width: 33px;
        height: 33px;
        bottom: 20px;
        scale: var(--scale);
      }
      @media (min-width: $XL) {
        right: var(--before-right, auto);
        left: var(--before-left, auto);
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      border-bottom: #ff8a00 solid 1px;
      @media (min-width: $L) {
        left: var(--left, auto);
        right: var(--right, auto);
        width: tovw(var(--width, 0), 1440);
        border-bottom: #ff8a00 solid 2.5px;
        bottom: 20px;
      }
      @media (min-width: $XL) {
        width: calc(var(--width, 0) * 1px);
      }
    }
  }
  &__text {
    padding-left: 32px;
    @media (min-width: $L) {
      padding-left: 0;
    }
  }
}
</style>
