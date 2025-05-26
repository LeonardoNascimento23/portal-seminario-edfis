import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DecorativeIllustrations from '@/components/DecorativeIllustrations';

const saira = Saira({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-saira',
});

export const metadata: Metadata = {
  title: 'XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
  description: 'Evento acadêmico promovido pelo curso de Educação Física da UFGD',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={saira.variable}>
      <body className="font-sans">
        <Navbar />
        <DecorativeIllustrations />
        {children}
        <Footer />
      </body>
    </html>
  );
}
