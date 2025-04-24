<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="center" :zoom="17">
  </GoogleMap>
</template>

<script setup>
import { GoogleMap } from 'vue3-google-map'

const apiKey = import.meta.env.VITE_GMAPS_API
const center = { lat: 46.48909313280432, lng: 30.68960244543321 }
</script>

<style lang="scss" scoped></style>
