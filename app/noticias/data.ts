export interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
  link: string;
  conteudo: string;
}

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: 'Inscrições Abertas para o XII Seminário de Educação Física',
    resumo: 'As inscrições para o XII Seminário de Educação Física já estão abertas. Não perca a oportunidade de participar deste importante evento acadêmico.',
    data: '15 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/inscricoes-abertas',
    conteudo: `
      O XII Seminário de Educação Física está com inscrições abertas! Este é um dos eventos mais importantes da área, reunindo profissionais, estudantes e pesquisadores para discutir as últimas tendências e avanços na Educação Física.

      Nesta edição, contaremos com:
      - Palestras com renomados profissionais
      - Workshops práticos
      - Apresentação de trabalhos científicos
      - Networking com profissionais da área
      - Certificado de participação

      As vagas são limitadas, então garanta já a sua participação!
    `
  },
  {
    id: 2,
    titulo: 'Programação do XII Seminário de Educação Física',
    resumo: 'Confira a programação completa do XII Seminário de Educação Física, com palestras, workshops e atividades práticas.',
    data: '10 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/programacao',
    conteudo: `
      A programação do XII Seminário de Educação Física foi divulgada! O evento contará com uma grade diversificada de atividades, incluindo:

      Dia 1:
      - 9h: Abertura
      - 10h: Palestra Principal
      - 14h: Workshops
      - 16h: Apresentação de Trabalhos

      Dia 2:
      - 9h: Mesa Redonda
      - 11h: Atividades Práticas
      - 14h: Palestras
      - 16h: Encerramento

      Confira a programação completa e organize sua participação!
    `
  },
  {
    id: 3,
    titulo: 'Palestrantes Confirmados para o XII Seminário',
    resumo: 'Conheça os renomados palestrantes que já confirmaram presença no XII Seminário de Educação Física.',
    data: '5 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/palestrantes',
    conteudo: `
      Já temos a confirmação de importantes palestrantes para o XII Seminário de Educação Física! Entre eles:

      - Dr. João Silva (UFSC)
      - Dra. Maria Santos (USP)
      - Prof. Carlos Oliveira (UNICAMP)
      - Dra. Ana Costa (UFRJ)

      Estes profissionais trarão suas experiências e conhecimentos para enriquecer ainda mais o evento. Não perca esta oportunidade de aprender com os melhores da área!
    `
  }
]; 