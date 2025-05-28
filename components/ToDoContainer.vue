<script setup lang="ts">
//business component with logic (storage, filtering, adding, deleting)

const searchBy = ref('');

const handleSearch = (value) => {
  console.log(value);

  searchBy.value = value;
};

const handleDelete = (id: string) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};

const handleComplete = (id: string) => {

};
</script>

<template>
  <div class="todolist-wrap">
    <h3>Your Tasks</h3>

    <Search @search="handleSearch" />

    <!-- TaskList :tasks="tasks" @onDeleteTask={handleDelete} @onCompleteTask={handleComplete} -->
    <TaskList :searchBy="searchBy" />
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