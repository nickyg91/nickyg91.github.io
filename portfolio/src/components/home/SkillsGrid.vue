<script setup lang="ts">
import type { ISkill } from '@/models/ISkill';
import { ref } from 'vue';

const skills = ref<ISkill[]>([
  {
    icons: ['fa-angular', 'fa-vuejs', 'fa-js-square', 'fa-react'],
    description: 'Frontend Development using ngx, Vue 3, React, Typescript, vanilla JS, or JQuery',
    modifier: 'fa-brands'
  },
  {
    icons: ['fa-microsoft'],
    description:
      'Web, Desktop, and mobile development using .NET Framework, ASP.NET MVC, ASP.NET Core, .NET Core, and Xamarin.',
    modifier: 'fa-brands'
  },
  {
    icons: ['fa-docker'],
    description: 'Experience in building and deploying applications in docker containers.',
    modifier: 'fa-brands'
  },
  {
    icons: ['fa-linode', 'fa-aws', 'fa-microsoft'],
    description:
      'Developing and deploying applications in cloud platforms such as AWS, Linode, and Microsoft Azure.',
    modifier: 'fa-brands'
  },
  {
    icons: ['fa-ubuntu', 'fa-fedora', 'fa-windows'],
    description:
      'Administration of Windows and Linux servers with web server software such as IIS, Nginx, and Apache.',
    modifier: 'fa-brands'
  },
  {
    icons: ['fa-database'],
    description:
      'Database development in MSSQL, Postgres, and Maria DB. NOSQL Development with Redis.',
    modifier: 'fa-solid'
  },
  {
    icons: ['fa-envelope'],
    description:
      'Experience with using Request/Response, Pub/Sub, and Fire/Forget using RabbitMQ, MassTransit, and Redis.',
    modifier: 'fa-solid'
  },
  {
    description: 'Native Android development using Kotlin.',
    icons: ['fa-android'],
    modifier: 'fa-brands'
  }
]);
</script>
<template>
  <div>
    <div class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
      <template v-for="skill in skills" :key="skill">
        <div class="flex flex-col flex-wrap p-2">
          <div class="w-full">
            <div class="flex justify-center space-x-8">
              <i
                class="text-5xl mb-2 text-primary"
                v-for="icon in skill.icons"
                :key="icon"
                :class="[skill.modifier, icon]"
              ></i>
            </div>

            <hr />
            <p class="text-2xl">{{ skill.description }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped></style>
