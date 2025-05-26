<script setup>
const emit = defineEmits(['close-modal']);
const props = defineProps(['customClass']);

function handleBackgroundClick() {
  emit('close-modal');
}
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-overlay" @click="handleBackgroundClick"></div>
    <div class="modal-content scroll-bar" :class="customClass">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: white;
  color: black;
  border-radius: 12px;
  margin: 1rem;
  border: none;
  max-height: 100%;
  overflow: auto;
  z-index: 10;
}



/* Scrollbar hidden */
.scroll-bar::-webkit-scrollbar {
  display: none;
}
.scroll-bar {
  scrollbar-width: none;
}
</style>
