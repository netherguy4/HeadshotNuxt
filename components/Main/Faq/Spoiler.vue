<script setup>
import { useTemplateRef, computed } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  active: HTMLDivElement,
})

const thisSpoiler = useTemplateRef('thisSpoiler')
const isActive = computed(() => {
  return thisSpoiler.value === props.active
})

const onEnter = (el) => {
  gsap.fromTo(
    el,
    {
      height: 0,
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      ease: 'back',
      duration: 0.4,
      height: 'auto',
    },
  )
}
const onLeave = (el, done) => {
  gsap.to(el, {
    ease: 'back.in',
    duration: 0.4,
    onComplete: done,
    height: 0,
    autoAlpha: 0,
  })
}
</script>

<template>
  <div
    @click="() => console.log(thisSpoiler.value === props.active, thisSpoiler.value, props.active)"
    class="spoiler"
    ref="thisSpoiler"
  >
    <TransitionGroup @before-enter="onEnter" @leave="onLeave">
      <div key="button" class="spoiler__button subtitle">
        {{ title }}
        <Icon
          style="height: 1.43em; width: 1.43em"
          icon="pepicons-pencil:plus"
          class="spoiler__image"
          :class="isActive ? '_minus' : '_plus'"
        />
      </div>
      <div key="content" class="spoiler__content" v-if="isActive">
        <slot></slot>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.spoiler {
  position: relative;
  cursor: pointer;
  user-select: none;
  &__button {
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    text-transform: uppercase;
    user-select: none;
    @media (min-width: $M) {
      gap: 1em;
    }
  }
  &__image {
    flex-shrink: 0;
    color: #34b3cf;
    @include adaptiv-font(37, 25);
  }
  &__content {
    margin: 0.5em 0 0;
    overflow: hidden;
  }
}
</style>
