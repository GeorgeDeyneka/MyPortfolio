<script>
import SvgIcon from "../icons/SvgIcon.vue";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    route: {
      type: String,
      required: true,
    },
  },
  components: { SvgIcon },
};
</script>

<template>
  <RouterLink class="btn" :to="route">
    <SvgIcon
      class="icon"
      :size="30"
      stringPath="#icon-arrow"
      fillColor="var(--white)"
    />
    {{ text }}
  </RouterLink>
</template>

<style lang="scss" scoped>
.icon {
  transform: rotate(-90deg);
}
.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  transition: all 200ms ease-in;
  cursor: pointer;
  padding: 10px 0;
  max-width: fit-content;
  text-decoration: none;
  color: var(--white);
  font-weight: 600;
}
</style>
