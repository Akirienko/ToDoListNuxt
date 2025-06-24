<script setup lang="ts">
import type { Task } from '@/types/index'

const emit = defineEmits(['deleteTask'])

const props = defineProps<{
  searchBy: string
  tasks: Task[]
}>()

const deleteTask = (taskId: number) => {
  emit('deleteTask', taskId)
};


</script>

<template>
  <div class="tasks">
    <div class="tasks-body">
      <TaskItem v-if="tasks.length" v-for="task in props.tasks" :key="task.id" :title="task.title"
        :date="task.date" :isDone="task.isDone" @delete-task="deleteTask(task.id)"
        @task-done="task.isDone = !task.isDone" />

      <div class="empty" v-else>
        <p>Now your tasks list is empty, add a task to see it here</p>
      </div>

    </div>
  </div>
</template>

<style src="./taskList.scss" scoped></style>

<!-- То мені не обовязково вказувати клас як пропс, бо я можу і з цього уомпонента керувати чайлдом number-text, ааа бля не хуйня, якщо мені треба саме тксту даи то з баті компонента я не можу ним керувати, треба проспс -->