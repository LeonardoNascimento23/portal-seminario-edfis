'use client';

import { useState } from 'react';
import OficinaDetalhes from '@/components/OficinaDetalhes';
import { programacaoData, Oficina } from './data';

export default function ProgramacaoPage() {
  const [selectedOficina, setSelectedOficina] = useState<number | null>(null);

  const handleOpenModal = (id: number) => {
    setSelectedOficina(id);
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const traduzirTipo = (tipo: string) => {
    const tipos: { [key: string]: string } = {
      'palestra': 'Palestra',
      'workshop': 'Workshop',
      'mesa-redonda': 'Mesa Redonda'
    };
    return tipos[tipo] || tipo;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#204F8C] mb-8">Programação</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programacaoData.map((oficina: Oficina) => (
            <div 
              key={oficina.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleOpenModal(oficina.id)}
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#204F8C] mb-2">{oficina.titulo}</h2>
                <p className="text-gray-600 mb-4">{oficina.resumo}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {formatarData(oficina.data)}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {traduzirTipo(oficina.tipo)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedOficina && (
          <OficinaDetalhes
            oficina={programacaoData.find((o: Oficina) => o.id === selectedOficina)!}
            onClose={() => setSelectedOficina(null)}
          />
        )}
      </div>
    </main>
  );
} 