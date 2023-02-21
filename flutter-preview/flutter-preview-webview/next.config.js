/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@flutter-preview/webview",
    // ui components
    "@editor-ui/properties",
  ],
};

module.exports = nextConfig;
