<template>
  <section id="about" class="py-20 dark:bg-[#1b1b1b] dark:text-white">
    <div class="container mx-auto px-6 md:px-12 lg:px-20">
      <div class="mb-10 text-center">
        <h2 class="text-4xl font-bold">About Me</h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600">
          I'm a full-stack developer passionate about building beautiful and
          efficient web applications and designs.
        </p>
      </div>
      <div class="flex flex-col items-center gap-10 md:flex-row">
        <!-- Profile Image -->
        <img
          src="../public/imgs/fox.svg"
          alt="Your Profile"
          class="h-48 w-48 rounded-full object-cover shadow-lg"
        />
        <!-- Bio -->
        <div class="max-w-lg text-center md:text-left">
          <p class="text-lg text-gray-700">
            I specialize in front-end and back-end development, creating
            seamless user experiences. With expertise in modern frameworks and
            tools, I turn ideas into reality.
          </p>
          <p class="mt-4 text-lg text-gray-700">
            Whether it's a web app, a portfolio, or a startup project, I love
            solving problems with code and design.
          </p>
          <div class="mt-6">
            <a
              href="#contact"
              class="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-white hover:text-gray-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
