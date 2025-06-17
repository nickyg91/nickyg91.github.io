<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const name = 'Nick Ganter';
const githubHandle = '@nickyg91';
const headerText = ref(name);

const onMouseEnter = () => {
  headerText.value = githubHandle;
};

const onMouseLeave = () => {
  headerText.value = name;
};
</script>

<template>
  <div class="min-h-screen">
    <header class="w-full text-base-content sticky top-0 z-30 shadow-sm">
      <div
        class="navbar bg-base-300 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)]"
      >
        <div class="navbar-start">
          <a
            @mouseleave="onMouseLeave"
            @mouseenter="onMouseEnter"
            href="https://github.com/nigkyg91"
            class="btn btn-ghost text-xl"
          >
            {{ headerText }}
          </a>
        </div>
        <div class="navbar-end">
          <div class="flex p-5">
            <div class="mr-5">
              <RouterLink active-class="active" to="/" class="text-xl link link-hover"
                >Home</RouterLink
              >
            </div>
            <div>
              <RouterLink active-class="active" to="/projects" class="text-xl link link-hover"
                >Projects</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="relative">
      <Transition name="fade" mode="out-in">
        <RouterView />
      </Transition>
    </div>
    <div class="p-5 w-full text-base-content bottom-0">
      <p class="text-sm">Powered by Vue 3, Nginx, and Fedora Server 41.</p>
    </div>
  </div>
</template>

<style scoped></style>
