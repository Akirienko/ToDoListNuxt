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

<style src="./numberBlock.scss" scoped></style>