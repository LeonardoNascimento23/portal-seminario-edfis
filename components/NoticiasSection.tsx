'use client';

import Image from 'next/image';
import Link from 'next/link';

const noticias = [
  {
    id: 1,
    titulo: 'Inscrições Abertas para o XII Seminário de Educação Física',
    resumo: 'As inscrições para o XII Seminário de Educação Física já estão abertas. Não perca a oportunidade de participar deste importante evento acadêmico.',
    data: '15 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/inscricoes-abertas'
  },
  {
    id: 2,
    titulo: 'Programação do XII Seminário de Educação Física',
    resumo: 'Confira a programação completa do XII Seminário de Educação Física, com palestras, workshops e atividades práticas.',
    data: '10 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/programacao'
  },
  {
    id: 3,
    titulo: 'Palestrantes Confirmados para o XII Seminário',
    resumo: 'Conheça os renomados palestrantes que já confirmaram presença no XII Seminário de Educação Física.',
    data: '5 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/palestrantes'
  }
];

export default function NoticiasSection() {
  return (
    <section id="noticias" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-[#204F8C] text-center">Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={noticia.imagem}
                  alt={noticia.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{noticia.data}</p>
                <h3 className="text-xl font-semibold mb-3 text-[#204F8C]">{noticia.titulo}</h3>
                <p className="text-gray-600 mb-4">{noticia.resumo}</p>
                <Link 
                  href={noticia.link}
                  className="inline-block bg-[#204F8C] text-white px-4 py-2 rounded hover:bg-[#1a3f6f] transition-colors duration-300"
                >
                  Leia mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 