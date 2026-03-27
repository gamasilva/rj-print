export const dynamic = "force-static";

export default function manifest() {
  return {
    name: 'RJ Print - Distribuidora Atacadista',
    short_name: 'RJ Print',
    description: 'Distribuidor atacadista de cartuchos e toners originais. Preço de fábrica e entrega rápida.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E1E24',
    theme_color: '#1E1E24',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
