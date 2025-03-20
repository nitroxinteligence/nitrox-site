/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    // Corrigir problemas de compatibilidade com o Framer Motion
    serverComponentsExternalPackages: ['framer-motion'],
  },
};

export default nextConfig; 