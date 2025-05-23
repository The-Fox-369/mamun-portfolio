<template>
  <section
    id="projects"
    class="flex flex-col items-center py-20 dark:bg-[#1b1b1b] dark:text-white"
  >
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="mb-10 text-center">
        <h2 class="text-4xl font-bold">Projects</h2>
        <p class="mx-auto mt-4 max-w-2xl leading-3 text-gray-400">
          Here are some of my favorite projects that showcase my skills in web
          development.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="project in projects"
          :key="project.title"
          class="rounded-lg bg-[#e4e4e4] p-6 shadow-2xl dark:bg-[#1b1b1b] dark:text-white"
        >
          <h3 class="mt-4 text-xl font-semibold text-white">
            {{ project.title }}
          </h3>
          <p class="mt-2 text-gray-400">{{ project.description }}</p>
          <div class="mt-4 flex gap-4">
            <button>
              <a
                :href="project.live"
                target="_blank"
                class="rounded-md bg-[#1b1b1b] px-4 py-2 text-white shadow-lg transition duration-300 hover:bg-white hover:text-[#1b1b1b]"
              >
                Live Demo
              </a>
            </button>
            <button>
              <a
                :href="project.repo"
                target="_blank"
                class="rounded-md bg-[#1b1b1b] px-4 py-2 text-white shadow-lg transition duration-300 hover:bg-white hover:text-[#1b1b1b]"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import projects from "../projects.json";
</script>

<style scoped></style>
