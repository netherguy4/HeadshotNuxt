<template>
  <div class="scenarios">
    <div class="container">
      <h2 class="title scenarios__title">МОжливі сценарії гри</h2>
      <div class="scenarios__content">
        <MainScenariosCard title="СТІНКА НА СТІНКУ">
          <template v-slot:icon>
            <Icon name="fa:users" class="scenarios__icon" />
          </template>
          <template v-slot:text>
            Гравці діляться на дві команди, кожен має одне життя. Завдання –
            вразити всіх гравців супротивника. Перемагає команда, в якій
            залишилися "живі" гравці.
          </template>
        </MainScenariosCard>
        <MainScenariosCard title="Рятунок заручника">
          <template v-slot:icon>
            <Icon name="fa-solid:user" class="scenarios__icon" />
          </template>
          <template v-slot:text>
            Одна людина – заручник, вона не озброєна. Перша команда має
            врятувати заручника, друга затримати. Гра закінчується якщо
            заручника звільнено, він втік або "вбитий".
          </template>
        </MainScenariosCard>
        <MainScenariosCard title="Схоплення прапору">
          <template v-slot:icon>
            <img
              loading="lazy"
              height="50"
              width="50"
              src="/svg/flag.svg"
              class="scenarios__icon"
              alt="Flag icon."
            />
          </template>
          <template v-slot:text>
            У всіх гравців є тільки одне життя. Завдання кожної команди - знайти
            на полі, захопити прапор та принести його на свою базу, при цьому
            уникаючи ворожих гравців.
          </template>
        </MainScenariosCard>
        <MainScenariosCard title="ОСТАННІЙ ГЕРОЙ">
          <template v-slot:icon>
            <Icon name="fa-solid:medal" class="scenarios__icon" />
          </template>
          <template v-slot:text>
            Усі гравці збираються у центрі поля. За командою «старт» усі
            розбігаються, а суддя рахує до 10. Потім кожен боєць веде бій сам за
            себе, переможець — той, хто вижив!
          </template>
        </MainScenariosCard>
        <MainScenariosCard title="ШТУРМ БУДИНКУ">
          <template v-slot:icon>
            <Icon name="ion:home" class="scenarios__icon" />
          </template>
          <template v-slot:text>
            Одна команда обороняється у будівлі, інша нападає. У оборони по 1
            життя, у нападу – нескінченно. Гра триває 10-15 хвилин. Після
            команди міняються місцями.
          </template>
        </MainScenariosCard>
        <MainScenariosCard title="ВБИТИ ГІТЛЕРА">
          <template v-slot:icon>
            <img
              loading="lazy"
              height="50"
              width="41.3"
              src="/svg/hitler.svg"
              class="scenarios__icon"
              alt="Hitler icon."
            />
          </template>
          <template v-slot:text>
            Два гравці охороняють Гітлера у бункері. За сигналом тривоги
            приходить допомога. Завдання червоної армії вбити Гітлера і
            закінчити війну.
          </template>
        </MainScenariosCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .scenarios {
    color: #125a28;
    &__title {
      margin: 0 0 50px 0;
      text-align: center;
    }
    &__content {
      @include adaptiv-grid(1, 3, 410px, 30px, 30px);
    }
    &__icon {
      height: 1em;
      width: 1em;
      color: #34b3cf;
      @include adaptiv-font(44, 27);
    }
  }
</style>
