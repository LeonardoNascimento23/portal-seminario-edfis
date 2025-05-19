'use client';

import { oficinas } from '@/data/oficinas';
import { useState } from 'react';
import Link from 'next/link';

export default function OficinasSection() {
  const [selectedOficina, setSelectedOficina] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#204F8C] text-center">Oficinas</h2>
        <div className="grid gap-6">
          {oficinas.map((oficina) => (
            <div key={oficina.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#A68521]">{oficina.titulo}</h3>
              <p className="text-gray-700 mb-4">{oficina.descricao}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600"><strong>Ministrante:</strong> {oficina.palestrante.titulo} {oficina.palestrante.nome}</p>
                  <p className="text-gray-600"><strong>Data:</strong> {oficina.data}</p>
                </div>
                <div>
                  <p className="text-gray-600"><strong>Horário:</strong> {oficina.horario}</p>
                  <p className="text-gray-600"><strong>Local:</strong> {oficina.local}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedOficina(selectedOficina === oficina.id ? null : oficina.id)}
                  className="btn btn-accent"
                >
                  {selectedOficina === oficina.id ? 'Fechar Inscrição' : 'Inscrever-se'}
                </button>
                <Link href="/oficinas" className="text-[#204F8C] hover:text-[#A68521]">
                  Ver detalhes
                </Link>
              </div>
              {selectedOficina === oficina.id && (
                <div className="mt-4">
                  <iframe
                    src={oficina.formUrl}
                    width="100%"
                    height={oficina.formHeight}
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg shadow-md"
                  >
                    Carregando…
                  </iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 