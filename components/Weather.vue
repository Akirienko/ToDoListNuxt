<script setup>
const props = defineProps({
  weather: {

  },
  showWeather: {
    type: Boolean,
    default: false
  }
})

const currWeather = ref();
const currLocation = ref();

currWeather.value = props.weather?.current
currLocation.value = props.weather?.location

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
.user {
  border: 1px solid #fff;
  padding: .2rem;
  max-width: 240px;
  h2 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.2rem;
  }

  input {
    background: transparent;
    border: 2px solid #fff;
    margin: 1rem 0;
    color: #fff;
  }

  &-search {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
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