import Image from 'next/image';

const fotos = [
  {
    id: 1,
    url: '/images/galeria/foto1.jpg',
    titulo: 'Abertura do Evento',
    descricao: 'Momento da abertura do XI Seminário de Educação Física'
  },
  {
    id: 2,
    url: '/images/galeria/foto2.jpg',
    titulo: 'Palestra Principal',
    descricao: 'Palestra sobre Inovação em Educação Física'
  },
  {
    id: 3,
    url: '/images/galeria/foto3.jpg',
    titulo: 'Oficina Prática',
    descricao: 'Participantes durante oficina prática'
  },
  {
    id: 4,
    url: '/images/galeria/foto4.jpg',
    titulo: 'Networking',
    descricao: 'Momento de networking entre participantes'
  },
  {
    id: 5,
    url: '/images/galeria/foto5.jpg',
    titulo: 'Apresentação de Trabalhos',
    descricao: 'Apresentação de trabalhos científicos'
  },
  {
    id: 6,
    url: '/images/galeria/foto6.jpg',
    titulo: 'Encerramento',
    descricao: 'Momento do encerramento do evento'
  }
];

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Galeria de Fotos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto) => (
            <div key={foto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={foto.url}
                  alt={foto.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{foto.titulo}</h2>
                <p className="text-gray-600">{foto.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Fotos do XI Seminário de Educação Física - Edição 2024
          </p>
          <p className="text-gray-600">
            Para mais fotos, acesse nosso álbum completo no Facebook
          </p>
        </div>
      </div>
    </div>
  );
}
