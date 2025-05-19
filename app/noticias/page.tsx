import Link from 'next/link';
import { mockNewsArticles } from '@/data/mockData';

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Notícias</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNewsArticles.map((noticia) => (
            <div key={noticia.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={noticia.imageUrl}
                  alt={noticia.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white/90 text-sm">{noticia.date}</span>
                  <h2 className="text-xl font-semibold text-white">{noticia.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{noticia.summary}</p>

                {noticia.relatedArticles && noticia.relatedArticles.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-[#204F8C]">Artigos Relacionados:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {noticia.relatedArticles.map((artigo, index) => (
                        <li key={index}>{artigo}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Autor: {noticia.author}</span>
                  <Link href={`/noticias/${noticia.id}`} className="btn btn-accent">
                    Ler mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/inscricao" className="btn btn-primary">
            Fazer Inscrição
          </Link>
        </div>
      </div>
    </div>
  );
}
