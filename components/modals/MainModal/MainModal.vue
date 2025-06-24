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

<style scoped src="./mainModal.scss"></style>
