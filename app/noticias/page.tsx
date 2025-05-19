import Image from 'next/image';
import Link from 'next/link';
import { noticias } from './data';

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#204F8C]">Notícias</h1>
          <Link 
            href="/"
            className="inline-block bg-[#204F8C] text-white px-6 py-3 rounded-lg hover:bg-[#1a3f6f] transition-colors duration-300"
          >
            Voltar para Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {noticias.map((noticia) => (
            <article key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <h2 className="text-3xl font-bold mb-4 text-[#204F8C]">{noticia.titulo}</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">{noticia.resumo}</p>
                  <Link 
                    href={noticia.link}
                    className="inline-block bg-[#204F8C] text-white px-4 py-2 rounded hover:bg-[#1a3f6f] transition-colors duration-300"
                  >
                    Leia mais
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
