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
    titulo: 'Inscrições Abertas para o XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
    resumo: 'As inscrições para o XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física já estão abertas. Não perca a oportunidade de participar deste importante evento acadêmico.',
    data: '15 de Maio de 2025',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/inscricoes-abertas',
    conteudo: `
      O XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física está com inscrições abertas! Este é um dos eventos mais importantes da área, reunindo profissionais, estudantes e pesquisadores para discutir as últimas tendências e avanços na Educação Física.

      As vagas são limitadas, então garanta já a sua participação!
    `
  },
  {
    id: 2,
    titulo: 'Programação do XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física',
    resumo: 'Confira a programação completa do XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física, com palestras, workshops e atividades práticas.',
    data: '10 de Maio de 2025',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/programacao',
    conteudo: `
      A programação do XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física foi divulgada! O evento contará com uma grade diversificada de atividades, incluindo:

      Segunda-feira, 23 de junho de 2025
      A cerimônia de abertura dará início ao evento, seguida pelo nosso Festival de Dança, que reunirá apresentações artísticas e culturais de grande diversidade e riqueza.

      Terça-feira a quinta-feira, de 24 a 26 de junho de 2025
      Estes dias serão dedicados às exposições de estágios e trabalhos de conclusão de curso (TCC), quando os alunos compartilharão resultados de pesquisas, projetos e experiências práticas.

      Sexta-feira, 27 de junho de 2025
      Encerramos a semana com uma série de oficinas temáticas, proporcionando momentos de aprendizado prático e interação direta com especialistas em diversas áreas.

      Confira a programação completa e organize sua participação!
    `
  },
  {
    id: 3,
    titulo: 'Palestrantes Confirmados para o XI Seminário',
    resumo: 'Conheça os renomados palestrantes que já confirmaram presença no XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física.',
    data: '5 de Maio de 2024',
    imagem: '/images/galeria/seminarioedfis20250519_001.jpeg',
    link: '/noticias/palestrantes',
    conteudo: `
      Já temos a confirmação de importantes palestrantes para o XI Seminário de Práticas de Ensino, Pesquisa e Extensão em Educação Física! Entre eles:

      - Professor Lucas da Silva Ferreira
      - Instrutor Jader Morilla
      - Professora Paola Gouveia
      - Doutor Pablo Christiano Barboso
      - Professora Karla Soares Bertuccini

      Estes profissionais trarão suas experiências e conhecimentos para enriquecer ainda mais o evento. Não perca esta oportunidade de aprender com os melhores da área!
    `
  }
]; 