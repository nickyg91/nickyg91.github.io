<script setup lang="ts">
import AboutMe from '@/components/home/AboutMe.vue';
import SkillsGrid from '@/components/home/SkillsGrid.vue';
</script>
<template>
  <div>
    <div class="p-5">
      <div class="text-center">
        <img src="../assets/images/headshot.jpg" alt="headshot" class="rounded-full h-48 w-48 mx-auto" />
      </div>
      <AboutMe></AboutMe>
    </div>
    <div>
      <SkillsGrid></SkillsGrid>
    </div>
  </div>
</template>
<style scoped></style>
