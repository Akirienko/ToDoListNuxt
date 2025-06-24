<script setup lang="ts">
import { useWeather } from "@/composition/useWeather"

const { getWeather } = useWeather()

const weatherUrl = 'https://api.weatherapi.com/v1/current.json'

const weather = ref();

weather.value = await getWeather(weatherUrl);

</script>

<template>
  <div class="header">

    <Weather :weather="weather" class="weather" />

    <div class="header-title">
      <img class="header-title__img" src="@/assets/image/logo.webp" alt="logo">
      <h1 class="header-title__title">to<span>do.</span></h1>
    </div>
    <p class="header-subtitle">Organize and complete your pending tasks easily.</p>

  </div>
</template>

<style src="./header.scss" scoped></style>