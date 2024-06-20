/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.contentstack.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eu-images.contentstack.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.vidstack.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
