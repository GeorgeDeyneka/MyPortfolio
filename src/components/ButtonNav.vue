<template>
  <RouterLink class="btn" :to="route">{{ text }}</RouterLink>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },

  route: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  background-color: var(--green-accent);
  border: 2px solid var(--green-accent);
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 12px 35px;
  max-width: fit-content;
  text-decoration: none;
  color: var(--black);
  font-weight: 600;

  @media (hover: hover) {
    &:hover {
      background-color: var(--black);
      color: var(--green-accent);
    }
  }

  @media (hover: none) {
    &:active {
      background-color: var(--black);
      color: var(--green-accent);
    }
  }
}
</style>
