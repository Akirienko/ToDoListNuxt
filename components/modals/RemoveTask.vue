<script setup lang="ts">

const emit = defineEmits(['rejectDeleting', 'acceptDeleting']);

const handleReject = () => {
  emit('rejectDeleting')
}

const handleAccept = () => {
  emit('acceptDeleting')
}
</script>

<template>
  <ModalsMainModal>
    <template v-slot:content>
      <div class="modal-wrap">
        <h5>Are you sure you want to delete this task?</h5>

        <div class="buttons">
          <Button class="button" type="secondary" @click="handleReject">No</Button>
          <Button class="button" type="primary" @click="handleAccept">Yes</Button>
        </div>
      </div>
    </template>
  </ModalsMainModal>
</template>

<style lang="scss" scoped>
// I Duplicated this classes in 2 modals, maybe we can avoid it?

.modal-wrap {
  padding: 2rem;
  background: #18181C;
  width: 32rem;

  h5 {
    text-align: center;
    font-size: 3.2rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 3.2rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    :first-child {
      margin-right: 2rem;
    }
  }

  .task-input {
    display: flex;
    width: 100%;
    align-items: center;
    background: #323235;
    padding: 1rem 1.5rem;
    border-radius: 0.8rem;


    img {
      width: 2rem;
      margin-right: 1rem;
    }

    input {
      flex: 1;
      background: transparent;
      border: none;
      color: #ccc;
      font-size: 1.6rem;
      outline: none;

      ::placeholder {
        color: #636366;
      }
    }
  }
}
</style>