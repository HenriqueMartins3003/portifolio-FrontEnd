/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://avatars.githubusercontent.com/",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
