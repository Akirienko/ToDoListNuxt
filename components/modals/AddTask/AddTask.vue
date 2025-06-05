<script setup lang="ts">

const taskInput = ref('');

const emit = defineEmits(['rejectAdding', 'acceptAdding']);

const handleReject = () => {
  emit('rejectAdding')
}

const handleAccept = () => {
  emit('acceptAdding', taskInput.value)
}

</script>

<template>
  <MainModal >
    <template v-slot:content>
      <div class="modal-wrap">
        <h5>Create Task</h5>

        <div class="task-input">
          <Icon icon="pencil" />
          <input v-model="taskInput" type="text" placeholder="Write the task name..." />
        </div>

        <div class="buttons">
          <Button class="button" type="secondary" @click="handleReject">Cancel</Button>
          <Button class="button" type="primary" @click="handleAccept">Accept</Button>
        </div>
      </div>
    </template>
  </MainModal>
</template>

<style src="./addTask.scss" scoped></style>