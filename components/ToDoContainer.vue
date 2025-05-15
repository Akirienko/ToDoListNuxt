<template>
  <div class="todolist-wrap">
    <h3>Your Tasks</h3>

    <SearchTaskComponent  />
  </div>
</template>

<script setup>

</script>

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