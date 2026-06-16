import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const siteUrl = 'https://marcadortruco.vercel.app';

export const metadata: Metadata = {
  title: 'Marcador de Truco',
  description:
    'Marcador de placar online para partidas de Truco. Suporta Truco, Seis, Nove e Doze. Funciona no celular e no desktop — sem instalação, sem cadastro e sem coleta de dados.',
  authors: [{ name: 'Victor Stella' }],
  keywords: [
    'truco',
    'marcador de truco',
    'placar de truco',
    'truco paulista',
    'truco mineiro',
    'pontuação truco',
    'jogo de cartas',
    'scoreboard truco',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Marcador de Truco',
    description:
      'Marcador de placar online para partidas de Truco. Sem instalação, sem cadastro.',
    siteName: 'Marcador de Truco',
    locale: 'pt_BR',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Marcador de Truco',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Marcador de Truco',
    description:
      'Marcador de placar online para partidas de Truco. Sem instalação, sem cadastro.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Marcador de Truco',
  url: siteUrl,
  description:
    'Marcador de placar online para partidas de Truco. Suporta Truco, Seis, Nove e Doze.',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  inLanguage: 'pt-BR',
  isAccessibleForFree: true,
  author: {
    '@type': 'Person',
    name: 'Victor Stella',
    url: 'https://github.com/victorstella',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn('font-sans', geist.variable)}>
      <head>
        <link rel="shortcut icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex bg-teal-950 min-h-screen w-full max-md:px-2 items-center justify-center">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
