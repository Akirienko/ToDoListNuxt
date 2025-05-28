<script setup lang="ts">

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  title: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
  }
});

console.log(props.image);

const buttonClasses = computed(() => {
  return [
    'button-main',
    `button-main--${props.type}`,
  ];
});
</script>

<template>
  <button :class="buttonClasses">
    <slot></slot>
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
