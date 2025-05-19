'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#204F8C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo-educacao-fisica-ufgd.png"
              alt="Logo Educação Física UFGD"
              width={64}
              height={64}
              className="mb-4 rounded-full border-2 border-[#A68521] bg-white"
            />
            <p className="text-gray-300 mb-4">
              XI Seminário de Educação Física da UFGD - Um evento acadêmico para discutir temas relevantes da área e promover integração profissional.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A68521]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/programacao" className="text-gray-300 hover:text-white transition-colors">
                  Programação
                </Link>
              </li>
              <li>
                <Link href="/oficinas" className="text-gray-300 hover:text-white transition-colors">
                  Oficinas
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/inscricao" className="text-gray-300 hover:text-white transition-colors">
                  Inscrição
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A68521]">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Universidade Federal da Grande Dourados</li>
              <li>Faculdade de Educação Física</li>
              <li>Dourados - MS</li>
              <li>Email: seminarioedfis@ufgd.edu.br</li>
            </ul>
          </div>
        </div>

        {/* Copyright e Créditos */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white font-medium mb-2">
            &copy; {new Date().getFullYear()} XI Seminário de Educação Física UFGD. Todos os direitos reservados.
          </p>
          <p className="text-gray-300">
            Desenvolvido por{' '}
            <a 
              href="https://linktr.ee/Leonardo.Vital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A68521] hover:text-white transition-colors"
            >
              Leonardo Nascimento
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
