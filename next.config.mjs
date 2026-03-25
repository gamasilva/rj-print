/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Exportação estática — gera HTML puro na pasta /out */
  output: "export",

  /* Compressão automática e otimizações */
  compress: true,
  poweredByHeader: false,

  /* Otimização de imagens (desabilitada para export estático) */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
