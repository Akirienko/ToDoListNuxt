<script setup lang="ts">


const emit = defineEmits<{
  onLogin: []

}>()

const onLogin = () => {
  emit('onLogin');
}
</script>

<template>
  <div>
    <Button class="login-btn" @click="onLogin">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 20 20" style="vertical-align: middle; margin-right: 8px;">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm1 11v-2H7v-2h4V7l3 3-3 3z"/>
      </svg>
      Login
    </Button>
  </div>
</template>

<style src="./login.scss" scoped></style>
