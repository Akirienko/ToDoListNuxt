<script setup lang="ts">
// why we put in breacet useWetherWether
import { useWether } from "@/composition/useWether"

const { getWether } = useWether()

const wetherUrl = 'https://api.weatherapi.com/v1/current.json'
const currentCity = ref('')

// const wether = await getWether(wetherUrl);
const wether = ref();


const getUserCity = async (val: string) => {
  // console.log('val', val);

  currentCity.value = val

  wether.value = await getWether(wetherUrl, val);

  // console.log('wether.value',wether.value);

}

// const latitude = ref();
// const longitude = ref();
// const error = ref();

// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         latitude.value = position.coords.latitude;
//         longitude.value = position.coords.longitude;
//         error.value = null;
//       },
//       (err) => {
//         error.value = `Error: ${err.message}`;
//         latitude.value = null;
//         longitude.value = null;
//       }
//     );
//   } else {
//     error.value = 'Geolocation is not supported by this browser.';
//   }
// };

</script>

<template>
  <div class="header">

    <!-- <button @click="getLocation">Get Location</button>
    <p v-if="latitude && longitude">Latitude: {{ latitude }}</p>
    <p v-if="latitude && longitude">Longitude: {{ longitude }}</p>
    <p v-if="error">{{ error }}</p> -->
    <Wether :weather="wether" class="weather" v-on:user-city="getUserCity" />

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