<template>
  <section class="collab">
    <h3 class="green-subtitle">{{ $t("about.collab.subtitle") }}</h3>
    <h2 class="collab__title">{{ $t("about.collab.title") }}</h2>

    <div class="collab__buttons">
      <AppButtonNav
        :text="$t('button.contacts.text')"
        :route="$t('button.contacts.link')"
      />
      <AppButtonLink
        :text="$t('button.hire.text')"
        :link="$t('button.hire.link')"
      />
    </div>
  </section>
</template>

<script setup>
import AppButtonLink from "@/components/AppButtonLink.vue";
import AppButtonNav from "@/components/AppButtonNav.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.collab {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 50px;

  @media #{$tablet} {
    padding: 50px 0;
  }

  &__title {
    font-size: 45px;
    padding: 10px 0 40px;
    max-width: 650px;
    text-align: center;
    line-height: 1.3;

    @media #{$tablet} {
      font-size: 80px;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;

    @media #{$tablet} {
      gap: 40px;
    }
  }
}
</style>
