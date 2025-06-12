export interface ActivitySchedule {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  type: 'event' | 'presentation' | 'workshop';
  location: string;
  description: string;
  status: string;
}

export interface Lecture {
  id: string;
  title: string;
  speaker: string;
  speakerBio: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  maxParticipants: number;
  currentParticipants: number;
  learningPoints: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  tags: string[];
  relatedArticles: string[];
}

export interface EventInfo {
  title: string;
  description: string;
  registrationDeadline: string;
  contact: {
    email: string;
    phone: string;
  };
  organizers: {
    name: string;
    role: string;
    course: string;
    institution: string;
    image?: string;
  }[];
  logos: {
    ufgd: string;
    edFisica: string;
    faed: string;
  };
}

export interface Atividade {
  titulo: string;
  descricao?: string;
}

export interface Periodo {
  dia_semana_inicio: string;
  data_inicio: string;
  dia_semana_fim: string;
  data_fim: string;
}

export interface DiaProgramacao {
  dia_semana?: string;
  data?: string;
  periodo?: Periodo;
  atividades: Atividade[];
}

export interface Programacao {
  programacao: DiaProgramacao[];
}

export const mockSchedule: ActivitySchedule[] = [
  {
    id: '1',
    title: 'Festival de Dança, apresentações artísticas e culturais',
    date: '2025-06-23',
    startTime: '19:00',
    endTime: '22:30',
    type: 'event',
    location: 'Auditório Central da UEMS',
    description: 'Apresentações artísticas e culturais dos alunos do curso de Educação Física.',
    status: 'Aguardando'
  },
  {
    id: '2',
    title: 'Bancas de trabalho de conclusão de curso e apresentações de estágio supervisionado',
    date: '2025-06-24',
    startTime: '19:00',
    endTime: '22:30',
    type: 'presentation',
    location: 'FAED',
    description: 'Apresentação dos trabalhos de conclusão de curso e estágios supervisionados.',
    status: 'Aguardando'
  },
  {
    id: '3',
    title: 'Bancas de trabalho de conclusão de curso e apresentações de estágio supervisionado',
    date: '2025-06-25',
    startTime: '19:00',
    endTime: '22:30',
    type: 'presentation',
    location: 'FAED',
    description: 'Apresentação dos trabalhos de conclusão de curso e estágios supervisionados.',
    status: 'Aguardando'
  },
  {
    id: '4',
    title: 'Oficina Atividade Física Funcional',
    date: '2025-06-27',
    startTime: '19:00',
    endTime: '',
    type: 'workshop',
    location: 'Quadra Poliesportiva – Unidade II da UFGD',
    description: 'Oficina ministrada pela Doutora Karla Soares Bertuccini sobre Atividade Física Funcional.',
    status: 'Aguardando'
  },
  {
    id: '5',
    title: 'Oficina Esportes de Aventura',
    date: '2025-06-27',
    startTime: '19:00',
    endTime: '',
    type: 'workshop',
    location: 'Ao lado do LABEF',
    description: 'Oficina ministrada pelo Professor Lucas da Silva Ferreira sobre Esportes de Aventura, com foco em Slackline.',
    status: 'Aguardando'
  },
  {
    id: '6',
    title: 'Oficina Ginástica Rítmica',
    date: '2025-06-27',
    startTime: '19:00',
    endTime: '',
    type: 'workshop',
    location: 'Laboratório de Atividades Rítmicas e Dança – LARDAN - (LABEF)',
    description: 'Oficina ministrada pela Professora Paola Gouveia Schemberger Levandoski sobre Ginástica Rítmica.',
    status: 'Aguardando'
  },
  {
    id: '7',
    title: 'Oficina Introdução ao Beach Tennis',
    date: '2025-06-27',
    startTime: '19:00',
    endTime: '',
    type: 'workshop',
    location: 'Quadra de areia (ao lado do LABEF)',
    description: 'Oficina ministrada pelo Instrutor Jader Morilla sobre Beach Tennis.',
    status: 'Aguardando'
  },
  {
    id: '8',
    title: 'Oficina Nutrição Esportiva Aplicada à Hipertrofia e Redução de Massa Gorda',
    date: '2025-06-27',
    startTime: '19:00',
    endTime: '',
    type: 'workshop',
    location: 'Sala 9 (FAED)',
    description: 'Oficina ministrada pelo Doutor Pablo Christiano Barboso Lollo sobre Nutrição Esportiva.',
    status: 'Aguardando'
  }
];

export const mockLectures: Lecture[] = [
  {
    id: '1',
    title: 'OFICINA ATIVIDADE FÍSICA FUNCIONAL',
    speaker: 'Doutora Karla Soares Bertuccini',
    speakerBio: 'Formada em licenciatura e bacharel em educação Física. Especialista em Educação, métodos e tecnica de ensino. Formada em treinamento Funcional, CORE 360. Formação em Pilates. Formação em Liberação Miofascial. Formada em sistemas de treinamento Funcional. Técnica de laboratório na área de educação física e Atua na Progesp - Divisao de Saúde com projetos voltados para a saúde do servidor.',
    description: 'Uma oficina prática sobre Atividade Física Funcional, ministrada pela Doutora Karla Soares Bertuccini.',
    date: '2025-06-27',
    time: '19:00',
    location: 'Quadra Poliesportiva – Unidade II da UFGD',
    imageUrl: '/images/DoutoraKarlaSoaresBertuccini.jpeg',
    maxParticipants: 30,
    currentParticipants: 15,
    learningPoints: [
      'Fundamentos da Atividade Física Funcional',
      'Técnicas de Treinamento Funcional',
      'Aplicações Práticas do CORE 360',
      'Métodos de Liberação Miofascial'
    ]
  },
  {
    id: '2',
    title: 'OFICINA ESPORTES DE AVENTURA',
    speaker: 'Professor Lucas da Silva Ferreira',
    speakerBio: 'Meu nome é Lucas da Silva Ferreira, tenho 31 anos, sou da 4ª turma do curso de Educação Física da UFGD e me formei em 2016. No último semestre eu prestei concurso para professor da rede municipal de Dourados e em 2017 assumi o cargo onde permaneço até hoje. Tenho experiência na educação infantil, pois é uma fase onde me identifiquei mais e também porque há uma importância a mais sobre ensinar Educação Física para essa faixa etária. A oficina que estarei mestrando se chama "Esportes de Aventura" e nela estarei apresentando um esporte chamado Slackline, esse esporte ainda está em crescimento pelo Brasil e está conseguindo uma boa base de praticantes e atletas. Eu conheci e comecei a praticar em 2012 e por todo esse caminho a pratica do Slackline se tornou rotina, tanto na hora de adquirir o material até levar para a escola e apresentar para meus alunos.',
    description: 'Uma oficina prática sobre Esportes de Aventura, com foco especial em Slackline.',
    date: '2025-06-27',
    time: '19:00',
    location: 'Ao lado do LABEF',
    imageUrl: '/images/ProfessorLucasdaSilvaFerreira.jpeg',
    maxParticipants: 25,
    currentParticipants: 20,
    learningPoints: [
      'Introdução ao Slackline',
      'Técnicas básicas e avançadas',
      'Segurança e equipamentos',
      'Aplicações pedagógicas'
    ]
  },
  {
    id: '3',
    title: 'OFICINA GINÁSTICA RÍTMICA',
    speaker: 'Professora Paola Gouveia Schemberger Levandoski',
    speakerBio: 'Formada em Educação Física pela Universidade Estadual de Ponta Grossa (UEPG) é Especialista em Ginástica Rítmica pela UNOPAR. Atualmente é professora da Escola SEI- Dourados. Tem experiência na modalidade de Ginástica Artística sendo Técnica Campeã em Campeonatos desta modalidade no estado do Paraná. Formada também em Ballet Clássico foi aprovada na Escola de Dança do Teatro Guaíra em Curitiba e participou como solista em diversos espetáculos.',
    description: 'Uma oficina prática sobre Ginástica Rítmica, ministrada pela Professora Paola Gouveia Schemberger Levandoski.',
    date: '2025-06-27',
    time: '19:00',
    location: 'Laboratório de Atividades Rítmicas e Dança – LARDAN - (LABEF)',
    imageUrl: '/images/ProfessoraPaolaGouveiaSchembergerLevandoski.jpeg',
    maxParticipants: 25,
    currentParticipants: 18,
    learningPoints: [
      'Fundamentos da Ginástica Rítmica',
      'Técnicas de Aparelhos',
      'Coreografia e Expressão Corporal',
      'Metodologia de Ensino'
    ]
  },
  {
    id: '4',
    title: 'OFICINA INTRODUÇÃO AO BEACH TENNIS',
    speaker: 'Instrutor Jader Morilla',
    speakerBio: 'Jader Morilla, 32 anos, há cinco anos trabalha com esporte na areia, inicialmente no futevôlei e há dois anos também no Beach tennis. Curso de Capacitação de professores metodologia Naldo, Campo Grande-MS. Workshop Escola Toss. Cursos de Capacitação pela CBT, ITF. Curso nível verde 🟢 em Cascavel-PR. Curso nível amarelo 🟡 Londrina-PR. Graduando quinto semestre em Educação Física, Unicesumar.',
    description: 'Uma oficina prática sobre Beach Tennis, ministrada pelo Instrutor Jader Morilla.',
    date: '2025-06-27',
    time: '19:00',
    location: 'Quadra de areia (ao lado do LABEF)',
    imageUrl: '/images/InstrutorJaderMorilla.jpeg',
    maxParticipants: 20,
    currentParticipants: 15,
    learningPoints: [
      'Regras e Fundamentos do Beach Tennis',
      'Técnicas Básicas e Avançadas',
      'Estratégias de Jogo',
      'Treinamento Específico'
    ]
  },
  {
    id: '5',
    title: 'OFICINA NUTRIÇÃO ESPORTIVA APLICADA À HIPERTROFIA E REDUÇÃO DE MASSA GORDA',
    speaker: 'Doutor Pablo Christiano Barboso Lollo',
    speakerBio: 'Possui graduação em Educação Física pela Universidade Estadual de Campinas (2004), mestrado em Alimentos e Nutrição pela Universidade Estadual de Campinas (2007) e doutorado em Alimentos e Nutrição pela Universidade Estadual de Campinas (2012) e pós-doutorado em Fisiologia e Biofísica pela pela Universidade Estadual de Campinas (2013). Atualmente é professor de magistério superior da Universidade Federal da Grande Dourados.',
    description: 'Uma oficina sobre Nutrição Esportiva, com foco em hipertrofia e redução de massa gorda.',
    date: '2025-06-27',
    time: '19:00',
    location: 'Sala 9 (FAED)',
    imageUrl: '/images/DoutorPabloChristianoBarbosoLollo.jpeg',
    maxParticipants: 50,
    currentParticipants: 35,
    learningPoints: [
      'Fundamentos da Nutrição Esportiva',
      'Estratégias para Hipertrofia',
      'Métodos de Redução de Massa Gorda',
      'Suplementação Esportiva'
    ]
  }
];

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Inscrições Abertas para o XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
    content: `O XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física está com inscrições abertas! Este ano, o evento promete ser ainda mais especial, trazendo palestrantes renomados e discussões fundamentais para a área. O seminário acontecerá nos dias 10 e 11 de junho de 2025, no Campus Universitário da UFGD, e contará com uma programação diversificada que inclui oficinas, apresentações de trabalhos e atividades culturais. Entre os destaques da programação, teremos discussões sobre metodologias ativas no ensino da Educação Física, inclusão e adaptação de atividades físicas, e as últimas tendências em pesquisa na área. As inscrições podem ser realizadas através do nosso site até o dia 8 de junho. Não perca esta oportunidade de participar de um dos maiores eventos acadêmicos da área!`,
    summary: 'Participe deste importante evento acadêmico que acontecerá nos dias 10 e 11 de junho de 2025.',
    date: '2025-05-15',
    author: 'Comissão Organizadora',
    category: 'Eventos',
    imageUrl: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg',
    tags: ['inscrições', 'seminário', 'educação física', 'evento acadêmico'],
    relatedArticles: ['2', '3']
  },
  {
    id: '2',
    title: 'Programação Completa Divulgada',
    content: `A Comissão Organizadora do XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física tem o prazer de anunciar a programação completa do evento! Este ano, preparamos uma programação especial que abrange diferentes aspectos da Educação Física, desde práticas pedagógicas inovadoras até as mais recentes pesquisas na área. Destaques da Programação: - Oficinas com especialistas renomados - Apresentações de trabalhos científicos - Atividades culturais e networking - Certificado de participação Todas as atividades foram cuidadosamente planejadas para proporcionar uma experiência enriquecedora aos participantes, combinando teoria e prática. Confira a programação completa na seção "Programação" do nosso site e planeje sua participação!`,
    summary: 'Confira a programação completa do evento, incluindo oficinas e apresentações culturais.',
    date: '2025-05-20',
    author: 'Coordenação do Evento',
    category: 'Programação',
    imageUrl: 'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg',
    tags: ['programação', 'oficinas', 'atividades'],
    relatedArticles: ['1', '3']
  },
  {
    id: '3',
    title: 'Chamada para Submissão de Trabalhos',
    content: `Está aberta a chamada para submissão de trabalhos acadêmicos para o XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física! Esta é uma excelente oportunidade para compartilhar suas pesquisas, experiências e projetos com a comunidade acadêmica. Aceitamos trabalhos nas seguintes modalidades: - Artigos completos - Resumos expandidos - Relatos de experiência - Projetos de pesquisa em andamento Áreas Temáticas: 1. Práticas Pedagógicas em Educação Física 2. Inclusão e Adaptação em Educação Física 3. Tecnologia e Inovação no Ensino 4. Saúde e Qualidade de Vida 5. Formação Profissional em Educação Física Os trabalhos aprovados serão apresentados durante o evento e publicados nos anais do seminário. Prazo para submissão: 30 de maio de 2025 Resultado da avaliação: 10 de junho de 2025 Consulte as diretrizes para submissão no nosso site.`,
    summary: 'Está aberta a chamada para submissão de trabalhos acadêmicos. Compartilhe suas pesquisas e experiências!',
    date: '2025-05-10',
    author: 'Comitê Científico',
    category: 'Acadêmico',
    imageUrl: 'https://images.pexels.com/photos/3755763/pexels-photo-3755763.jpeg',
    tags: ['submissão', 'trabalhos acadêmicos', 'pesquisa', 'prazo'],
    relatedArticles: ['1', '2']
  }
];

export const eventInfo: EventInfo = {
  title: 'XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
  description: 'O XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física é uma iniciativa dos/as professores/as do Curso de Licenciatura em Educação Física com o objetivo de apresentar os produtos finais das disciplinas de Estágio Supervisionado e Trabalho de Conclusão de Curso e promover a interação entre a universidade e a sociedade, levando os conhecimentos e recursos produzidos dentro da instituição para fora dos muros, beneficiando a comunidade e contribuindo para o desenvolvimento social, cultural e econômico.',
  registrationDeadline: '2025-06-07',
  contact: {
    email: 'ufgdeducacaofisica@gmail.com',
    phone: '(67) 3410-2118'
  },
  organizers: [
    {
      name: 'Doutor Deyvid Tenner de Souza Rizzo',
      role: 'Coordenador do Curso de Educação Física',
      course: 'Educação Física',
      institution: 'UFGD',
      image: '/images/DeyvidTennerdeSouzaRizzo.jpeg'
    },
    {
      name: 'Emily Alves da Silva',
      role: 'Membro da Comissão Organizadora',
      course: 'Educação Física',
      institution: 'UFGD'
    },
    {
      name: 'Jhenyffer Freire de Oliveira',
      role: 'Membro da Comissão Organizadora',
      course: 'Educação Física',
      institution: 'UFGD'
    },
    {
      name: 'Leonardo Meira Nantes',
      role: 'Membro da Comissão Organizadora',
      course: 'Educação Física',
      institution: 'UFGD'
    },
    {
      name: 'Leonardo Vital Martin do Nascimento',
      role: 'Membro da Comissão Organizadora',
      course: 'Sistemas de Informação',
      institution: 'UFGD'
    },
    {
      name: 'Mariana Zucão Barbosa Espindola',
      role: 'Coordenador(a), Membro da Comissão Organizadora',
      course: 'Educação Física',
      institution: 'UFGD'
    },
    {
      name: 'Pâmela Talita Valdez de Lima',
      role: 'Comissão Organizadora',
      course: 'Educação Física Licenciatura',
      institution: 'UFGD'
    },
    {
      name: 'Doutora Josiane Fujisawa Filus de Freitas',
      role: 'Equipe de Inscrições',
      course: 'Educação Física',
      institution: 'UFGD',
      image: '/images/JosianeFujisawaFilusdeFreitas.jpeg'
    }
  ],
  logos: {
    ufgd: '/images/logotipoufgd.png',
    edFisica: '/images/EducacaoFisica.png',
    faed: '/images/FAEDlogo.png'
  }
};

export const programacaoEvento = {
  programacao: [
    {
      dia_semana: "Segunda-feira",
      data: "2025-06-23",
      atividades: [
        {
          titulo: "Cerimônia de Abertura",
          descricao: "Abertura oficial do evento com autoridades e convidados",
          horario: "19:00",
          local: "Auditório da UFGD – Unidade 2"
        },
        {
          titulo: "Festival de Dança",
          descricao: "Apresentações artísticas e culturais de grande diversidade e riqueza",
          horario: "Após a cerimônia",
          local: "Auditório da UFGD – Unidade 2"
        }
      ]
    },
    {
      dia_semana: "Terça-feira",
      data: "2025-06-24",
      atividades: [
        {
          titulo: "Exposições de Estágios e TCC",
          descricao: "Apresentação de resultados de pesquisas, projetos e experiências práticas pelos alunos",
          horario: "19:00",
          local: "FAED"
        }
      ]
    },
    {
      dia_semana: "Quarta-feira",
      data: "2025-06-25",
      atividades: [
        {
          titulo: "Exposições de Estágios e TCC",
          descricao: "Apresentação de resultados de pesquisas, projetos e experiências práticas pelos alunos",
          horario: "19:00",
          local: "FAED"
        }
      ]
    },
    {
      dia_semana: "Quinta-feira",
      data: "2025-06-26",
      atividades: [
        {
          titulo: "Exposições de Estágios e TCC",
          descricao: "Apresentação de resultados de pesquisas, projetos e experiências práticas pelos alunos",
          horario: "19:00",
          local: "FAED"
        }
      ]
    },
    {
      dia_semana: "Sexta-feira",
      data: "2025-06-27",
      atividades: [
        {
          titulo: "Oficinas Temáticas",
          descricao: "Workshops práticos sobre diversos temas da Educação Física",
          horario: "19:00",
          local: "FAED"
        }
      ]
    }
  ]
}; 