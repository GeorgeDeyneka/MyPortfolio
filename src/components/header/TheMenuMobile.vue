<template>
  <HeaderButtonOpen @click="toggleMenu" />

  <div :class="{ opened: isOpen }" class="navbar">
    <HeaderButtonClose @click="toggleMenu" />

    <nav class="navbar__list">
      <RouterLink
        v-for="route in $tm('nav')"
        :key="route.name"
        class="nav-link navbar__link"
        :class="{ 'nav-link-active': isExactRoute(route.path) }"
        :to="route.path"
        @click="toggleMenu"
        >{{ route.name }}</RouterLink
      >
    </nav>

    <HeaderLangSwitcher v-if="screenWidth < 768" />
  </div>

  <div v-if="isOpen" class="navbar__overlay" @click="toggleMenu"></div>
</template>

<script setup>
import HeaderLangSwitcher from "@/components/header/HeaderLangSwitcher.vue";
import HeaderButtonClose from "@/components/header/HeaderButtonClose.vue";
import HeaderButtonOpen from "@/components/header/HeaderButtonOpen.vue";
import { useRouter } from "vue-router";
import { useScreenWidthStore } from "@/store/screenWidth";
import { computed, onBeforeUnmount, ref } from "vue";

const router = useRouter();
const isOpen = ref(false);
const store = useScreenWidthStore();

const screenWidth = computed(() => store.screenWidth);

const isExactRoute = (path) => {
  return router.currentRoute.value.path.includes(path);
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  document.body.style.overflow = isOpen.value ? "hidden" : "";
};

onBeforeUnmount(() => {
  isOpen.value = true;
  toggleMenu();
});
</script>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  gap: 35px;
  background-color: var(--black);
  transform: translateX(-100%);
  transition: transform 0.4s ease-out;
  z-index: 1000;
  overflow: hidden;
  padding: 20px;

  &.opened {
    transform: translateX(0);
    overflow-y: auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__link {
    font-size: 30px;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
}
</style>
