'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const imagens = [
  {
    src: '/images/galeria/seminarioedfis20250519_002.jpeg',
    alt: 'Seminário de Educação Física 2025 - Palestra',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_003.jpeg',
    alt: 'Seminário de Educação Física 2025 - Workshop',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_004.jpeg',
    alt: 'Seminário de Educação Física 2025 - Atividade Prática',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_005.jpeg',
    alt: 'Seminário de Educação Física 2025 - Oficina',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_006.jpeg',
    alt: 'Seminário de Educação Física 2025 - Apresentação',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_007.jpeg',
    alt: 'Seminário de Educação Física 2025 - Palestra',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_008.jpeg',
    alt: 'Seminário de Educação Física 2025 - Workshop',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_009.jpeg',
    alt: 'Seminário de Educação Física 2025 - Atividade Prática',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_010.jpeg',
    alt: 'Seminário de Educação Física 2025 - Oficina',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_011.jpeg',
    alt: 'Seminário de Educação Física 2025 - Apresentação',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_012.jpeg',
    alt: 'Seminário de Educação Física 2025 - Palestra',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_013.jpeg',
    alt: 'Seminário de Educação Física 2025 - Workshop',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_014.jpeg',
    alt: 'Seminário de Educação Física 2025 - Atividade Prática',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_015.jpeg',
    alt: 'Seminário de Educação Física 2025 - Oficina',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_016.jpeg',
    alt: 'Seminário de Educação Física 2025 - Apresentação',
    title: 'Seminário de Educação Física 2025'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_017.jpeg',
    alt: 'Seminário de Educação Física 2025 - Encerramento',
    title: 'Seminário de Educação Física 2025'
  }
];

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#204F8C]">Galeria de Fotos</h1>
          <Link 
            href="/"
            className="inline-block bg-[#204F8C] text-white px-6 py-3 rounded-lg hover:bg-[#1a3f6f] transition-colors duration-300"
          >
            Voltar para Home
          </Link>
        </div>

        <p className="text-gray-600 mb-8">Confira os melhores momentos das edições anteriores do Seminário de Educação Física</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagens.map((imagem, index) => (
            <div key={index} className="relative group aspect-square">
              <div 
                className="overflow-hidden rounded-lg shadow-md h-full cursor-pointer"
                onClick={() => setSelectedImage(imagem.src)}
              >
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div 
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end justify-center p-2"
                onClick={() => setSelectedImage(imagem.src)}
              >
                <h3 className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {imagem.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
