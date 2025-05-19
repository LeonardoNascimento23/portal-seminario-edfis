'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';

const oficinas = [
  {
    id: 1,
    titulo: 'Introdução ao Beach Tennis',
    descricao: 'Aprenda os fundamentos básicos do Beach Tennis, incluindo regras, técnicas e estratégias.',
    ministrante: 'Prof. João Silva',
    horario: '19:00',
    local: 'Quadra de areia (ao lado do LABEF)',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe6YG2wcJDUKVIutGpAIbmMyKX4BoErlQzPraq-ggx0Zmov6Q/viewform?embedded=true',
    formHeight: 2968
  },
  {
    id: 2,
    titulo: 'Nutrição Esportiva Aplicada à Hipertrofia e Redução de Massa Gorda',
    descricao: 'Conheça os princípios da nutrição esportiva para ganho de massa muscular e perda de gordura.',
    ministrante: 'Dra. Maria Santos',
    horario: '19:00',
    local: 'Sala 9 (FAED)',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfWYt5r3CGj46fO4h-bFU7tceJ-Lk2rZgLyuZwyy22Soo0FwA/viewform?embedded=true',
    formHeight: 2374
  },
  {
    id: 3,
    titulo: 'Ginástica Rítmica',
    descricao: 'Explore os elementos básicos da ginástica rítmica, incluindo aparelhos e coreografias.',
    ministrante: 'Prof. Ana Oliveira',
    horario: '19:00',
    local: 'Laboratório de Atividades Rítmicas e Dança – LARDAN - (LABEF)',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdKMxTTzetNtxk02zXbSmnwxDq0hC-6aISWnVXDoV-KsHhjog/viewform?embedded=true',
    formHeight: 2616
  },
  {
    id: 4,
    titulo: 'Atividade Física Funcional',
    descricao: 'Descubra exercícios funcionais para melhorar a força, equilíbrio e coordenação.',
    ministrante: 'Professora Karla Mendes',
    horario: '19:00',
    local: 'Quadra Poliesportiva – Unidade II da UFGD',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3SYwwKbmhW8coOjZJRwFUivSx11bw3DkLOJPrtjCIQ2cdSA/viewform?embedded=true',
    formHeight: 2180
  },
  {
    id: 5,
    titulo: 'Esportes de Aventura',
    descricao: 'Conheça diferentes modalidades de esportes de aventura e suas técnicas básicas.',
    ministrante: 'Prof. Pedro Costa',
    horario: '19:00',
    local: 'Ao lado do LABEF',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSekKbjdBAUVqnj23RTbWEq0m7EoiJiYR5_CB89omI7BJrGb4Q/viewform?embedded=true',
    formHeight: 2909
  }
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOficina, setSelectedOficina] = useState<typeof oficinas[0] | null>(null);

  const handleOpenModal = (oficina: typeof oficinas[0]) => {
    setSelectedOficina(oficina);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOficina(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#204F8C] to-[#132B4C] z-10 mix-blend-multiply"></div>
        <div className="relative z-20 text-center flex flex-col items-center justify-center w-full">
          <img
            src="/images/logo-educacao-fisica-ufgd.png"
            alt="Logo Educação Física UFGD"
            className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-[#A68521] bg-white shadow-2xl animate-fade-in"
            style={{ boxShadow: '0 8px 32px 0 rgba(32,79,140,0.25)' }}
          />
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg text-balance bg-gradient-to-r from-[#A68521] via-white to-[#204F8C] bg-clip-text text-transparent animate-fade-in">
            XI Seminário de Educação Física
          </h1>
          <p className="text-xl mb-8 drop-shadow text-balance animate-fade-in delay-100">10 e 11 de Junho de 2025</p>
          <Link href="/inscricao" className="btn btn-primary shadow-lg border-2 border-[#A68521] hover:bg-[#A68521] hover:text-white transition-all duration-200 animate-fade-in delay-200">
            Inscreva-se
          </Link>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#204F8C]">Sobre o Evento</h2>
          <p className="text-gray-700 mb-6">O XI Seminário de Educação Física é um evento acadêmico que reúne profissionais, pesquisadores e estudantes para discutir temas relevantes da área, promover integração e atualização profissional.</p>
          <Link href="/sobre" className="btn btn-accent">Saiba mais</Link>
        </div>
      </section>

      {/* Programação Section */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#204F8C] text-center">Destaques da Programação</h2>
          <ul className="mb-6 divide-y divide-gray-200">
            <li className="py-4 flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="font-semibold text-[#A68521]">10/06/2025 - 10:00</span>
              <span className="text-gray-800">Oficina: Introdução ao Beach Tennis</span>
              <span className="text-gray-600">Quadra de Areia</span>
            </li>
            <li className="py-4 flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="font-semibold text-[#A68521]">10/06/2025 - 14:00</span>
              <span className="text-gray-800">Oficina: Nutrição Esportiva Aplicada</span>
              <span className="text-gray-600">Auditório Principal</span>
            </li>
            <li className="py-4 flex flex-col md:flex-row md:justify-between md:items-center">
              <span className="font-semibold text-[#A68521]">11/06/2025 - 09:00</span>
              <span className="text-gray-800">Oficina: Ginástica Rítmica</span>
              <span className="text-gray-600">Ginásio de Esportes</span>
            </li>
          </ul>
          <div className="text-center">
            <Link href="/programacao" className="btn btn-accent">Ver programação completa</Link>
          </div>
        </div>
      </section>

      {/* Oficinas Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#204F8C]">Oficinas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oficinas.slice(0, 3).map((oficina) => (
              <div key={oficina.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#204F8C]">{oficina.titulo}</h3>
                  <p className="text-gray-600 mb-4">{oficina.descricao}</p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Ministrante:</strong> {oficina.ministrante}</p>
                    <p><strong>Horário:</strong> {oficina.horario}</p>
                    <p><strong>Local:</strong> {oficina.local}</p>
                  </div>
                  <button
                    onClick={() => handleOpenModal(oficina)}
                    className="mt-4 w-full btn btn-accent"
                  >
                    Inscrever-se
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/oficinas" className="btn btn-primary">Ver todas as oficinas</Link>
          </div>
        </div>
      </section>

      {/* Notícias Section */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#204F8C] text-center">Notícias</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-[#A68521]">Inscrições abertas para o XI Seminário de Educação Física!</h3>
            <p className="text-gray-700 mb-2">Garanta sua vaga nas oficinas e participe de um dos maiores eventos acadêmicos da área. As vagas são limitadas!</p>
            <span className="text-gray-500 text-sm">Publicado em 01/06/2025</span>
          </div>
          <div className="text-center">
            <Link href="/noticias" className="btn btn-accent">Ver todas as notícias</Link>
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-[#204F8C] text-center">Galeria</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <img src="/images/galeria1.jpg" alt="Galeria 1" className="w-32 h-32 object-cover rounded-lg shadow-md" />
            <img src="/images/galeria2.jpg" alt="Galeria 2" className="w-32 h-32 object-cover rounded-lg shadow-md" />
            <img src="/images/galeria3.jpg" alt="Galeria 3" className="w-32 h-32 object-cover rounded-lg shadow-md" />
          </div>
          <div className="text-center">
            <Link href="/galeria" className="btn btn-accent">Ver galeria completa</Link>
          </div>
        </div>
      </section>

      {/* Modal de Inscrição */}
      {selectedOficina && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={`Inscrição - ${selectedOficina.titulo}`}
        >
          <div className="aspect-[640/2968] w-full max-w-3xl mx-auto">
            <iframe
              src={selectedOficina.formUrl}
              className="w-full h-full"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Carregando…
            </iframe>
          </div>
        </Modal>
      )}
    </main>
  );
}
