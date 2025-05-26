<script setup lang="ts">

  const props = defineProps({
    number: {
      type: [Number, String],
      default: '0',
    },
    title: {
      type: String,
      // required: true,
    },
    textClass: {
      type: String,
    },
    mainClass: {
      type: String,
    }
  })
</script>

<template>
  <div class="number-block" :class="mainClass">
    <p :class="textClass">{{ props.title }}</p>
    <div class="number">{{ props.number }}</div>
  </div>
</template>

<style lang="scss" scoped>
  .number-block {
    display: flex;
    align-items: center;
    p {
      font-size: 1.4rem;
    }
    .number {
      background: #EEE7FE;
      padding: .4rem .6rem;
      color: #636366;
      border-radius: .4rem;
      margin-left: 1rem;
    }
  }
</style>