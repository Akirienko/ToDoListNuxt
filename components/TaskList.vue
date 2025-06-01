<script setup lang="ts">

const emit = defineEmits(['removeTask'])

type Task = {
  id: number
  title: string
  date: string
  isDone: boolean
}

const props = defineProps<{
  searchBy: string
  tasks: Task[]
}>()

const deleteTask = (taskId: number) => {
  emit('removeTask', taskId)
};


</script>

<template>
  <div class="tasks">
    <div class="tasks-body">
      <TaskItem v-if="tasks" v-for="task in props.tasks" :key="task.id" :title="task.title"
        :date="task.date" :isDone="task.isDone" @remove-task="deleteTask(task.id)"
        @task-done="task.isDone = !task.isDone" />

      <div class="empty" v-else>
        <p>Now your tasks list is empty, add a task to see it here</p>
      </div>

    </div>
  </div>
</template>

<!-- То мені не обовязково вказувати клас як пропс, бо я можу і з цього уомпонента керувати чайлдом number-text, ааа бля не хуйня, якщо мені треба саме тксту даи то з баті компонента я не можу ним керувати, треба проспс -->

<style lang="scss" scoped>
.number-text {
  color: red;
}

.add-task-btn {
  position: absolute;
  right: -1rem;
}

.tasks {
  margin-top: 2rem;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .1rem solid #4B5563;
    padding: .8rem 0;
    margin-bottom: 2.8rem;

    &__total,
    &__complited {
      display: flex;
      align-items: center;

      p {
        margin-right: 1rem;
        font-size: 1.4rem;
      }
    }
  }

  &-body {
    position: relative;

    .empty {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 3rem;
        font-weight: 600;
      }
    }
  }
}
</style>