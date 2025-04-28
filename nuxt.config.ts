import { fileURLToPath, URL } from "node:url";
const year = 31556952;

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  alias: {
    "/css": fileURLToPath(new URL("./assets/css", import.meta.url)),
  },

  app: {
    head: {
      title: "Найбільший пейнтбол та страйкбол в Україні",
      titleTemplate: "%s | HEADSHOT",
      meta: [
        {
          name: "description",
          content:
            "Найбільший пейнтбольний та страйкбольний полігон в Україні. Одеса, вул. Сергія Ядова, 6. Понад 22000 кв.м. площі, 150+ комплектів обладнання, криті та відкриті локації, організація харчування.",
        },
        {
          name: "keywords",
          content:
            "пейнтбол Одеса, страйкбол Одеса, полігон пейнтбол, полігон страйкбол, оренда обладнання, активний відпочинок Одеса, квести, джелібол, корпоративні ігри, тимбілдинг",
        },
        {
          name: "author",
          content: "Headshot",
        },
        {
          name: "apple-mobile-web-app-title",
          content: "Headshot",
        },
        {
          property: "og:title",
          content:
            "Headshot — Найбільший пейнтбол та страйкбол в Україні | Одеса",
        },
        {
          property: "og:description",
          content:
            "Більше 22000 кв.м. площі для пейнтболу та страйкболу в Одесі. Професійне обладнання, харчування, організація заходів.",
        },
        {
          property: "twitter:title",
          content:
            "Headshot — Найбільший пейнтбол та страйкбол в Україні | Одеса",
        },
        {
          property: "twitter:description",
          content:
            "Більше 22000 кв.м. площі для пейнтболу та страйкболу в Одесі. Професійне обладнання, харчування, організація заходів.",
        },
      ],
      htmlAttrs: {
        lang: "uk",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://api.maptiler.com",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },

  css: [
    "/css/nullstyle.css",
    "/css/base.scss",
    "/css/utils.scss",
    "/css/animations.scss",
    "/css/vendors/formkit.scss",
  ],

  delayHydration: {
    mode: "init",
  },

  fonts: {
    priority: ["fontsource", "google"],
  },

  image: {
    quality: 75,
  },

  imports: {
    presets: [
      {
        from: "gsap",
        imports: ["gsap"],
      },
      {
        from: "gsap/ScrollToPlugin",
        imports: ["ScrollToPlugin"],
      },
      {
        from: "gsap/ScrollTrigger",
        imports: ["ScrollTrigger"],
      },
    ],
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    routeRules: {
      "/_ipx/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/img/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/svg/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/fonts/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
      "/_nuxt/**": {
        headers: { "cache-control": `public,max-age=${year},s-maxage=${year}` },
      },
    },
  },

  ogImage: {
    defaults: {
      renderer: "satori",
      extension: "png",
    },
    compatibility: {
      // disable chromium dependency for prerendering (skips the chromium install in CIs)
      prerender: {
        chromium: false,
      },
    },
  },

  routeRules: {
    "/telegram/**": {
      proxy: `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/**`,
      cache: false,
    },
  },

  site: {
    url: "https://www.pbl.od.ua/",
    name: "Headshot",
  },

  vitalizer: {
    disableStylesheets: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "/css/additional_data" as *;
                `,
        },
      },
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-svgo",
    "nuxt-toast",
    "@formkit/nuxt",
    "@formkit/auto-animate",
    "nuxt-delay-hydration",
    "nuxt-vitalizer",
    "nuxt-maplibre",
  ],
});
