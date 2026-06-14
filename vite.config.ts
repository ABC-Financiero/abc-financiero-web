import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Force nitro to build for Vercel instead of the default Cloudflare preset.
  // Output goes to .vercel/output/ which Vercel auto-detects (no vercel.json needed).
  nitro: {
    preset: "vercel",
  },
});
