<script setup lang="ts">

const emit = defineEmits(['handleRejectDeleting', 'acceptDeleting']);

const handleReject = () => {
  emit('handleRejectDeleting')
}

const handleAccept = () => {
  emit('acceptDeleting')
}
</script>

<template>
  <MainModal>
    <template v-slot:content>
      <div class="modal-wrap">
        <h5>Are you sure you want to delete this task?</h5>

        <div class="buttons">
          <Button class="button" type="secondary" @click="handleReject">No</Button>
          <Button class="button" type="primary" @click="handleAccept">Yes</Button>
        </div>
      </div>
    </template>
  </MainModal>
</template>

<style src="./deleteTask.scss" scoped></style>