'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/programacao', label: 'Programação' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/oficinas', label: 'Oficinas' },
    { href: '/galeria', label: 'Galeria' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#204F8C] to-[#1A4173] text-white shadow-xl sticky top-0 z-50 border-b-4 border-[#A68521]">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center h-20 gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-educacao-fisica-ufgd.png"
              alt="Logo Educação Física"
              width={40}
              height={40}
              className="w-10 h-10"
              style={{ backgroundColor: 'white', borderRadius: '20px' }}
            />
            <span className="text-xl font-semibold text-[white] hover:text-[#A68521]">XI Seminário de Educação Física</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[white] hover:text-[#A68521] font-medium">
              Início
            </Link>
            <Link href="/programacao" className="text-[white] hover:text-[#A68521] font-medium">
              Programação
            </Link>
            <Link href="/oficinas" className="text-[white] hover:text-[#A68521] font-medium">
              Oficinas
            </Link>
            <Link href="/galeria" className="text-[white] hover:text-[#A68521] font-medium">
              Galeria
            </Link>
            <Link href="/noticias" className="text-[white] hover:text-[#A68521] font-medium">
              Notícias
            </Link>
            <Link href="/sobre" className="text-[white] hover:text-[#A68521] font-medium">
              Sobre
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#1A4173] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-[#1A4173] rounded-b-lg shadow-lg`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 transition-all duration-200 text-white hover:bg-white/20 ${
                  isActive(link.href)
                    ? 'bg-white/20 font-semibold text-white border-l-4 border-[#A68521]' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/inscricao"
                className="block w-full py-2 text-center bg-[#A68521] text-white hover:bg-[#8B6E1B] rounded-lg transition-all duration-200 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscreva-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
