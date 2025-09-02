<script setup lang="ts">
import { getFormattedDate } from "@/utils/index";

const emit = defineEmits(['on-delete-task', 'on-complete-task'])


const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
  taskId: {
    type: String,
    required: true,
  }
})

const onDelete = (id: number | string) => {
  emit('on-delete-task', id);
}

const onComplete = (id: number | string) => {
  emit('on-complete-task', id);
}

</script>

<template>
  <div class="task-card" :class="isDone ? 'done' : ''">
    <div class="task-card__left">
      <div class="task-card__check" @click="onComplete(props.taskId)"></div>
      <p class="task-card__text">{{props.title}}</p>
    </div>

    <div class="task-card__right">
      <span class="task-card__date">{{getFormattedDate(props.created_at)}}</span>
      <button class="task-card__delete" @click="onDelete(props.taskId)">✕
      </button>
    </div>

  </div>
</template>

<style src="./taskItem.scss" scoped></style>