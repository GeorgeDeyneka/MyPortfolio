<template>
  <swiper-slide lazy="true">
    <div class="slide">
      <img
        class="slide__image"
        :src="infoItem.url"
        :style="{ 'min-height': `${imageHeight}px` }"
        alt="project-demo"
        loading="lazy"
      />
      <SwiperSlideDescription :text-data="infoItem.description" />
    </div>
  </swiper-slide>
</template>

<script setup>
import SwiperSlideDescription from "@/components/slider/SwiperSlideDescription.vue";

defineProps({
  infoItem: {
    type: Object,
    required: true,
  },

  imageHeight: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.slide {
  background-color: var(--dark-gray-swiper-bg);
  margin: 50px 0;

  @media #{$tablet} {
    margin: 35px 60px;
    border-radius: 4px;
    min-height: auto;
  }

  &__image {
    border-radius: 4px 4px 0 0;
    border: 1px solid var(--gray-skeleton);
    border-bottom: none;

    @media #{$tablet} {
      padding: 10px 0;
    }
  }
}
</style>
