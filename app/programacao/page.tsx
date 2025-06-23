'use client';

import { mockLectures, programacaoEvento } from '@/data/mockData';
import { useState, Fragment } from 'react';

export default function ProgramacaoPage() {
  const [selectedEvent, setSelectedEvent] = useState<null | {
    title: string;
    details: React.ReactNode;
  }>(null);

  // Função utilitária para mapear dias do evento para colunas do calendário
  const diasEvento = [
    '2025-06-23', // Segunda
    '2025-06-24', // Terça
    '2025-06-25', // Quarta
    '2025-06-26', // Quinta
    '2025-06-27', // Sexta
  ];

  // Mapeia atividades por dia e horário
  const atividadesPorDiaEHora: Record<string, Record<string, any[]>> = {};
  programacaoEvento.programacao.forEach((dia) => {
    if (!dia.data) return;
    if (!atividadesPorDiaEHora[dia.data]) atividadesPorDiaEHora[dia.data] = {};
    dia.atividades.forEach((atv) => {
      const hora = (atv.horario || '').split(':')[0] + ':00';
      if (!atividadesPorDiaEHora[dia.data][hora]) atividadesPorDiaEHora[dia.data][hora] = [];
      atividadesPorDiaEHora[dia.data][hora].push(atv);
    });
  });

  // Gerar dinamicamente todos os horários válidos (apenas HH:MM)
  const horariosSet = new Set<string>();
  programacaoEvento.programacao.forEach((dia) => {
    dia.atividades.forEach((atv) => {
      if (atv.horario && /^\d{2}:\d{2}$/.test(atv.horario)) {
        horariosSet.add(atv.horario);
      }
    });
  });
  // Ordenar horários
  const todosHorarios = Array.from(horariosSet).sort();

  const EventModal = () => {
    if (!selectedEvent) return null;

    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#204F8C] mb-4">{selectedEvent.title}</h3>
            <div className="text-gray-700 text-sm sm:text-base">{selectedEvent.details}</div>
          </div>
          <div className="border-t border-gray-200 p-4 flex justify-end">
            <button
              onClick={() => setSelectedEvent(null)}
              className="px-4 py-2 bg-[#204F8C] text-white rounded hover:bg-[#1A4173] transition-colors"
              aria-label="Fechar modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#204F8C] mb-8 text-center">PROGRAMAÇÃO<br/>XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física<br/><span className="text-base font-normal">De 23 a 27 de junho de 2025</span></h1>
        <div className="space-y-12">
          {programacaoEvento.programacao.map((dia, idx) => (
            <section key={dia.data || idx} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#A68521] mb-4">{dia.dia_semana?.toUpperCase()} ({dia.data?.split('-').reverse().join('/')})</h2>
              {/* Agrupar atividades por local */}
              {(() => {
                // Agrupar por local
                const atividadesPorLocal: Record<string, any[]> = {};
                dia.atividades.forEach(atv => {
                  const local = atv.local || 'Outro';
                  if (!atividadesPorLocal[local]) atividadesPorLocal[local] = [];
                  atividadesPorLocal[local].push(atv);
                });
                const locais = Object.keys(atividadesPorLocal);
                return locais.map((local, lidx) => (
                  <div key={local+lidx} className="mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#204F8C] mb-2">Local: {local}</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-2 text-left text-xs sm:text-sm md:text-base font-bold text-[#204F8C]">Horário</th>
                            <th className="p-2 text-left text-xs sm:text-sm md:text-base font-bold text-[#204F8C]">Atividade</th>
                            <th className="p-2 text-left text-xs sm:text-sm md:text-base font-bold text-[#204F8C]">Descrição</th>
                            <th className="p-2 text-left text-xs sm:text-sm md:text-base font-bold text-[#204F8C]">Participantes/Orientação</th>
                          </tr>
                        </thead>
                        <tbody>
                          {atividadesPorLocal[local]
                            .sort((a, b) => (a.horario || '').localeCompare(b.horario || ''))
                            .map((atv, aidx) => (
                            <tr key={aidx} className="border-b last:border-0">
                              <td className="p-2 align-top text-xs sm:text-sm md:text-base">{atv.horario || '-'}</td>
                              <td className="p-2 align-top text-xs sm:text-sm md:text-base font-semibold">{atv.titulo}</td>
                              <td className="p-2 align-top text-xs sm:text-sm md:text-base">{atv.descricao || '-'}</td>
                              <td className="p-2 align-top text-xs sm:text-sm md:text-base">
                                {atv.organizacao && <div><span className="font-bold">Organização:</span> {atv.organizacao}</div>}
                                {atv.orientador && <div><span className="font-bold">Orientador(a):</span> {atv.orientador}</div>}
                                {atv.arguidor && <div><span className="font-bold">Arguidor(a):</span> {atv.arguidor}</div>}
                                {atv.arguidora && <div><span className="font-bold">Arguidora:</span> {atv.arguidora}</div>}
                                {atv.avaliador && <div><span className="font-bold">Avaliador(a):</span> {atv.avaliador}</div>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ));
              })()}
            </section>
          ))}
        </div>
      </div>

      <EventModal />

      <style jsx>{`
        .calendar {
          max-width: 1280px;
          margin: 0 auto;
        }
        .outer {
          position: relative;
        }
        .wrap {
          overflow-x: hidden;
          border-radius: 0 0 8px 8px;
        }
        .headcol {
          position: sticky;
          left: 0;
          background: white;
          z-index: 1;
        }
        .event {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: 2px;
          transition: all 0.2s;
        }
        .event:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </main>
  );
} 