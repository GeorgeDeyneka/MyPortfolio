<template>
  <main class="wrapper">
    <section class="projects">
      <div class="projects__title">
        <AppButtonBack />
        <h2>{{ $t("projects.categoriesTitle") }}</h2>
      </div>

      <ul class="projects__cards">
        <ProjectCategoryCard
          v-for="item of $tm('projects.cards')"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
          :icon-path="item.iconPath"
          :route="item.path"
        />
      </ul>
    </section>
  </main>
</template>

<script setup>
import ProjectCategoryCard from "@/views/ProjectCategoryCard.vue";
import AppButtonBack from "@/components/AppButtonBack.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/base/variables.scss";

.wrapper {
  position: relative;
}

.projects {
  &__title {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__cards {
    display: flex;
    gap: 30px;
    margin: 40px 0;
    flex-direction: column;

    @media #{$tablet} {
      flex-direction: row;
    }

    @media #{$desktop-sm} {
      padding: 20px 60px;
    }
  }

  .card {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 20px;
    background-color: var(--dark-gray-bg);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;

    @media #{$tablet} {
      padding: 30px 20px;
      justify-content: space-between;
    }

    @media #{$desktop-sm} {
      flex-direction: column;
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.05);

        .pop-up {
          @media #{$desktop} {
            transform: translateY(0%);
          }
        }
      }
    }

    @media (hover: none) {
      &:active {
        transform: scale(1.05);
      }
    }

    &__subtitle {
      font-size: 20px;
      padding-top: 5px;
    }

    &__icon {
      margin: 20px 0;
      @media #{$tablet} {
        margin: 20px auto;
      }
    }
  }
}
</style>
