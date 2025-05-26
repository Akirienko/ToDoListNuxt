<template>
  <div class="header">

    <div class="header-title">
      <img class="header-title__img" src="@/assets/image/logo.webp" alt="logo">
      <h1 class="header-title__title">to<span>do.</span></h1>
    </div>
    <p class="header-subtitle">Organize and complete your pending tasks easily.</p>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;

  &-title {
    display: flex;
    align-items: center;
    margin-bottom: 3.2rem;

    &__img {
      width: 8rem;
      height: 8rem;
      margin-right: 1rem;
    }

    &__title {
      font-weight: 800;
      span {
        color: #764FF7;
      }
    }
  }

  &-subtitle {
    font-style: 2.4rem;
  }
}
</style>