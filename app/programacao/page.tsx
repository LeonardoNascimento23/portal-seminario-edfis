'use client';

import { mockLectures } from '@/data/mockData';
import { useState } from 'react';

export default function ProgramacaoPage() {
  const [selectedEvent, setSelectedEvent] = useState<null | {
    title: string;
    details: React.ReactNode;
  }>(null);

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
        <div className="calendar bg-white rounded-lg shadow-lg">
          <header className="p-4 border-b border-gray-200 flex justify-center items-center">
            <h1 className="text-lg sm:text-xl font-semibold text-[#204F8C]">
              23 JUN – 27 JUN 2025
            </h1>
          </header>

          <div className="outer">
            <table className="w-full" role="grid">
              <thead className="bg-white sticky top-0 z-10 shadow-sm">
                <tr>
                  <th className="w-20 p-4 text-center text-[#204F8C] text-[10px] md:text-xl" scope="col"></th>
                  <th className="p-4 text-center text-[#204F8C] text-[8px] sm:text-xs md:text-base" scope="col">
                    Seg, 23
                  </th>
                  <th className="p-4 text-center text-[#204F8C] text-[8px] sm:text-xs md:text-base" scope="col">
                    Ter, 24
                  </th>
                  <th className="p-4 text-center text-[#204F8C] text-[8px] sm:text-xs md:text-base" scope="col">
                    Qua, 25
                  </th>
                  <th className="p-4 text-center text-[#204F8C] text-[8px] sm:text-xs md:text-base" scope="col">
                    Qui, 26
                  </th>
                  <th className="p-4 text-center text-[#204F8C] text-[8px] sm:text-xs md:text-base" scope="col">
                    Sex, 27
                  </th>
                </tr>
              </thead>
            </table>

            <div className="wrap overflow-y-auto" style={{ height: 'min(400px, 60vh)' }}>
              <table className="w-full" role="grid">
                <tbody>
                  {Array.from({ length: 5 }).map((_, hourIndex) => {
                    const hour = hourIndex + 18; // Começa às 18:00
                    return (
                      <tr key={hour}>
                        <td className="headcol w-20 p-2 text-center text-gray-500 text-[8px] sm:text-xs md:text-base h-24" role="rowheader">
                          {hour.toString().padStart(2, '0')}:00
                        </td>
                        {Array.from({ length: 5 }).map((_, day) => {
                          const currentHour = hour;
                          
                          const hasEvent = (day === 0 && currentHour === 19) || 
                                         (day >= 1 && day <= 3 && currentHour === 19) || 
                                         (day === 4 && currentHour === 19);

                          return (
                            <td key={day} className="border border-gray-100 p-2 relative h-24" role="gridcell">
                              {hasEvent && (
                                <button
                                  onClick={() => {
                                    let eventDetails;
                                    if (day === 0) {
                                      eventDetails = (
                                        <div>
                                          <p className="text-sm mb-4">Abertura oficial do evento com autoridades e convidados</p>
                                          <p className="text-sm mb-2">Local: Auditório da UFGD – Unidade 2</p>
                                          <p className="text-sm mb-4">Horário: 19:00</p>
                                          <div className="mt-4 pt-4 border-t border-gray-200">
                                            <h5 className="font-semibold text-[#A68521] mb-2">Festival de Dança</h5>
                                            <p className="text-sm">Apresentações artísticas e culturais de grande diversidade e riqueza</p>
                                          </div>
                                        </div>
                                      );
                                      setSelectedEvent({
                                        title: "Cerimônia de Abertura",
                                        details: eventDetails
                                      });
                                    } else if (day === 4) {
                                      eventDetails = (
                                        <div className="space-y-4">
                                          {mockLectures.map((oficina) => (
                                            <div key={oficina.id} className="pb-4 border-b border-gray-200 last:border-0">
                                              <h5 className="font-semibold text-[#A68521] mb-2">{oficina.title}</h5>
                                              <p className="text-sm mb-1">Ministrante: {oficina.speaker}</p>
                                              <p className="text-sm">Local: {oficina.location}</p>
                                            </div>
                                          ))}
                                        </div>
                                      );
                                      setSelectedEvent({
                                        title: "Oficinas Temáticas",
                                        details: eventDetails
                                      });
                                    } else {
                                      eventDetails = (
                                        <div>
                                          <p className="text-sm mb-4">Apresentação de resultados de pesquisas, projetos e experiências práticas pelos alunos</p>
                                          <p className="text-sm mb-2">Local: FAED</p>
                                          <p className="text-sm">Horário: 19:00</p>
                                        </div>
                                      );
                                      setSelectedEvent({
                                        title: "Exposições de Estágios e TCC",
                                        details: eventDetails
                                      });
                                    }
                                  }}
                                  className="event bg-[#204F8C] text-white p-2 rounded text-[8px] sm:text-xs md:text-base w-full h-full text-left hover:bg-[#1A4173] transition-colors"
                                  aria-label={`Ver detalhes do evento: ${day === 0 ? "Cerimônia de Abertura" : day === 4 ? "Oficinas Temáticas" : "Exposições de Estágios e TCC"}`}
                                >
                                  <div className="font-semibold text-[8px] sm:text-xs md:text-base">
                                    {day === 0 ? "Cerimônia de Abertura" :
                                     day === 4 ? "Oficinas Temáticas" :
                                     "Exposições de Estágios e TCC"}
                                  </div>
                                  <div className="text-[6px] sm:text-xs md:text-sm opacity-75">
                                    19:00 - {day === 0 ? "Auditório UFGD" : "FAED"}
                                  </div>
                                </button>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
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