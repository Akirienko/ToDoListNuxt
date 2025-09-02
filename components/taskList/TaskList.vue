<script setup lang="ts">
import type { Task } from '@/types/index'

const emit = defineEmits(['onDeleteTask', 'onCompleteTask'])

const props = defineProps<{
  searchBy: string
  tasks: Task[]
}>()

const handleDeleteTask = (taskId: number) => {
  emit('onDeleteTask', taskId)
};

const handleCompleteTask = (id: number) => {
  emit('onCompleteTask', id)
}

</script>

<template>
  <div class="tasks">
    <div class="tasks-body">
      <TaskItem v-if="tasks.length" v-for="task in props.tasks" :key="task.id" :title="task.title"
        :created_at="task.created_at" :isDone="task.isDone" @on-delete-task="handleDeleteTask"
        @on-complete-task="handleCompleteTask" :task-id="task.id" />

      <div class="empty" v-else>
        <p>Now your tasks list is empty, add a task to see it here</p>
      </div>

    </div>
  </div>
</template>

<style src="./taskList.scss" scoped></style>
