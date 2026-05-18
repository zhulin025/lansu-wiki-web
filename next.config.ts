import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    ignoreIssue: [
      {
        path: "**",
      },
    ],
  },
};

export default nextConfig;
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  }).catch((err) => {
    console.error("Failed to load Cloudflare Dev Integration:", err);
  });
}
