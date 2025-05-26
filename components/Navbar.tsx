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
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo-educacao-fisica-ufgd.png"
              alt="Logo Educação Física UFGD"
              width={40}
              height={40}
              className="h-12 w-auto rounded-full border-2 border-[#A68521] bg-white shadow-md group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left w-full max-w-md">
              <span 
                className="text-lg md:text-xl font-bold tracking-tight text-white drop-shadow-md group-hover:text-[#A68521] transition-colors leading-tight"
                title="XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física"
              >
                XI Seminário em Educação Física
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-2 py-1 rounded transition-all duration-200 text-white hover:text-[#A68521] hover:bg-white/10 ${
                  isActive(link.href)
                    ? 'font-semibold underline underline-offset-4 text-[#A68521] bg-white/10 border-b-2 border-[#A68521]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/inscricao" className="btn btn-accent shadow-md border-2 border-[#A68521] hover:bg-[#A68521] hover:text-white transition-all duration-200">
              Inscreva-se
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
