<script setup lang="ts">
import { useList } from '@/composable/useTaskList';

const { completedTasks } = useList();

const emit = defineEmits(['delete-task', 'task-done'])

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
  taskId: {
    type: Number,

    // WHY IF I REMOVE THIS STRING IN 42LINE I HAVE MISTAKE IN onComplete(props.taskId)
    required: true,
  }
})

const onDelete = ()=>{
  emit('delete-task');
}

const onComplete = (id: number)=>{
  completedTasks(id)

  emit('task-done');
}

</script>

<template>
  <div class="task-card" :class="isDone ? 'done' : ''">
    <div class="task-card__left">
      <div class="task-card__check" @click="onComplete(props.taskId)"></div>
      <p class="task-card__text">{{props.title}}</p>
    </div>

    <div class="task-card__right">
      <span class="task-card__date">{{props.date}}</span>
      <button class="task-card__delete" @click="onDelete">✕
      </button>
    </div>

  </div>
</template>

<style src="./taskItem.scss" scoped></style>