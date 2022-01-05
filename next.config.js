/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const config = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
};

module.exports = withBundleAnalyzer(config);
