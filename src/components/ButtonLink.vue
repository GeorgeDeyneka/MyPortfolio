<template>
  <a
    rel="noopener"
    class="btn"
    :href="link"
    :class="{
      small: size === 'small',
      medium: size === 'medium',
    }"
    :title="text"
    >{{ text }}</a
  >
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    default: "medium",
    validator: function (value) {
      return ["medium", "small"].indexOf(value) !== -1;
    },
  },
});
</script>

<style lang="scss" scoped>
.small {
  padding: 10px 25px;
}

.medium {
  padding: 12px 35px;
}

.btn {
  display: block;
  text-decoration: none;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
  font-weight: 500;
  transition: background-color 200ms ease-in;
  white-space: nowrap;
  cursor: pointer;
  max-width: fit-content;

  @media (hover: hover) {
    &:hover {
      background-color: var(--light-gray-hover);
    }
  }

  @media (hover: none) {
    &:active {
      background-color: var(--light-gray-hover);
    }
  }
}
</style>
