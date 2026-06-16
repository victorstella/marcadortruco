import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marcador de Truco',
    short_name: 'Truco',
    description: 'Marcador de placar para partidas de Truco. Sem instalação, sem cadastro.',
    start_url: '/',
    display: 'standalone',
    background_color: '#042f2e',
    theme_color: '#042f2e',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
