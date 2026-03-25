/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Compressão automática e otimizações */
  compress: true,
  poweredByHeader: false,
  
  /* Otimização de imagens */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
