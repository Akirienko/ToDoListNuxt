<script setup>
const props = defineProps(['weather'])

const currWeather = ref();
const currLocation = ref();

currWeather.value = props.weather.current
currLocation.value = props.weather.location

console.log('currWeather', currWeather.value);


</script>

<template>
  <div class="weather">
    <h2>{{ currLocation.name }}</h2>
    <div class="weather-temperature">
      <img :src="currWeather.condition.icon" alt="icon">
      <p>{{ currWeather.heatindex_c }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.weather {
  text-align: center;
  &-temperature {
    display: flex;
    align-items: center;
    p {
      font-size: 26px;
      font-weight: semibold;
      margin-left: 1rem;
    }
  }
}
</style>