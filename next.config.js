const ContentSecurityPolicy = `
  frame-ancestors 'none';
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        pathname: "/api/v1/image/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
