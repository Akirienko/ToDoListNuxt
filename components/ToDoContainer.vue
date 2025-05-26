<script setup>

const search = ref('')

const searchValue = (value) => {
  console.log(value);

  search.value = value;
}
</script>

<template>
  <div class="todolist-wrap">
    <h3>Your Tasks</h3>

    <SearchTask @search-task="searchValue" />

    <TasksList :search-value="search" />
  </div>
</template>

<style lang="scss" scoped>
.todolist-wrap {
  background: #18181C;
  border-radius: 2.4rem;
  padding: 4rem;

  h3 {
    margin-bottom: 3.2rem;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  }
}
</style>