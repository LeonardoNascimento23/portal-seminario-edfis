'use client';

import { useState } from 'react';
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

export default function OficinasPage() {
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Oficinas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oficinas.map((oficina) => (
            <div key={oficina.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
      </div>

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
    </div>
  );
}
