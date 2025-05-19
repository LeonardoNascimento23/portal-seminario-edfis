'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const imagens = [
  {
    src: '/images/galeria/seminarioedfis20250519_002.jpeg',
    alt: 'Seminário de Educação Física 2023 - Palestra',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_003.jpeg',
    alt: 'Seminário de Educação Física 2023 - Workshop',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_004.jpeg',
    alt: 'Seminário de Educação Física 2023 - Atividade Prática',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_005.jpeg',
    alt: 'Seminário de Educação Física 2023 - Oficina',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_006.jpeg',
    alt: 'Seminário de Educação Física 2023 - Apresentação',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_007.jpeg',
    alt: 'Seminário de Educação Física 2023 - Palestra',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_008.jpeg',
    alt: 'Seminário de Educação Física 2023 - Workshop',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_009.jpeg',
    alt: 'Seminário de Educação Física 2023 - Atividade Prática',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_010.jpeg',
    alt: 'Seminário de Educação Física 2023 - Oficina',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_011.jpeg',
    alt: 'Seminário de Educação Física 2023 - Apresentação',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_012.jpeg',
    alt: 'Seminário de Educação Física 2023 - Palestra',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_013.jpeg',
    alt: 'Seminário de Educação Física 2023 - Workshop',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_014.jpeg',
    alt: 'Seminário de Educação Física 2023 - Atividade Prática',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_015.jpeg',
    alt: 'Seminário de Educação Física 2023 - Oficina',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_016.jpeg',
    alt: 'Seminário de Educação Física 2023 - Apresentação',
    title: 'Seminário de Educação Física 2023'
  },
  {
    src: '/images/galeria/seminarioedfis20250519_017.jpeg',
    alt: 'Seminário de Educação Física 2023 - Encerramento',
    title: 'Seminário de Educação Física 2023'
  }
];

export default function GaleriaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-[#204F8C] text-center">Galeria de Fotos</h2>
        <p className="text-gray-600 text-center mb-8">Confira os melhores momentos das edições anteriores do Seminário de Educação Física</p>
        
        {/* Grid de preview com 6 imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {imagens.slice(0, 6).map((imagem, index) => (
            <div key={index} className="relative group aspect-square">
              <div 
                className="overflow-hidden rounded-lg shadow-md h-full cursor-pointer"
                onClick={() => setSelectedImage(imagem.src)}
              >
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
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

        {/* Botão para ver galeria completa */}
        <div className="text-center">
          <Link 
            href="/galeria" 
            className="inline-block bg-[#204F8C] text-white px-6 py-3 rounded-lg hover:bg-[#1a3f6f] transition-colors duration-300"
          >
            Ver Galeria Completa
          </Link>
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
    </section>
  );
} 