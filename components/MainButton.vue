<script setup lang="ts">

  const props = defineProps({
    type: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  })

  const buttonClasses = computed(() => {
    return [
      'button-main',
      `button-main--${props.type}`,
      `button-main--${props.size}`,
    ]
  })
</script>

<template>
  <button :class="buttonClasses">
    {{ title }}
  </button>
</template>



<style lang="scss" scoped>
.button-main {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
  font-weight: 600;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &--primary {
    background: #7a4fff;
    color: white;

    &:hover {
      background: #6b3efc;
    }
  }

  &--secondary {
    background: #ede9fe;
    color: #4b4b4b;

    &:hover {
      background: #d5cffc;
    }
  }

}
</style>
