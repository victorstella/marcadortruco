import type { Metadata } from 'next';
import './globals.css';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Marcador de Truco',
  authors: [{ name: 'Victor Stella' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn('font-sans', geist.variable)}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className="flex bg-teal-950 min-h-screen w-full max-md:px-2 items-center justify-center">
        {children}
      </body>
    </html>
  );
}
