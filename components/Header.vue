<script setup lang="ts">

// why we put in breacet useWetherWether
import { useWether } from "@/composition/useWether"

const { getWether } = useWether()

const wetherUrl = 'https://api.weatherapi.com/v1/current.json'

const wether = await getWether(wetherUrl);

</script>

<template>
  <div class="header">

    <Wether :weather="wether" class="weather" />

    <div class="header-title">
      <img class="header-title__img" src="@/assets/image/logo.webp" alt="logo">
      <h1 class="header-title__title">to<span>do.</span></h1>
    </div>
    <p class="header-subtitle">Organize and complete your pending tasks easily.</p>

  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
  position: relative;

  .weather {
    position: absolute;
    left: 2rem;
  }

  &-title {
    display: flex;
    align-items: center;
    margin-bottom: 3.2rem;

    &__img {
      width: 8rem;
      height: 8rem;
      margin-right: 1rem;
    }

    &__title {
      font-weight: 800;

      span {
        color: #764FF7;
      }
    }
  }

  &-subtitle {
    font-style: 2.4rem;
  }
}
</style>