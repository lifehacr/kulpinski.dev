// @ts-check
import cloudflare from "@astrojs/cloudflare"
import mdx from "@astrojs/mdx"
import preact from "@astrojs/preact"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"

// https://astro.build/config
export default defineConfig({
  experimental: {
    responsiveImages: true,
    svg: true,
  },
  compressHTML: true,
  adapter: cloudflare(),
      webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  markdown: {
    shikiConfig: { theme: "css-variables", wrap: true },
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
  site: process.env.SITE_URL || "https://awfys.com",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap(), mdx(), preact()],
})
