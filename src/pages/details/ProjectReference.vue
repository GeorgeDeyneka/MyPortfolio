<script>
export default {
  props: {
    urlLink: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="reference">
    <h2>{{ title }}:</h2>
    <a class="reference__link" target="_blank" :href="urlLink">{{ urlLink }}</a>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";

.reference {
  @include ellipsis;
  margin: 30px 0;
  max-width: 100%;

  &__link {
    color: var(--light-green-accent);
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
