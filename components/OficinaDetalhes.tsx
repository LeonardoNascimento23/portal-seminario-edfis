'use client';

import { Oficina } from '@/types/oficina';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

interface OficinaDetalhesProps {
  oficina: Oficina | null;
  onClose: () => void;
}

export default function OficinaDetalhes({ oficina, onClose }: OficinaDetalhesProps) {
  if (!oficina) return null;

  return (
    <Dialog open={!!oficina} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {oficina.titulo}
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{oficina.data}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>{oficina.horario}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{oficina.local}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-2 h-4 w-4" />
                <span>{oficina.vagas} vagas disponíveis</span>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold">Sobre a Oficina</h3>
              <p className="text-muted-foreground">{oficina.descricao}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={oficina.palestrante.foto}
                  alt={oficina.palestrante.nome}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {oficina.palestrante.titulo} {oficina.palestrante.nome}
                </h3>
                <p className="text-sm text-muted-foreground">{oficina.palestrante.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 