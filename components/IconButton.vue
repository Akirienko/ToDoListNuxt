<script setup lang="ts">
type IconType = 'searchImage' | 'logo' | 'pencil';

type IconButtonProps = {
  icon: IconType;
  iconStyles: {
    type: String,
    default: ''
  }
};

const props = defineProps<IconButtonProps>();

</script>

<template>
  <Button>
    <Icon :icon="icon" :icon-styles="props.iconStyles" />
  </Button>
</template>