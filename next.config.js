await import("./src/env.js");

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  reloadOnOnline: true,
});

/** @type {import("next").NextConfig} */
const config = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.awsli.com.br'
      },
    ],
  },
});

export default config;
