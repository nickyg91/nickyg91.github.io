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
    <header class="w-full">
      <div class="navbar bg-neutral text-neutral-content">
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
          <div class="flex">
            <div class="mr-5">
              <RouterLink to="/" class="text-xl link link-hover">Home</RouterLink>
            </div>
            <div>
              <RouterLink to="/projects" class="text-xl link link-hover">Projects</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
