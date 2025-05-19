'use client';

import { Oficina } from '@/app/programacao/data';

interface OficinaDetalhesProps {
  oficina: Oficina;
  onClose: () => void;
}

export default function OficinaDetalhes({ oficina, onClose }: OficinaDetalhesProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-[#204F8C]">{oficina.titulo}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700">Ministrante</h3>
              <p className="text-gray-600">{oficina.ministrante}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Data e Horário</h3>
              <p className="text-gray-600">{oficina.data} às {oficina.horario}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Local</h3>
              <p className="text-gray-600">{oficina.local}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700">Descrição</h3>
              <p className="text-gray-600">{oficina.descricao}</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-4">Inscrição</h3>
              <div className="aspect-[640/2968] w-full">
                <iframe
                  src={oficina.formUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Carregando…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 