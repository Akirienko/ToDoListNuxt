<script setup>

</script>

<template>
  <div class="task-card">
    <div class="task-card__left">
      <div class="task-card__check"></div>
      <p class="task-card__text">title </p>
    </div>

    <div class="task-card__right">
      <span class="task-card__date">date</span>
      <button class="task-card__delete" @click="onDelete">
        ✕
      </button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.task-card {
  background-color: #000;
  border-radius: .8rem;
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-top: 1.2rem;

  &__left {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__check {
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid white;
    border-radius: 50%;
  }

  &__text {
    font-size: 1.4rem;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  &__date {
    font-size: 1.2rem;
    color: #a1a1a1;
  }

  &__delete {
    background: none;
    border: none;
    font-size: 1.6rem;
    color: #fff;
    cursor: pointer;
    line-height: 1;
    padding: 0;

    &:hover {
      color: #ff4d4d;
    }
  }
}
</style>