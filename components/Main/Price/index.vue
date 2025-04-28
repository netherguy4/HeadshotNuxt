<template>
  <section class="price">
    <div class="container">
      <FormKit
        type="form"
        submit-label="Замовити гру"
        @submit="submitHandler"
        :submit-attrs="{
          inputClass: 'price__submit',
          outerClass: 'price__submit-container',
          wrapperClass: 'price__submit-wrapper',
          ignore: false,
          help: `${parseInt(summTransition)} грн`,
          helpClass: 'price__submit-help',
        }"
        id="price-form"
        class="price__form"
      >
        <div class="price__title-wrapper">
          <h2 class="title price__title">Калькулятор вартості</h2>
          <FormKit
            type="select"
            name="service"
            aria-label="Оберіть тип гри"
            :classes="{
              input: 'price__select',
              wrapper: 'price__select-inner',
            }"
            :options="['Пейнтбол', 'Страйкбол']"
            v-model="select"
          />
        </div>
        <div class="price__content">
          <FormKit
            name="players"
            type="number"
            label="Кількість гравців:"
            value="8"
            min="4"
            v-model="players"
            :max="select === 'Пейнтбол' ? '200' : '12'"
            :classes="{
              wrapper: 'price__input-wrapper',
              input: 'price__input',
              label: 'price__input-label',
            }"
          />
          <FormKit
            type="date"
            name="date"
            :value="dateFormatted.join('-')"
            :min="dateFormatted.join('-')"
            :max="
              [Number(dateFormatted[0]) + 1, ...dateFormatted.slice(1)].join(
                '-'
              )
            "
            label="Дата:"
            :classes="{
              wrapper: 'price__input-wrapper',
              input: 'price__input',
              label: 'price__input-label',
            }"
          />
          <div class="price__bullets-wrapper">
            <FormKit
              type="range"
              label="Кількість куль на гравця:"
              number="integer"
              name="bullets"
              value="300"
              :min="select === 'Пейнтбол' ? '100' : '350'"
              :max="select === 'Пейнтбол' ? 500 : 1050"
              :step="select === 'Пейнтбол' ? 200 : 350"
              v-model="bullets"
              :classes="{
                wrapper: 'price__range-wrapper',
                input: 'price__range',
                label: 'price__input-label',
              }"
            />
            <ul class="price__bullets-list" v-auto-animate>
              <li
                v-for="label in currentLabels"
                :key="label"
                class="price__bullets-label"
              >
                {{ label }}<span> шт</span>
              </li>
            </ul>
          </div>
          <FormKit
            type="checkbox"
            label="Апгрейд гравця:"
            name="upgrades"
            v-model="upgrades"
            :classes="{
              wrapper: 'price__check-wrapper',
              input: 'price__check',
              inner: 'price__check-inner',
              options: 'price__check-options',
              label: 'price__check-label',
              legend: 'price__input-label',
            }"
            :options="[
              'Жилет',
              'Бандаж',
              'Наколінники',
              'Захист шиї',
              'Подовжений ствол',
              'Налокітники',
            ]"
          />
          <FormKit
            name="name"
            type="text"
            label="Як до вас звертатися?"
            validation="required | length:3"
            validation-visibility="submit"
            :classes="{
              wrapper: 'price__input-wrapper',
              input: 'price__input',
              label: 'price__input-label',
            }"
            :validation-messages="{
              required: 'Будь ласка, введiть ваше ім\'я',
              length: 'Iм\'я повинно бути більше 2 символів',
            }"
          />
          <FormKit
            name="phone"
            type="tel"
            label="Ваш номер телефону:"
            validation="required | number | length:9"
            validation-visibility="submit"
            :validation-messages="{
              required: 'Будь ласка, введiть ваш номер',
              number: 'Будь ласка, введiть корректний номер',
              length: 'Будь ласка, введiть корректний номер',
            }"
            :classes="{
              wrapper: 'price__input-wrapper',
              input: 'price__input',
              label: 'price__input-label',
            }"
          />
        </div>
      </FormKit>
    </div>
  </section>
</template>

<script setup>
  import { reset } from "@formkit/core";
  const toast = useToast();
  const telegram = useTelegramBot();
  const route = useRoute();

  const date = new Date();
  const day = new Intl.DateTimeFormat("en-uk", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const dateFormatted = day.format(date).split("/").reverse();

  const select = ref("Пейнтбол");
  const players = ref(8);
  const bullets = ref(300);
  const upgrades = ref([]);
  const bulletsLabels = {
    paintball: [100, 300, 500],
    strikeball: [350, 750, 1050],
  };
  const currentLabels = computed(() => {
    if (select.value === "Пейнтбол") {
      return bulletsLabels.paintball;
    } else {
      return bulletsLabels.strikeball;
    }
  });
  const summ = computed(() => {
    let s = 0;
    let upgradesCost = upgrades.value.length * 50;
    if (select.value === "Пейнтбол") {
      let bulletsCost;
      switch (bullets.value) {
        case 100:
          bulletsCost = 0;
          break;
        case 300:
          bulletsCost = 300;
          break;
        case 500:
          bulletsCost = 550;
          break;
        default:
          bulletsCost = 0;
      }
      let playerCost = 400 + bulletsCost + upgradesCost;
      s = players.value * playerCost;
    } else {
      let bulletsCost;
      switch (bullets.value) {
        case 350:
          bulletsCost = 0;
          break;
        case 700:
          bulletsCost = 100;
          break;
        case 1050:
          bulletsCost = 200;
          break;
        default:
          bulletsCost = 0;
      }
      let playerCost = 650 + bulletsCost + upgradesCost;
      s = players.value * playerCost;
    }
    return s;
  });
  const summTransition = useTransition(summ, { duration: 300 });

  const submitHandler = async (data) => {
    const query = { ...data, total: summ.value };
    await telegram.send(query).then((res) => {
      if (res.ok) {
        reset("price-form");
        toast.success({
          message: "Замовлення вiдправлено",
          position: "topRight",
        });
      } else {
        toast.error({
          message: "Помилка вiдправки замовлення",
          position: "topRight",
        });
      }
    });
  };

  watch(select, () => {
    if (select.value === "Пейнтбол") {
      bullets.value = 350;
    } else bullets.value = 700;
    if (players.value > 12) {
      players.value = 12;
    }
  });

  watch(route, () => {
    select.value = route.name === "airsoft" ? "Страйкбол" : "Пейнтбол";
  });
</script>

<style lang="scss">
  .price {
    color: #147036;
    overflow-x: hidden;
    @include adaptiv-font(32, 20);
    &__title {
      text-align: center;
      &-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        align-items: center;
        justify-content: center;
        margin: 0 0 20px 0;
        @media (min-width: $M) {
          margin: 0 0 80px 0;
        }
      }
    }
    &__select {
      font-family: inherit;
      border: 3px solid #fa8013;
      background: #e5ebea;
      color: inherit;
      padding: 10px 75px 10px 40px;
      text-transform: uppercase;
      transition: $trTime;
      font-size: inherit;
      appearance: none;
      font-weight: 600;
      &-inner {
        position: relative;
        &::after {
          content: "";
          pointer-events: none;
          width: 0;
          height: 0;
          position: absolute;
          top: 50%;
          right: 40px;
          translate: 0 -50%;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid #fa8013;
        }
      }
    }
    &__content {
      display: grid;
      row-gap: 20px;
      column-gap: 100px;
      margin: 0 0 70px 0;
      @media (min-width: $M) {
        row-gap: 35px;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
      @media (min-width: $L) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &__input {
      border: 3px solid #34b3cf;
      text-align: center;
      background: #e5ebea;
      font-size: inherit;
      font-weight: 600;
      padding: 3px;
      @media (min-width: $M) {
        padding: em(10, 32);
      }
      &-wrapper {
        display: flex;
        align-items: center;
        row-gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        column-gap: 10px;
        @media (min-width: $M) {
          justify-content: start;
          column-gap: 30px;
        }
      }
      &-label {
        text-transform: uppercase;
        font-weight: 600;
      }
    }
    &__range {
      width: 100%;
      height: 0;
      appearance: none;
      background: transparent;
      cursor: grab;
      &:active {
        cursor: grabbing;
        &::-webkit-slider-thumb {
          background-color: rgb(41, 136, 157);
        }
        &::-moz-range-thumb {
          background-color: rgb(41, 136, 157);
        }
      }
      &::-webkit-slider-runnable-track {
        background: #125a28;
        height: 10px;
        border-radius: 20px;
      }
      &::-moz-range-track {
        background: #125a28;
        height: 10px;
        border-radius: 20px;
      }
      &::-webkit-slider-thumb {
        background-color: #34b3cf;
        height: 30px;
        width: 30px;
        -webkit-appearance: none;
        appearance: none;
        margin-top: -10px;
        border-radius: 50%;
        transition: background-color $hoverTime;
      }
      &::-moz-range-thumb {
        background-color: #34b3cf;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: none;
        transition: background-color $hoverTime;
      }
      &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
    &__check {
      width: 25px;
      height: 25px;
      display: inline-block;
      opacity: 0;
      &-inner {
        position: relative;
        width: 25px;
        height: 25px;
        display: inline-block;
        &::after {
          content: "";
          transition:
            background-color $activeTime,
            background-image $activeTime;
          position: absolute;
          display: block;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 3px solid #34b3cf;
        }
      }
      &-label {
        @include adaptiv-font(20, 16);
      }
      &-wrapper {
        display: inline-flex;
        align-items: center;
        gap: 30px;
        &[data-checked] .price__check-inner::after {
          background-color: #34b3cf;
          background-image: url("/svg/check.svg");
          background-position: center;
        }
      }
      &-options {
        margin-top: 20px;
        @include adaptiv-grid(1, 2, 210px, 0px, 20px);
      }
    }
    &__bullets {
      &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-shrink: 0;
      }
      &-label {
        flex-shrink: 0;
        display: flex;
        gap: 0.1em;
        color: #34b3cf;
        @include adaptiv-font(20, 16);
      }
    }
    &__submit {
      color: #fff;
      background: #fa8013;
      padding: 12px 60px;
      font-weight: 600;
      transition: $trTime;
      max-width: 320px;
      width: 100%;
      @media (min-width: $L) {
        width: auto;
      }
      @include adaptiv-font(20, 16);
      &-help {
        grid-column: 1;
        grid-row: 1;
        color: #019dce;
        font-weight: 600;
        background: url("/svg/ovals.svg") center no-repeat;
        position: relative;
        padding: 50px 60px 35px;
        margin: -50px -60px -35px -60px;
        @media (min-width: $L) {
          background: url("/svg/ovals.svg") calc(100% - 15px) center no-repeat;
          text-align: right;
          margin-right: 122px;
        }
        &::before {
          content: "Разом: ";
          color: #125a28;
          text-transform: uppercase;
        }
        &::after {
          position: absolute;
          top: 50%;
          left: calc(100% + 20px);
          width: 102px;
          height: 20px;
          background: url("/svg/long-arrow.svg") center no-repeat;
          @media (min-width: $L) {
            content: "";
          }
        }
      }
      &-wrapper {
        width: 100%;
        @media (min-width: $L) {
          width: auto;
          grid-column: 2;
        }
      }
      &-container {
        display: grid;
        gap: 20px;
        row-gap: 45px;
        align-items: baseline;
        text-align: center;
        @media (min-width: $L) {
          text-align: left;
          justify-content: center;
          grid-template-columns: repeat(2, 1fr);
        }
        &[data-disabled] {
          .price__submit {
            cursor: default;
            background: gray;
          }
        }
      }
    }
  }
</style>
