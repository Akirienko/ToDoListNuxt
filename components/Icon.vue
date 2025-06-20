<script setup lang="ts">
import searchImage from "@/assets/image/search.webp";
import logoImage from "@/assets/image/logo.webp";
import pencilImage from "@/assets/image/pencil.webp";

type IconType = 'search' | 'logo' | 'pencil';

type IconButtonProps = {
  icon: IconType;
};

const props = defineProps<IconButtonProps>();

//TODO: to make all imported images as async components, not to load every image while using this component

const icons = {
  search: searchImage,
  logo: logoImage,
  pencil: pencilImage
};

</script>

<template>
  <img :src="icons[icon]" />
</template>