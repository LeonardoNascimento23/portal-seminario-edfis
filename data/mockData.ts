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
    location: 'Laboratório de Educação Física Escolar - LABEF',
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
    location: 'Laboratório de Educação Física Escolar - LABEF',
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
          titulo: "Abertura do XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física",
          descricao: "Abertura oficial do evento com autoridades e convidados",
          horario: "19:00",
          local: "Auditório Central da UEMS",
          organizacao: "Dra. Jacqueline da Silva Nunes"
        },
        {
          titulo: "Apresentações Artísticas, Culturais e Festival de Dança",
          descricao: "Apresentações artísticas, culturais e festival de dança",
          horario: "Após a cerimônia",
          local: "Auditório Central da UEMS",
          organizacao: "Dra. Jacqueline da Silva Nunes"
        }
      ]
    },
    {
      dia_semana: "Terça-feira",
      data: "2025-06-24",
      atividades: [
        // Sala 11 (FAED) - Estágio na Educação Escolar
        {
          titulo: "Estágio na Educação Escolar",
          descricao: "Apresentação dos relatórios de estágio supervisionado",
          horario: "19:00",
          local: "Sala 11 (FAED)",
          orientador: "Prof. Dr. Marcelo José Taques"
        },
        {
          titulo: "Coordenação Pedagógica: Experiências de um Estágio",
          descricao: "Jhenyffer Freire de Oliveira",
          horario: "19:15",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Importância do Estágio Supervisionado na Educação Escolar: A Falta de Conhecimento de Acadêmicos e Gestores",
          descricao: "Lucas Nugoli Zago",
          horario: "19:30",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "A Importância da Secretaria Escolar e os Desafios no Atendimento em Libras",
          descricao: "Déborah Oliveira da Costa",
          horario: "19:45",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Estágio Gestão Escolar",
          descricao: "Eva Gabriela Matos de Oliveira, Luana Thainá de Souza Andrade",
          horario: "20:00",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Estágio na Gestão Escolar",
          descricao: "Filipi Almeida da Silva",
          horario: "20:15",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Estágio na Gestão Escolar",
          descricao: "Ian Pedroso Gutierres, Luiz Fernando Alves Furtado",
          horario: "20:30",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Desafios e Aprendizados na Prática de Estágio em Gestão Escolar",
          descricao: "Adriele da Cunha Martins Luiz, Gabriel Henrique Castro Vieira",
          horario: "20:45",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Relatório de Experiência do Estágio na Educação Escolar",
          descricao: "Amanda Miranda da Silva, Ana Clara Duarte Pereyra",
          horario: "21:00",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Relato de Experiência em Estágio na Gestão Escolar",
          descricao: "Maria Eduarda das Neves Silva",
          horario: "21:15",
          local: "Sala 11 (FAED)"
        },
        {
          titulo: "Liderança e Gestão Democrática na Escola: Participação, Projeto Político-Pedagógico e Tomada de Decisão Coletiva",
          descricao: "Beatriz Xavier Pederiva dos Santos",
          horario: "21:30",
          local: "Sala 11 (FAED)"
        },
        // Sala 02 (FAED) - Estágio no Ensino Fundamental - Anos Finais
        {
          titulo: "Estágio no Ensino Fundamental - Anos Finais",
          descricao: "Apresentação dos relatórios de estágio supervisionado",
          horario: "19:00",
          local: "Sala 02 (FAED)",
          arguidor: "Prof. Dr. Gustavo Levandoski"
        },
        {
          titulo: "Impacto da Escassez de Materiais na Aprendizagem em Educação Física",
          descricao: "Fernanda Guimarães Queiroz",
          horario: "19:00",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "A Importância do Planejamento nas Aulas de Educação para a Diversificação dos Conteúdos",
          descricao: "Lucas Nugoli Zago",
          horario: "19:15",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Dificuldades Enfrentadas por Professores de Educação Física no Ensino Fundamental Anos Finais",
          descricao: "Paulo Henrique Morais",
          horario: "19:30",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Vivências e Reflexões no Estágio Supervisionado no Ensino Fundamental – Anos Finais",
          descricao: "Vilmar Souza da Rocha",
          horario: "19:45",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Desinteresse dos Estudantes pelas Aulas de Educação Física no Ensino Fundamental 2",
          descricao: "Cassilda Ramos Morilha",
          horario: "20:00",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Estágio no Ensino Fundamental e Suas Dificuldades",
          descricao: "Emily Alves da Silva",
          horario: "20:15",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "A Educação Física e os Desafios das Aulas Práticas sem Materiais Adequados",
          descricao: "Ana Luiza Alves Figueredo",
          horario: "20:30",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "O Papel do Professor na Inclusão e Motivação dos Alunos nas Aulas de Educação Física no Ensino Fundamental",
          descricao: "Brenner Cesar Soares da Silva",
          horario: "20:45",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "A Educação Física como Mecanismo de Inclusão, Estratégias e Práticas para os Anos Finais do Ensino Fundamental",
          descricao: "José Henrique Reale Fonseca",
          horario: "21:00",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Conteúdo de Lutas na Educação Física Escolar: Desafios e os Caminhos para Implementação nas Aulas",
          descricao: "Juliana Maria da Silva",
          horario: "21:15",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Saúde Mental, Desgaste Profissional e Burnout em Professores",
          descricao: "Everton Alfonso, Maria Eduarda Mattoso Furigo",
          horario: "21:30",
          local: "Sala 02 (FAED)"
        },
        // Defesas de TCC - Sala 9 (FAED)
        {
          titulo: "Defesa de TCC: Produção do Conhecimento sobre Gênero, Sexualidade e Educação Física Escolar: Mapeando Experiências com Práticas Corporais e Esportivas",
          descricao: "Acadêmica: Rafaela Vidal Cruz",
          horario: "19:00",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Cássia Cristina Furlan",
          avaliador: "Dr. Manuel Pacheco Neto, Mdo. Vinicius Montalvão Melo Zoffoli de Aguiar"
        },
        {
          titulo: "Defesa de TCC: A Obesidade Infantil e a Importância do Profissional de Educação Física na Escola",
          descricao: "Acadêmico: Luciano Pereira de Souza",
          horario: "19:40",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Manuel Pacheco Neto",
          avaliador: "Dr. Deyvid Tenner de Souza Rizzo, Dr. Mário Sérgio Vaz da Silva"
        },
        {
          titulo: "Defesa de TCC: Exercícios Resistidos na Adolescência: Uma Revisão Narrativa",
          descricao: "Acadêmica: Fernanda Guimarães Queiroz",
          horario: "20:20",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Mário Sérgio Vaz da Silva",
          avaliador: "Prof. Me. Leandro de Souza Silva, Prof. Esp. Vitor Vieira do Nascimento"
        },
        {
          titulo: "Defesa de TCC: Impactos da Dança de Salão na Saúde Mental de Idosos Participantes de Bailes Dançantes na Cidade de Dourados/MS",
          descricao: "Acadêmica: Juliana Maria da Silva",
          horario: "Webconferência",
          local: "Sala 9 (FAED)",
          orientador: "Dra. Jacqueline da Silva Nunes",
          avaliador: "Dra. Mineia Carvalho (UFMT), Dr. Neil Franco (UFJF)"
        }
      ]
    },
    {
      dia_semana: "Quarta-feira",
      data: "2025-06-25",
      atividades: [
        {
          titulo: "Estágio na Educação Infantil e Anos Iniciais do Ensino Fundamental",
          descricao: "Apresentação dos relatórios de estágio supervisionado",
          horario: "19:00",
          local: "Sala 02 (FAED)",
          orientador: "Prof. Dr. Manuel Pacheco Neto"
        },
        {
          titulo: "A Discriminação das Alunas nas Aulas de Educação Física na Educação Infantil e nos Anos Iniciais do Ensino Fundamental na Escola Joãozinho Fernando",
          descricao: "Cassilda Ramos Morilha",
          horario: "19:00",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "A Importância da Afetividade no Relacionamento Professor-Aluno na Etapa da Educação Infantil nas Aulas de Educação Física",
          descricao: "Lucas Nugoli Zago",
          horario: "19:15",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Desafios e Vivências no Estágio Supervisionado em Educação Física: Inclusão, Motivação e Prática Pedagógica na Educação Infantil e Anos Iniciais",
          descricao: "Luciano Pereira de Souza",
          horario: "19:30",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Estágio na Educação Infantil e Anos Iniciais do Ensino Fundamental",
          descricao: "Rafaela Vidal Cruz",
          horario: "19:45",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Apontamentos sobre Estágio Supervisionado na Educação Infantil e Anos Iniciais do Ensino Fundamental",
          descricao: "Leonardo Meira Nantes",
          horario: "20:00",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Falta de Participação dos Alunos(as) nas Aulas de Educação Física",
          descricao: "Paulo Victor Souza Moura",
          horario: "20:15",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Relato de Experiência do Estágio Supervisionado em Educação Física: Estágio no Ensino Fundamental - Anos Finais",
          descricao: "Rafaela Vidal Cruz",
          horario: "20:30",
          local: "Sala 02 (FAED)"
        },
        {
          titulo: "Estágio Gestão Escolar",
          descricao: "Vitória Eduarda Ramos da Silva",
          horario: "21:00",
          local: "Sala 02 (FAED)"
        },
        // Sala 10 (FAED) - Estágio na Educação Escolar
        {
          titulo: "Estágio na Educação Escolar",
          descricao: "Apresentação dos relatórios de estágio supervisionado",
          horario: "19:00",
          local: "Sala 10 (FAED)",
          orientador: "Prof. Dr. Marcelo José Taques"
        },
        {
          titulo: "Relato de Experiência de Estágio na Gestão Escolar",
          descricao: "Danilo de Azevedo Goncalves",
          horario: "19:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Gestão Escolar e Corresponsabilidade Familiar: Limites e Desafios no Processo Educativo",
          descricao: "Eduardo de Souza Sozzi",
          horario: "19:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Estágio Supervisionado de Gestão Escolar",
          descricao: "Náthaly Simplício Schneider Marques, Erik Pereira da Costa",
          horario: "19:30",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Formações Docentes na Rede Municipal e seus Impactos na Carga Horária Escolar: Um Relato de Estágio Supervisionado",
          descricao: "Giovane Alexandre Martins Cano",
          horario: "19:45",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Vivência na Gestão Escolar: Estágio Supervisionado nos Bastidores da Escola",
          descricao: "Gustavo Fonseca da Silva",
          horario: "20:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Relato de Experiência",
          descricao: "Larissa do Nascimento Gonçalves",
          horario: "20:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Efeito Multiplicador: A Influência da Gestão em uma Cultura Escolar Inclusiva",
          descricao: "Jong Jin de Carvalho Cançado",
          horario: "20:30",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "O Diálogo entre a Família e a Escola.",
          descricao: "Paulo Victor Souza Moura",
          horario: "20:45",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Estágio Gestão Escolar",
          descricao: "Marcos Eduardo Bronel Ribeiro",
          horario: "21:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Relato de Experiências do Estágio Supervisionado na Gestão Escolar na Escola Presidente Vargas",
          descricao: "Ryan Sousa Almeida Santos",
          horario: "21:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Relato de Experiência na Gestão Escolar",
          descricao: "Maicon de Souza Oliveira, Williméri da Silva Lima",
          horario: "21:30",
          local: "Sala 10 (FAED)"
        },
        // Defesas de TCC - Sala 9 (FAED)
        {
          titulo: "Defesa de TCC: Centros de Equoterapia no Estado do Mato Grosso do Sul com Atendimentos a Pessoas com TEA",
          descricao: "Acadêmica: Edilaine Oliveira Marques",
          horario: "19:00",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Mário Sérgio Vaz da Silva",
          avaliador: "Dra. Josiane FF de Freitas, Dr. Washington CS Nozu"
        },
        {
          titulo: "Defesa de TCC: A Prática do Crossfit por uma Pessoa com Mielomeningocele",
          descricao: "Acadêmico: Pedro Paulo Nunes de Lima",
          horario: "19:40",
          local: "Sala 9 (FAED)",
          orientador: "Dra. Josiane Fujisawa Filus de Freitas",
          avaliador: "Dr. Mário Sérgio Vaz da Silva, Dra. Juliana Maria da Silva Lima (FAEAD)"
        },
        {
          titulo: "Defesa de TCC: A Qualidade de Vida de Mães de Crianças com TEA: Estudo Preliminar",
          descricao: "Acadêmica: Ana Luiza Figueiredo",
          horario: "20:20",
          local: "Sala 9 (FAED)",
          orientador: "Dra. Josiane Fujisawa Filus de Freitas",
          avaliador: "Dr. Mário Sérgio Vaz da Silva, Ms. Wenis Vargas de Carvalho (FAEAD)"
        },
        {
          titulo: "Defesa de TCC: Educação Física no Ensino Médio: A Importância de Conscientizar o Aluno para um Estilo de Vida Saudável",
          descricao: "Acadêmico: Fabio Oliveira Pinzan",
          horario: "21:00",
          local: "Sala 9 (FAED)",
          orientador: "Pablo Christiano B. Lollo",
          avaliador: "Dr. Daniel Traina Gama, Dr. Marcelo José Taques"
        }
      ]
    },
    {
      dia_semana: "Quinta-feira",
      data: "2025-06-26",
      atividades: [
        {
          titulo: "Estágio no Ensino Médio e na Educação de Jovens e Adultos",
          descricao: "Apresentação dos relatórios de estágio supervisionado",
          horario: "19:00",
          local: "Sala 10 (FAED)",
          arguidora: "Profa. Dra. Cássia Cristina Furlan"
        },
        {
          titulo: "Pedagogia do Esporte: Uma Ferramenta de Transformação na Educação Física Escolar – Uma Análise do Estágio no Ensino Médio",
          descricao: "Jonatan Fernando dos Santos, Diogo Henrique Nogueira Lima, Fabiano",
          horario: "19:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Estágio no Ensino Médio e Suas Dificuldades",
          descricao: "Emily Alves da Silva",
          horario: "19:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "A Falta de Roupas Adequadas como Barreira à Prática de Atividades Físicas no Contexto Escolar",
          descricao: "Renato dos Santos Parra",
          horario: "19:30",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "O Papel do Professor na Inclusão e Motivação dos Alunos nas Aulas de Educação Física no Ensino Médio",
          descricao: "Brenner Cesar Soares da Silva",
          horario: "19:45",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Desinteresse nas Aulas de Educação Física e o Vaping entre Estudantes",
          descricao: "Carlos André Fernandes Ribeiro Guarienti",
          horario: "20:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "A Nova Era do Ensino, o Desinteresse e Interesse nas Aulas",
          descricao: "Eduardo de Souza Sozzi",
          horario: "20:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Saúde Mental, Desgaste Profissional e Burnout em Professores",
          descricao: "Everton Martins Alfonso",
          horario: "20:30",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Inclusão na Educação Física Escolar: Vivências no Estágio Supervisionado",
          descricao: "Gustavo Fonseca da Silva",
          horario: "20:45",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Relato de Experiência de Estágio em Educação Física no Ensino Médio: Desafios e Soluções para a Motivação dos Alunos",
          descricao: "Isabella Rodrigues da Silva",
          horario: "21:00",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Reflexões sobre a Aprendizagem Motora na Pós-Pandemia: Vivências de Estágio no Ensino Médio da Escola Antônia da Silveira Capilé.",
          descricao: "José Henrique Reale Fonseca",
          horario: "21:15",
          local: "Sala 10 (FAED)"
        },
        {
          titulo: "Relato de Experiência do Estágio Supervisionado em Educação Física: Estágio no Ensino Médio e na Educação de Jovens e Adultos",
          descricao: "Rafaela Vidal Cruz",
          horario: "21:30",
          local: "Sala 10 (FAED)"
        },
        // Defesas de TCC - Sala 9 (FAED)
        {
          titulo: "Defesa de TCC: O Esporte no Desenvolvimento Integral da Criança na Educação Infantil",
          descricao: "Acadêmico: Carlos André Fernandes Ribeiro Guarienti",
          horario: "19:00",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Deyvid Tenner de Souza Rizzo",
          avaliador: "Dr. Marcelo José Taques, Dr. Gustavo Levandoski"
        },
        {
          titulo: "Defesa de TCC: Análise das Ementas das Disciplinas Relacionadas às Atividades Aquáticas na Formação Inicial em Educação Física nas Universidades Federais do Mato Grosso do Sul",
          descricao: "Acadêmico: Gustavo Fonseca da Silva",
          horario: "19:40",
          local: "Sala 9 (FAED)",
          orientador: "Dr. Deyvid Tenner de Souza Rizzo",
          avaliador: "Dr. Marcelo José Taques, Dr. Gustavo Levandoski"
        },
        {
          titulo: "Defesa de TCC: Uso de Ergogênicos Devidos às Influências Digitais",
          descricao: "Acadêmico: Eduardo de Souza Sozzi",
          horario: "20:20",
          local: "Sala 9 (FAED)",
          orientador: "Pablo Christiano B. Lollo",
          avaliador: "Dr. Daniel Traina Gama, Me. Luiz Fabiano Vilela de Almeida"
        },
        {
          titulo: "Defesa de TCC: O Impacto da Pandemia COVID-19 no Desenvolvimento Motor Infantil",
          descricao: "Acadêmica: Adriele da Cunha Martins Luiz",
          horario: "21:00",
          local: "Sala 9 (FAED)",
          orientador: "Marcelo José Taques",
          avaliador: "Dr. Manuel Pacheco Neto, Dra. Lindsei Brabec Mota Barreto"
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
        },
        {
          titulo: "Introdução ao Beach Tennis",
          descricao: "Treinador Jader Morilla",
          horario: "19:00",
          local: "Quadra de areia (ao lado do LABEF)"
        },
        {
          titulo: "Nutrição Esportiva Aplicada à Hipertrofia e Redução de Massa Gorda",
          descricao: "Dr. Pablo Christiano Barboso Lollo",
          horario: "19:00",
          local: "Laboratório de Educação Física Escolar - LABEF"
        },
        {
          titulo: "Ginástica Rítmica",
          descricao: "Profa. Paola Gouveia Schemberger Levandoski",
          horario: "19:00",
          local: "Laboratório de Atividades Rítmicas e Dança – LARDAN (LABEF)"
        },
        {
          titulo: "Atividade Física Funcional",
          descricao: "Profa. Karla Soares Bertuccini",
          horario: "19:00",
          local: "Quadra Poliesportiva – Unidade II da UFGD"
        },
        {
          titulo: "Esportes de Aventura",
          descricao: "Prof. Lucas da Silva Ferreira",
          horario: "19:00",
          local: "Espaço aberto ao lado do LABEF"
        }
      ]
    }
  ]
}; 