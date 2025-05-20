'use client';

import { programacaoEvento, mockLectures } from '@/data/mockData';

export default function ProgramacaoPage() {
  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatarHorario = (horario: string) => {
    return horario;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#204F8C] mb-8">Programação</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {programacaoEvento.programacao.map((dia, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="mb-6">
                  {dia.dia_semana && dia.data ? (
                    <h2 className="text-2xl font-bold text-[#204F8C]">
                      {dia.dia_semana} - {formatarData(dia.data)}
                    </h2>
                  ) : dia.periodo ? (
                    <h2 className="text-2xl font-bold text-[#204F8C]">
                      {dia.periodo.dia_semana_inicio} a {dia.periodo.dia_semana_fim} - {formatarData(dia.periodo.data_inicio)} a {formatarData(dia.periodo.data_fim)}
                    </h2>
                  ) : null}
                </div>

                <div className="space-y-6">
                  {dia.atividades.map((atividade, atividadeIndex) => (
                    <div key={atividadeIndex} className="border-l-4 border-[#A68521] pl-4">
                      <h3 className="text-xl font-semibold text-[#A68521] mb-2">
                        {atividade.titulo}
                      </h3>
                      {atividade.descricao && (
                        <p className="text-gray-600 mb-4">{atividade.descricao}</p>
                      )}
                      
                      {/* Exibir oficinas específicas na sexta-feira */}
                      {dia.dia_semana === "Sexta-feira" && atividade.titulo === "Oficinas Temáticas" && (
                        <div className="mt-4 space-y-4">
                          {mockLectures.map((oficina) => (
                            <div key={oficina.id} className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="text-lg font-semibold text-[#204F8C] mb-2">
                                {oficina.title}
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                <div>
                                  <p><strong>Ministrante:</strong> {oficina.speaker}</p>
                                  <p><strong>Horário:</strong> {formatarHorario(oficina.time)}</p>
                                </div>
                                <div>
                                  <p><strong>Local:</strong> {oficina.location}</p>
                                  <p><strong>Vagas:</strong> {oficina.currentParticipants}/{oficina.maxParticipants}</p>
                                </div>
                              </div>
                              <p className="mt-2 text-gray-600">{oficina.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 