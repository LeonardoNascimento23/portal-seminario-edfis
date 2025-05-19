export interface Oficina {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  tipo: 'palestra' | 'workshop' | 'mesa-redonda';
  ministrante: string;
  horario: string;
  local: string;
  descricao: string;
  formUrl: string;
  formHeight: number;
}

export const programacaoData: Oficina[] = [
  {
    id: 1,
    titulo: 'Introdução ao Beach Tennis',
    resumo: 'Aprenda os fundamentos básicos do Beach Tennis, incluindo regras, técnicas e estratégias.',
    data: '2024-06-27',
    tipo: 'workshop',
    ministrante: 'Prof. João Silva',
    horario: '19:00',
    local: 'Quadra de areia (ao lado do LABEF)',
    descricao: 'Aprenda os fundamentos básicos do Beach Tennis, incluindo regras, técnicas e estratégias.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe6YG2wcJDUKVIutGpAIbmMyKX4BoErlQzPraq-ggx0Zmov6Q/viewform?embedded=true',
    formHeight: 2968
  },
  {
    id: 2,
    titulo: 'Nutrição Esportiva Aplicada à Hipertrofia e Redução de Massa Gorda',
    resumo: 'Conheça os princípios da nutrição esportiva para ganho de massa muscular e perda de gordura.',
    data: '2024-06-27',
    tipo: 'palestra',
    ministrante: 'Prof. Maria Santos',
    horario: '19:00',
    local: 'Sala 9 (FAED)',
    descricao: 'Conheça os princípios da nutrição esportiva para ganho de massa muscular e perda de gordura.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfWYt5r3CGj46fO4h-bFU7tceJ-Lk2rZgLyuZwyy22Soo0FwA/viewform?embedded=true',
    formHeight: 2374
  },
  {
    id: 3,
    titulo: 'Ginástica Rítmica',
    resumo: 'Explore os elementos básicos da ginástica rítmica, incluindo aparelhos e coreografias.',
    data: '2024-06-27',
    tipo: 'workshop',
    ministrante: 'Prof. Ana Oliveira',
    horario: '19:00',
    local: 'Laboratório de Atividades Rítmicas e Dança – LARDAN - (LABEF)',
    descricao: 'Explore os elementos básicos da ginástica rítmica, incluindo aparelhos e coreografias.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdKMxTTzetNtxk02zXbSmnwxDq0hC-6aISWnVXDoV-KsHhjog/viewform?embedded=true',
    formHeight: 2616
  },
  {
    id: 4,
    titulo: 'Atividade Física Funcional',
    resumo: 'Descubra exercícios funcionais para melhorar a força, equilíbrio e coordenação.',
    data: '2024-06-27',
    tipo: 'workshop',
    ministrante: 'Professora Karla Mendes',
    horario: '19:00',
    local: 'Quadra Poliesportiva – Unidade II da UFGD',
    descricao: 'Descubra exercícios funcionais para melhorar a força, equilíbrio e coordenação.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe3SYwwKbmhW8coOjZJRwFUivSx11bw3DkLOJPrtjCIQ2cdSA/viewform?embedded=true',
    formHeight: 2180
  },
  {
    id: 5,
    titulo: 'Esportes de Aventura',
    resumo: 'Conheça diferentes modalidades de esportes de aventura e suas técnicas básicas.',
    data: '2024-06-27',
    tipo: 'workshop',
    ministrante: 'Prof. Pedro Costa',
    horario: '19:00',
    local: 'Ao lado do LABEF',
    descricao: 'Conheça diferentes modalidades de esportes de aventura e suas técnicas básicas.',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSekKbjdBAUVqnj23RTbWEq0m7EoiJiYR5_CB89omI7BJrGb4Q/viewform?embedded=true',
    formHeight: 2909
  }
]; 