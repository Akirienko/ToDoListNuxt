<script setup lang="ts">

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
  }
})

const onDelete = ()=>{
  emit('delete-task');
}

const onComplete = ()=>{
  emit('task-done');
}

</script>

<template>
  <div class="task-card" :class="isDone ? 'done' : ''">
    <div class="task-card__left">
      <div class="task-card__check" @click="onComplete"></div>
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