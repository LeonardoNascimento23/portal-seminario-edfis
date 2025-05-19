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

const programacao = [
  {
    data: '2024-12-10',
    eventos: [
      {
        titulo: 'Credenciamento',
        tipo: 'event',
        horario: '08:00 - 09:00',
        local: 'Hall Principal',
        descricao: 'Retirada de credenciais e materiais do evento.'
      },
      {
        titulo: 'Cerimônia de Abertura',
        tipo: 'event',
        horario: '09:00 - 10:00',
        local: 'Auditório Principal',
        descricao: 'Abertura oficial do evento com autoridades e palestrantes.'
      },
      {
        titulo: 'Introdução ao Beach Tennis',
        tipo: 'workshop',
        horario: '10:00 - 12:00',
        local: 'Quadra de Areia',
        descricao: 'Aprenda os fundamentos básicos do Beach Tennis.',
        oficinaId: 1
      },
      {
        titulo: 'Almoço',
        tipo: 'event',
        horario: '12:00 - 13:00',
        local: 'Restaurante Universitário',
        descricao: 'Horário de almoço.'
      },
      {
        titulo: 'Nutrição Esportiva Aplicada',
        tipo: 'workshop',
        horario: '14:00 - 16:00',
        local: 'Auditório Principal',
        descricao: 'Conheça os princípios da nutrição esportiva.',
        oficinaId: 2
      }
    ]
  },
  {
    data: '2024-12-11',
    eventos: [
      {
        titulo: 'Ginástica Rítmica',
        tipo: 'workshop',
        horario: '09:00 - 11:00',
        local: 'Ginásio de Esportes',
        descricao: 'Explore os elementos básicos da ginástica rítmica.',
        oficinaId: 3
      },
      {
        titulo: 'Atividade Física Funcional',
        tipo: 'workshop',
        horario: '15:00 - 17:00',
        local: 'Sala de Treinamento Funcional',
        descricao: 'Descubra exercícios funcionais para melhorar a força.',
        oficinaId: 4
      },
      {
        titulo: 'Esportes de Aventura',
        tipo: 'workshop',
        horario: '13:00 - 15:00',
        local: 'Área Externa',
        descricao: 'Conheça diferentes modalidades de esportes de aventura.',
        oficinaId: 5
      },
      {
        titulo: 'Cerimônia de Encerramento',
        tipo: 'event',
        horario: '17:00 - 18:00',
        local: 'Auditório Principal',
        descricao: 'Encerramento do evento com entrega de certificados.'
      }
    ]
  }
];

export default function ProgramacaoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOficina, setSelectedOficina] = useState<typeof oficinas[0] | null>(null);

  const handleOpenModal = (oficinaId: number) => {
    const oficina = oficinas.find(o => o.id === oficinaId);
    if (oficina) {
      setSelectedOficina(oficina);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOficina(null);
  };

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-');
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
  };

  const traduzirTipo = (tipo: string) => {
    const tipos: { [key: string]: string } = {
      'event': 'Evento',
      'workshop': 'Oficina',
      'presentation': 'Apresentação'
    };
    return tipos[tipo] || tipo;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-8">Programação</h1>

        <div className="space-y-12">
          {programacao.map((dia) => (
            <div key={dia.data} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#204F8C]">
                {formatarData(dia.data)}
              </h2>

              <div className="space-y-6">
                {dia.eventos.map((evento, index) => (
                  <div key={index} className="border-l-4 border-[#204F8C] pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-[#204F8C]">
                          {evento.titulo}
                        </h3>
                        <p className="text-gray-600 mt-1">{evento.descricao}</p>
                        <div className="mt-2 space-y-1 text-gray-600">
                          <p><strong>Horário:</strong> {evento.horario}</p>
                          <p><strong>Local:</strong> {evento.local}</p>
                          <p><strong>Tipo:</strong> {traduzirTipo(evento.tipo)}</p>
                        </div>
                      </div>
                      {evento.tipo === 'workshop' && evento.oficinaId && (
                        <button
                          onClick={() => handleOpenModal(evento.oficinaId)}
                          className="btn btn-accent"
                        >
                          Inscrever-se
                        </button>
                      )}
                    </div>
                  </div>
                ))}
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