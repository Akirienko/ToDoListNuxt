<script setup lang="ts">
  const isOpen = ref(false)
  const activeTab = ref<'login' | 'register'>('login')

  const email = ref('')
  const password = ref('')
  const username = ref('')

  const emit = defineEmits<{
    closeModal: []

  }>()

  function closeModal() {
    emit('closeModal')
  }

  function onLogin() {

    closeModal()
  }

  function onRegister() {

    closeModal()
  }

</script>

<template>
    <MainModal>
      <template v-slot:content>
        <div class="modal">
          <div class="modal__close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115Z"
                fill="#9CA0AF" />
            </svg>
          </div>

          <div class="tabs">
            <button
              :class="{ active: activeTab === 'login' }"
              @click="activeTab = 'login'">
              Login
            </button>
            <button
              :class="{ active: activeTab === 'register' }"
              @click="activeTab = 'register'">
              Register
            </button>
          </div>

          <!-- Login form -->
          <form v-if="activeTab === 'login'" @submit.prevent="onLogin">
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <Button>Login</Button>
          </form>

          <!-- Register form -->
          <form v-else @submit.prevent="onRegister">
            <input type="text" v-model="username" placeholder="Username" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="password" placeholder="Password" required />
            <Button>Register</Button>
          </form>
        </div>
      </template>
    </MainModal>
</template>

<style src="./authorization.scss" scoped></style>
