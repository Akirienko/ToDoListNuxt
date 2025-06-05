<script setup lang="ts">
import mockTasks from '@/mocks/tasks.js';
import {getFormattedDate} from "@/functions/index"
//business component with logic (storage, filtering, adding, deleting)

const tasks = ref(mockTasks);
const searchBy = ref('');
const deleteTaskModal = ref(false);
const openAddTaskModal = ref(false);
const taskIdTodelete = ref();

const addTask = (value: string) => {
  tasks.value.push({
    title: value,
    isDone: false,
    date: getFormattedDate(),
    id: Math.random(),
  });

  openAddTaskModal.value = false;
};

const handleSearch = (value: string) => {
  searchBy.value = value;
};

const filteredTasks = computed(() => {
  if (!searchBy.value) return tasks.value;

  return tasks.value.filter(task =>
    task.title.toLowerCase().includes(searchBy.value.toLowerCase())
  );
});

const completedTasks = computed(() => {
  return tasks.value.filter(task => task.isDone).length;
});

const handleDeleteTask = (taskId: string) => {
  deleteTaskModal.value = true;

  taskIdTodelete.value = taskId;
};

const acceptDeleting = () => {
  tasks.value = tasks.value.filter(task => task.id !== taskIdTodelete.value);

  deleteTaskModal.value = false;
}

const handleRejectDeleting = ()=>{
  taskIdTodelete.value = '';

  deleteTaskModal.value = false;
}

const handleAddTask = () => {
  openAddTaskModal.value = true;
};

const rejectAdding = ()=>{
  openAddTaskModal.value = false;
}

const acceptAdding = (value: string)=>{
  addTask(value);
}

</script>

<template>
  <div class="todolist-wrap">
    <h3>Your Tasks</h3>

    <Search @search="handleSearch" />

    <div class="tasks-header">
      <div class="tasks-header__total">
        <NumberBlock title="Total tasks:" text-class="number-text" :number="tasks.length" />
      </div>
      <div class="tasks-header__complied">
        <NumberBlock title="Completed" :number="completedTasks" />
      </div>
    </div>

    <TaskList :searchBy="searchBy" :tasks="filteredTasks" @delete-task="handleDeleteTask"/>

    <DeleteTask v-if="deleteTaskModal" @handle-reject-deleting="handleRejectDeleting" @accept-deleting="acceptDeleting"/>

    <AddTask v-if="openAddTaskModal" @accept-adding="acceptAdding" @reject-adding="rejectAdding"/>

    <Button class="add-task-btn" @click="handleAddTask">+</Button>
  </div>
</template>

<style src="./toDoContainer.scss" scoped ></style>

