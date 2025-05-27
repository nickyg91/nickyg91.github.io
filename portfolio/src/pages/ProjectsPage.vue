<script setup lang="ts">
import type { IProject } from '@/models/IProject';

const projects: IProject[] = [
  {
    name: 'hamdlebot',
    blurb:
      'A twitch bot written in ASP.NET Core and Background Workers utilizing SignalR, Redis, Postgres, to create a real time twitch chat bot that can manage your channel and play a version of Wordle with your viewers.',
    link: 'https://github.com/nickyg91/hamdlebot',
    inActiveDevelopment: false
  },
  {
    name: 'Recipe Crawler',
    blurb:
      'A web crawler written in C# that strips recipes from a given URL of any extraneous content and returns the recipe in a structured format.',
    link: 'https://github.com/nickyg91/recipe-crawler',
    inActiveDevelopment: false
  },
  {
    name: 'Wisconsin Childcare Browser',
    blurb:
      'A web application written in Vue 3 and ASP.NET Core that allows users to search for childcare providers and vaccine centers in Wisconsin using the Wisconsin DHS API data.',
    link: 'https://github.com/nickyg91/wisconsin-childcare-browser',
    inActiveDevelopment: false
  },
  {
    name: 'Animal Crossing Amiibo Tracker',
    blurb:
      'A web application written in Vue 3 and ASP.NET Core that allows users to search for Animal Crossing Amiibo cards and track their collection.',
    link: 'https://ac-amiibo.nickganter.dev',
    inActiveDevelopment: false
  },
  {
    name: 'Armored Core 6 Emblem Browser',
    blurb:
      'A site to browse user created emblems in Armored Core 6. Built with Vue 3 and ASP.NET Core with Azure Blob Storage and Redis.',
    link: 'https://github.com/nickyg91/armored-core-6-emblem-browser',
    inActiveDevelopment: false
  },
  {
    name: "Looter's Anonymous Raid Loot Tracker",
    blurb:
      'A web application written in Vue 3 and ASP.NET Core that allows users to track their raid loot in World of Warcraft. This application utilizes the Blizzard API and is secured via OAuth to fetch raid data and allows guild members to create their loot wishlists and sync their gear to each character.',
    inActiveDevelopment: true,
    link: 'https://looters-anonymous.nickganter.dev'
  }
];
</script>
<template>
  <div>
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Projects</h1>
          <p class="py-6">
            Below are a few personal projects I have worked on. I have a passion for building
            anything that comes to mind for personal projects, and I love to learn new technologies
            and frameworks. If you have any questions about any of these projects, feel free to
            reach out!
          </p>
          <a href="https://github.com/nickyg91" target="_blank" class="btn btn-primary">
            <i class="fa-brands fa-github text-black text-2xl"></i>
            Github
          </a>
        </div>
      </div>
    </div>
    <div class="flex mt-5">
      <div v-for="project in projects" :key="project.name" class="p-5">
        <div class="card bg-base-300 shadow-xl min-h-60">
          <div class="card-body">
            <h2 class="card-title">
              <a :href="project.link" target="_blank" class="link link-hover text-primary">
                {{ project.name }}
              </a>
            </h2>
            <p>{{ project.blurb }}</p>
            <div v-if="project.inActiveDevelopment" class="card-actions justify-end">
              <span class="badge badge-success">
                In Active Development
                <i class="fa-solid fa-gears"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
