<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div v-if="dropdownOpened" class="dropdown">
      <nav class="dropdown__nav">
        <ul class="dropdown__list">
          <li
            v-for="route in navigation"
            :key="route.name"
            @click="closeDropdown"
            class="dropdown__li"
          >
            <NuxtLink class="dropdown__link" :to="route.href">
              {{ route.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script setup>
  import navigation from "@/assets/json/navigation";

  const dropdownOpened = useState("drawerOpened");
  const closeDropdown = () => (dropdownOpened.value = false);

  const onEnter = (el, done) => {
    gsap.fromTo(
      el,
      { height: 0 },
      {
        height: "auto",
        ease: "power3",
        onComplete: done,
      }
    );
  };
  const onLeave = (el, done) => {
    gsap.to(el, {
      height: 0,
      ease: "power3",
      onComplete: done,
    });
  };
</script>

<style lang="scss" scoped>
  .dropdown {
    position: absolute;
    overflow: hidden;
    z-index: 10;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background: #fff;
    color: #33373d;
    font-size: 20px;
    &__list {
      display: grid;
      grid-auto-rows: 1fr;
    }
    &__li {
      display: flex;
      flex-direction: column;
    }
    &__link {
      padding: 15px 20px;
      color: inherit;
      transition: $trTime;
      @media (min-width: $M) {
        padding: 15px 50px;
      }
      &:visited {
        color: inherit;
      }
      @include hover {
        transition: $hoverTime;
        color: #fff;
        background: #33373d;
      }
      &.router-link-active {
        color: #fff;
        background: #33373d;
      }
    }
  }
</style>
