import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.put-site-here.com/",
  integrations: [
    astroImageTools,
    sitemap(),
    react(),
    image(),
    tailwind(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    compress(),
  ],
});
