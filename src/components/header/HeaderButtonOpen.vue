<template>
  <button :aria-label="$t('button.showDescription.text')" class="open-btn">
    <div class="open-btn__line"></div>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/base/mixins.scss";

.open-btn {
  @include burger-button;

  &__line {
    position: relative;
    @include burger-line;

    &::before,
    &::after {
      content: "";
      position: absolute;
      @include burger-line;
      left: 0;
    }

    &::before {
      top: -11px;
    }

    &::after {
      bottom: -11px;
    }
  }
}
</style>
