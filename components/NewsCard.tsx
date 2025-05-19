import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  title: string;
  date: string;
  content: string;
  image: string;
  slug: string;
}

interface Props {
  news: NewsItem;
}

export default function NewsCard({ news }: Props) {
  return (
    <article className="card group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={news.date}>{news.date}</time>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <p className="text-gray-700 line-clamp-3 mb-4">{news.content}</p>
        <Link
          href={`/noticias/${news.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Leia mais
          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
