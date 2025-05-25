import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Mamun Portfolio",
      link: [{ rel: "icon", type: "image/png", href: "/imgs/1000003463.jpg" }],
    },
  },
});
