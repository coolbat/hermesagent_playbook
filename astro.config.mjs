import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkGfm from "remark-gfm";

const site = process.env.SITE_URL ?? "https://hermes-agent-playbook.example.com";

export default defineConfig({
  site,
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
