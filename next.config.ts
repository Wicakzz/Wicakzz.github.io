import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build jadi file statis (folder out/) agar bisa di-host di GitHub Pages.
  output: "export",
  images: {
    // GitHub Pages tidak punya server untuk optimasi gambar Next.js.
    unoptimized: true,
  },
};

export default nextConfig;
