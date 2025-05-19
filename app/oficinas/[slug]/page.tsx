import { getWorkshopBySlug, getAllWorkshops } from '../../../utils/content';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const workshops = await getAllWorkshops();
  return workshops.map(item => ({ slug: item.slug }));
}

export default async function WorkshopDetailPage({ params }: { params: { slug: string } }) {
  const workshop = await getWorkshopBySlug(params.slug);

  if (!workshop) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Oficina não encontrada</h1>
        <Link href="/oficinas" className="text-blue-600 hover:text-blue-800">
          Voltar para lista de oficinas
        </Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/oficinas"
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
          Voltar para oficinas
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{workshop.title}</h1>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Data</p>
              <p className="font-semibold">{workshop.date}</p>
            </div>
            <div>
              <p className="text-gray-600">Horário</p>
              <p className="font-semibold">{workshop.time}</p>
            </div>
            <div>
              <p className="text-gray-600">Local</p>
              <p className="font-semibold">{workshop.location}</p>
            </div>
            <div>
              <p className="text-gray-600">Instrutor</p>
              <p className="font-semibold">{workshop.instructor}</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={workshop.image}
            alt={workshop.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose lg:prose-xl max-w-none">
          <h2 className="text-2xl font-bold mb-4">Sobre a Oficina</h2>
          <p>{workshop.description}</p>
        </div>
      </div>
    </article>
  );
}
