<script setup>

const searchInput = ref('');

const emit = defineEmits(['search-task'])

const doSearch = () => {
  emit('search-task', searchInput.value)
}

</script>

<template>

  <div class="serach-container">
    <div class="search-input">
      <img src="@/assets/image/search.webp" alt="search">
      <input type="text" placeholder="Search tasks" v-model="searchInput" />
    </div>
    <Button
      class="button"
      type="primary"
      image="@/assets/image/search.webp"
      @click="doSearch"
    />
  </div>
</template>

<style lang="scss" scoped>

.serach-container {
  display: flex;
  align-items: center;
  width: 100%;

  .button {
    margin-left: 1rem;
  }

  .search-input {
    display: flex;
    width: 100%;
    align-items: center;
    background: #323235;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;


    img {
      width: 2rem;
      margin-right: 1rem;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      color: #ccc;
      font-size: 1.6rem;
      outline: none;
      ::placeholder {
        color: #636366;
      }
    }
  }
}

</style>