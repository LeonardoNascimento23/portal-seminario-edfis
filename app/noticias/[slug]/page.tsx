import Image from 'next/image';
import Link from 'next/link';
import { noticias } from '../data';

export async function generateStaticParams() {
  return noticias.map((noticia) => ({
    slug: noticia.link.replace('/noticias/', ''),
  }));
}

export default function NoticiaPage({ params }: { params: { slug: string } }) {
  const noticia = noticias.find(n => n.link.replace('/noticias/', '') === params.slug);

  if (!noticia) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#204F8C] mb-4">Notícia não encontrada</h1>
            <Link 
              href="/noticias"
              className="inline-block bg-[#204F8C] text-white px-6 py-3 rounded-lg hover:bg-[#1a3f6f] transition-colors duration-300"
            >
              Voltar para Notícias
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#204F8C]">{noticia.titulo}</h1>
          <Link 
            href="/noticias"
            className="inline-block bg-[#204F8C] text-white px-6 py-3 rounded-lg hover:bg-[#1a3f6f] transition-colors duration-300"
          >
            Voltar para Notícias
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-96">
            <Image
              src={noticia.imagem}
              alt={noticia.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-8">
            <p className="text-sm text-gray-500 mb-2">{noticia.data}</p>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">{noticia.resumo}</p>
              <div className="whitespace-pre-line text-gray-700">
                {noticia.conteudo}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
