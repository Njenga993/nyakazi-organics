import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 This enables static export
  reactCompiler: true,
  images: {
    unoptimized: true, // 👈 Required for static export if using next/image
    qualities: [75, 85], // Optional: Define custom quality levels for images
  },
  // If you're NOT using next/image at all, you can skip the images config
};

export default nextConfig;
