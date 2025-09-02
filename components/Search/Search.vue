<script setup>
//  add placeholder to props

const searchInput = ref('');

const emit = defineEmits(['search']);

const handleClick = () => {
  emit('search', searchInput.value);
}

</script>

<template>

  <div class="serach-container">
    <div class="search-input">
      <img src="@/assets/image/search.webp" alt="search">
      <input type="text" placeholder="Search tasks" v-model="searchInput" />
    </div>
    <IconButton icon="search" @click="handleClick" icon-styles="search-icon" />
    <!-- Якого хуя воно не працює search-icon -->
  </div>
</template>

<style src="./search.scss" scoped>

</style>