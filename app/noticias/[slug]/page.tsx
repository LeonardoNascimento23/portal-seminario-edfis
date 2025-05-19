import { getNewsBySlug, getAllNews } from '../../../utils/content';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map(item => ({ slug: item.slug }));
}

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug);

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
        <Link href="/noticias" className="text-blue-600 hover:text-blue-800">
          Voltar para lista de notícias
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/noticias"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar para notícias
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>
        <p className="text-gray-600 mb-8">{news.date}</p>

        <div className="relative w-full h-[400px] mb-8">
          <Image src={news.image} alt={news.title} fill className="object-cover rounded-lg" />
        </div>

        <div className="prose lg:prose-xl max-w-none">{news.content}</div>
      </div>
    </article>
  );
}
