<template>
  <footer class="footer">
    <div class="container">
      <i18n-t
        keypath="footer.desc"
        tag="p"
        class="footer__item text"
        scope="global"
      >
        <strong>{{ $t("footer.name") }}</strong>
        <strong>{{ $t("footer.framework") }}</strong>
      </i18n-t>

      <ul class="footer__item network">
        <ContactItem
          v-for="item of contacts"
          :key="item.link"
          fill-color="#c3c3c3"
          hover-color="#75fa7f"
          :is-show-title="false"
          :link-item="item"
        />
      </ul>

      <div class="footer__item hire-btn">
        <AppButtonLink
          :text="$t('button.hire.text')"
          :link="$t('button.hire.link')"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { contacts } from "@/lang/data";
import AppButtonLink from "@/components/AppButtonLink.vue";
import ContactItem from "@/components/ContactItem.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.footer {
  color: var(--gray-text);
  background-color: var(--dark-gray-bg);

  &__item {
    @media #{$desktop} {
      min-width: 280px;
    }
  }

  .text {
    &:deep(> strong) {
      color: var(--light-green-accent);
    }

    @media #{$desktop} {
      max-width: 280px;
    }
  }

  .network {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  .hire-btn {
    @media #{$desktop} {
      display: flex;
      justify-content: center;
    }
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media #{$desktop} {
      padding: 10px 0;
    }
  }
}
</style>
