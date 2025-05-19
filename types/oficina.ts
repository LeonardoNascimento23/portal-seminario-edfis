export interface Palestrante {
  nome: string;
  titulo: string;
  bio: string;
  foto: string;
}

export interface Oficina {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  vagas: number;
  descricao: string;
  palestrante: Palestrante;
  formUrl: string;
  formHeight: number;
} 