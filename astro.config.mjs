// @ts-check
import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import preact from "@astrojs/preact"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig, envField } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
    svg: true,
  },
  compressHTML: true,
  adapter: cloudflare(),
  markdown: {
    shikiConfig: { theme: "css-variables", wrap: true },
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
  env: {
    schema: {
      OPENPANEL_DOMAIN: envField.string({ context: "client", access: "public" }),
      OPENPANEL_URL: envField.string({ context: "client", access: "public" }),
    },
  },
  site: process.env.SITE_URL || "https://awfys.com",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx(), preact()],
})
