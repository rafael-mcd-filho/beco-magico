const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.mux.com" },
      { protocol: "https", hostname: "**.cloudflarestream.com" },
    ],
  },
}
export default nextConfig
