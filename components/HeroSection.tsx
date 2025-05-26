'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#204F8C] to-[#132B4C] z-10 mix-blend-multiply"></div>
      <div className="relative z-20 text-center flex flex-col items-center justify-center w-full px-4">
        <Image
          src="/images/logo-educacao-fisica-ufgd.png"
          alt="Logo Educação Física UFGD"
          width={128}
          height={128}
          className="mx-auto mb-6 rounded-full border-4 border-[#A68521] bg-white shadow-2xl animate-fade-in w-24 h-24 md:w-32 md:h-32"
          style={{ boxShadow: '0 8px 32px 0 rgba(32,79,140,0.25)' }}
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg text-balance text-white animate-fade-in max-w-4xl">
          XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-8 drop-shadow text-balance animate-fade-in delay-100 text-white">23 a 27 de Junho de 2025</p>
        <p className="text-lg md:text-xl mb-6 md:mb-8 drop-shadow text-balance animate-fade-in delay-100 text-white">Inscrições abertas até 07 de Junho de 2025</p>
        <Link href="/inscricao" className="btn btn-primary shadow-lg border-2 border-[#A68521] hover:bg-[#A68521] hover:text-white transition-all duration-200 animate-fade-in delay-200 w-full md:w-auto px-8 py-3 rounded-lg text-lg">
          Inscreva-se
        </Link>
      </div>
    </section>
  );
} 