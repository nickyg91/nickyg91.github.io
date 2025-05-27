<script setup lang="ts">
import AboutMe from '@/components/home/AboutMe.vue';
import SkillsGrid from '@/components/home/SkillsGrid.vue';
</script>
<template>
  <div>
    <div class="hero bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src="../assets/images/headshot.jpg" class="w-48 rounded-full shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Full Stack Staff Software Engineer</h1>
          <p class="py-6">
            Writing applications and learning new technologies are my passions. I sometimes stream
            games or software dev on my Twitch channel.
          </p>
          <div class="flex gap-2">
            <div>
              <a class="btn btn-info" href="https://www.linkedin.com/in/nickolas-g/">
                <i class="fa-brands fa-linkedin text-lg"></i>
                LinkedIn
              </a>
            </div>
            <div>
              <a href="https://github.com/nickyg91" target="_blank" class="btn btn-accent">
                <i class="fa-brands fa-github text-lg"></i>
                Github
              </a>
            </div>
            <div>
              <a href="https://twitch.tv/hamhamreborn" target="_blank" class="btn btn-warning">
                <i class="fa-brands fa-twitch text-lg"></i>
                Twitch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10">
      <AboutMe></AboutMe>
    </div>
    <div class="p-10 mt-2">
      <SkillsGrid></SkillsGrid>
    </div>
  </div>
</template>
<style scoped></style>
