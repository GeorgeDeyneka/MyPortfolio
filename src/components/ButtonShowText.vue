<template>
  <button class="btn" @click="rotateIcon">
    <SvgIcon
      string-path="#icon-arrow"
      class="icon"
      :size="24"
      fill-color="var(--light-green-accent)"
      hover-color="var(--light-green-accent)"
    />
  </button>
</template>

<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
</script>

<style lang="scss" scoped>
.btn {
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  transition: background-color 150ms ease-out;
  border: none;
}

.icon {
  transform: rotate(180deg);
}
</style>
