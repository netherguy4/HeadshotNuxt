<template>
  <section class="pros">
    <div class="container">
      <h2 class="title pros__title">шість унікальних полігонів</h2>
      <div class="pros__content">
        <MainPolygonsCard
          v-for="item in polygons"
          :key="item.title"
          :title="item.title"
          :square="item.square"
          :list="item.list"
          :span="item.span"
          :image="
            !item.image
              ? undefined
              : folder
                ? `${folder}/${item.image}`
                : item.image
          "
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import polygons from "@/assets/json/polygons";

  const props = defineProps({
    folder: {
      type: String,
    },
  });
</script>

<style lang="scss" scoped>
  .pros {
    background: #125a28;
    color: #fff;
    @include adaptiv-font(32, 20);
    .pros {
      &__title {
        text-align: right;
        margin: 0 0 20px 0;
        @media (min-width: $M) {
          margin: 0 0 50px 0;
        }
      }
      &__content {
        grid-auto-rows: 1fr;
        @include adaptiv-grid(1, 3, 280px, 30px, 30px);
      }
    }
  }
</style>
