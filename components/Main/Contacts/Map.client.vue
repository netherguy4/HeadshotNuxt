<template>
  <MglMap :map-style="style" :center="center" :zoom="zoom">
    <MglNavigationControl />
    <mgl-marker :coordinates="center" color="#cc0000" />
  </MglMap>
</template>

<script setup>
  const style =
    "https://api.maptiler.com/maps/streets-v2/style.json?key=FwcZw37GtgCua8j9jIHn";
  const center = [30.68960244543321, 46.48909313280432];
  const zoom = 16;
</script>

<style></style>
