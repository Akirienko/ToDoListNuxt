<script setup lang="ts">
type IconType = 'searchImage' | 'logo' | 'pencil';

type IconButtonProps = {
  icon: IconType;
};

// Test branching strategy

const props = defineProps<IconButtonProps>();

</script>

<template>
  <Button>
    <Icon :icon="icon" />
  </Button>
</template>