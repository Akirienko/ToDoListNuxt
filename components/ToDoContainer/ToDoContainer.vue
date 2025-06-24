<script setup lang="ts">
import { getFormattedDate } from "@/utils/index";
import { useList } from '@/composable/useTaskList';
import type { Task } from '~/types';

const { addTask, storedTaskList, deleteTask } = useList();

const searchBy = ref('');
const deleteTaskModal = ref(false);
const openAddTaskModal = ref(false);
const taskIdTodelete = ref();

const addTaskConfirm = (value: string) => {
  const newTask: Task = {
    title: value,
    isDone: false,
    date: getFormattedDate(),
    id: Math.random(),
  };

  addTask(newTask);

  openAddTaskModal.value = false;
};

const handleSearch = (value: string) => {
  searchBy.value = value;
};

const filteredTasks = computed(() => {
  if (!searchBy.value) return storedTaskList.value;

  return storedTaskList.value.filter(task =>
    task.title.toLowerCase().includes(searchBy.value.toLowerCase())
  );
});

const completedTasks = computed(() => {
  return storedTaskList.value.filter(task => task.isDone).length;
});

const handleDeleteTask = (taskId: string) => {
  deleteTaskModal.value = true;

  taskIdTodelete.value = taskId;
};

const acceptDeleting = () => {
  deleteTask(taskIdTodelete.value);

  deleteTaskModal.value = false;
};

const handleRejectDeleting = () => {
  taskIdTodelete.value = '';

  deleteTaskModal.value = false;
};

const handleAddTask = () => {
  openAddTaskModal.value = true;
};

const rejectAdding = () => {
  openAddTaskModal.value = false;
};

const acceptAdding = (value: string) => {
  addTaskConfirm(value);
}

</script>

<template>
  <div class="todolist-wrap">
    <h3>Your Tasks</h3>

    <Search @search="handleSearch" />

    <div class="tasks-header">
      <div class="tasks-header__total">
        <NumberBlock title="Total tasks:" text-class="number-text" :number="storedTaskList.length" />
      </div>
      <div class="tasks-header__complied">
        <NumberBlock title="Completed" :number="completedTasks" />
      </div>
    </div>

    <TaskList :searchBy="searchBy" :tasks="filteredTasks" @delete-task="handleDeleteTask" />

    <DeleteTask v-if="deleteTaskModal" @handle-reject-deleting="handleRejectDeleting"
      @accept-deleting="acceptDeleting" />

    <AddTask v-if="openAddTaskModal" @accept-adding="acceptAdding" @reject-adding="rejectAdding" />

    <Button class="add-task-btn" @click="handleAddTask">+</Button>
  </div>
</template>

<style src="./toDoContainer.scss" scoped ></style>

