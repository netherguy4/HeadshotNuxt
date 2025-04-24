<template>
  <div class="scenarios">
    <div class="container">
      <h2 class="title scenarios__title">МОжливі сценарії гри</h2>
      <div class="scenarios__content">
        <ScenariosCard title="СТІНКА НА СТІНКУ">
          <template v-slot:icon>
            <Icon icon="fa:users" width="50" height="50" color="#34B3CF" />
          </template>
          <template v-slot:text>
            Гравці діляться на дві команди, кожен має одне життя. Завдання – вразити всіх гравців
            супротивника. Перемагає команда, в якій залишилися "живі" гравці.
          </template>
        </ScenariosCard>
        <ScenariosCard title="Рятунок заручника">
          <template v-slot:icon>
            <Icon icon="fa-solid:user" width="50" height="50" color="#34B3CF" />
          </template>
          <template v-slot:text>
            Одна людина – заручник, вона не озброєна. Перша команда має врятувати заручника, друга
            затримати. Гра закінчується якщо заручника звільнено, він втік або "вбитий".
          </template>
        </ScenariosCard>
        <ScenariosCard title="Схоплення прапору">
          <template v-slot:icon>
            <img loading="lazy" src="/img/flag.webp" style="width: 50px; height: 50px" alt="flag" />
          </template>
          <template v-slot:text>
            У всіх гравців є тільки одне життя. Завдання кожної команди - знайти на полі, захопити
            прапор та принести його на свою базу, при цьому уникаючи ворожих гравців.
          </template>
        </ScenariosCard>
        <ScenariosCard title="ОСТАННІЙ ГЕРОЙ">
          <template v-slot:icon>
            <Icon icon="fa-solid:medal" width="50" height="50" color="#34B3CF" />
          </template>
          <template v-slot:text>
            Усі гравці збираються у центрі поля. За командою «старт» усі розбігаються, а суддя рахує
            до 10. Потім кожен боєць веде бій сам за себе, переможець — той, хто вижив!
          </template>
        </ScenariosCard>
        <ScenariosCard title="ШТУРМ БУДИНКУ">
          <template v-slot:icon>
            <Icon icon="ion:home" width="50" height="50" color="#34B3CF" />
          </template>
          <template v-slot:text>
            Одна команда обороняється у будівлі, інша нападає. У оборони по 1 життя, у нападу –
            нескінченно. Гра триває 10-15 хвилин. Після команди міняються місцями.
          </template>
        </ScenariosCard>
        <ScenariosCard title="ВБИТИ ГІТЛЕРА">
          <template v-slot:icon>
            <Component class="scenarios__icon" :is="hitler" />
          </template>
          <template v-slot:text>
            Два гравці охороняють Гітлера у бункері. За сигналом тривоги приходить допомога.
            Завдання червоної армії вбити Гітлера і закінчити війну.
          </template>
        </ScenariosCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import ScenariosCard from './ScenariosCard.vue'
import { Icon } from '@iconify/vue'
import hitler from '@/assets/svg/scenarios/hitler.svg'
</script>

<style lang="scss" scoped>
.scenarios {
  color: #125a28;
  &__title {
    margin: 0 0 50px 0;
    text-align: center;
  }
  &__content {
    @include adaptiv-grid(1, 3, 300px, 30px, 30px);
  }
  &__icon {
    height: 50px;
  }
}
</style>
