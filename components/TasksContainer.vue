<script setup lang="ts">

</script>

<template>
  <div class="tasks">
    <div class="tasks-header">
      <div class="tasks-header__total">
        <p>Total tasks:</p>
        <NumberComponent>
          4
        </NumberComponent>
      </div>
      <div class="tasks-header__complited">
        <p>Completed</p>
        <NumberComponent>
          2
        </NumberComponent>
      </div>
    </div>

    <div class="tasks-body">
      <TaskBlock />
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  margin-top: 2rem;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .1rem solid #4B5563;
    padding: .8rem 0;
    margin-bottom: 2.8rem;
    &__total, &__complited {
      display: flex;
      align-items: center;
      p {
        margin-right: 1rem;
        font-size: 1.4rem;
      }
    }
  }

}
</style>