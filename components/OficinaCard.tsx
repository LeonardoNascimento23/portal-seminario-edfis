'use client';

import { Oficina } from '@/types/oficina';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface OficinaCardProps {
  oficina: Oficina;
  onClick?: () => void;
}

export default function OficinaCard({ oficina, onClick }: OficinaCardProps) {
  return (
    <Card 
      className="h-full cursor-pointer transition-all hover:shadow-lg"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl font-bold text-primary">
            {oficina.titulo}
          </CardTitle>
          <Badge variant="secondary" className="ml-2 whitespace-nowrap">
            {oficina.vagas} vagas
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
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
            <span>{oficina.palestrante.titulo} {oficina.palestrante.nome}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 