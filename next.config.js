/** @type {import('next').NextConfig} */

const withImages = require("next-images");

module.exports = withImages({
  webpack(config, options) {
    return config;
  },

  // This line enables the dangerouslyAllowSVG option
  experimental: {
    // optimizeImages: true,
    // optimizeCss: true,
    // removeUnusedCss: true,
    // modern: true,
    scrollRestoration: true,

    // reactRoot: "root",
    // concurrentFeatures: true,
    dangerouslyAllowSVG: true,
    // svg
    appDir: true,
  },
  images: {
    domains: ["tailwindui.com"],
  },
});
