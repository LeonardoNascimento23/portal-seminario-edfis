import { eventInfo } from '@/data/mockData';
import Image from 'next/image';

export default function SobrePage() {
  // Mapeamento de membros com foto
  const membros = [
    // Coordenação Geral
    {
      equipe: 'Coordenação Geral',
      nome: 'Doutor Deyvid Tenner de Souza Rizzo',
      funcao: 'Coordenador do Curso de Educação Física',
      foto: '/images/DeyvidTennerdeSouzaRizzo.jpeg',
    },
    {
      equipe: 'Coordenação Geral',
      nome: 'Pâmela Talita Valdez de Lima',
      funcao: 'Coordenadora Geral',
      foto: '/images/PamelaTalitaValdezdelima.jpeg',
    },
    // Comunicação
    {
      equipe: 'Equipe de Comunicação',
      nome: 'Jhenyffer Freire de Oliveira',
      funcao: 'Líder de Comunicação',
      foto: '/images/JhenyfferFreiredeOliveira.jpeg',
    },
    {
      equipe: 'Equipe de Comunicação',
      nome: 'Leonardo Nascimento',
      funcao: 'Programador',
      foto: '/images/LeonardoNascimento.png',
    },
    { equipe: 'Equipe de Comunicação', nome: 'Rhaira', funcao: 'Membro' },
    { equipe: 'Equipe de Comunicação', nome: 'Maicon', funcao: 'Membro' },
    // Inscrições
    {
      equipe: 'Equipe de Inscrições',
      nome: 'Mariana Zucão Barbosa Espindola',
      funcao: 'Líder das Inscrições',
      foto: '/images/MarianaZucaoBarbosaEspindola.jpeg',
    },
    {
      equipe: 'Equipe de Inscrições',
      nome: 'Doutora Josiane Fujisawa Filus de Freitas',
      funcao: 'Membro',
      foto: '/images/JosianeFujisawaFilusdeFreitas.jpeg',
    },
    { equipe: 'Equipe de Inscrições', nome: 'João Buttini', funcao: 'Membro' },
    { equipe: 'Equipe de Inscrições', nome: 'Brenda Dantas', funcao: 'Membro' },
    { equipe: 'Equipe de Inscrições', nome: 'Carolaine', funcao: 'Membro' },
    // Certificação
    {
      equipe: 'Equipe de Certificação',
      nome: 'Emily Alves da Silva',
      funcao: 'Líder de Certificação',
      foto: '/images/EmilyAlvesdaSilva.jpeg',
    },
    { equipe: 'Equipe de Certificação', nome: 'Pâmela', funcao: 'Membro' },
    { equipe: 'Equipe de Certificação', nome: 'Diogo', funcao: 'Membro' },
    // Oficinas
    {
      equipe: 'Equipe de Oficinas',
      nome: 'Eduardo Nardi Chirata',
      funcao: 'Líder da organização de Oficinas',
      foto: '/images/EduardoNardiChirata.jpeg',
    },
    { equipe: 'Equipe de Oficinas', nome: 'Leonardo', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Keije', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Mariana Zucão', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Esley', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Danilo', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Nathaly', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Erick', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'Brenda', funcao: 'Membro' },
    { equipe: 'Equipe de Oficinas', nome: 'João Buttini', funcao: 'Membro' },
    // Cerimônias
    { equipe: 'Equipe de Cerimônias', nome: 'Professora Jacqueline', funcao: 'Líder da organização de Cerimônias' },
    { equipe: 'Equipe de Cerimônias', nome: 'Douglas', funcao: 'Membro' },
    { equipe: 'Equipe de Cerimônias', nome: 'Vilmar', funcao: 'Membro' },
    { equipe: 'Equipe de Cerimônias', nome: 'José Vinícius', funcao: 'Membro' },
    { equipe: 'Equipe de Cerimônias', nome: 'Danielli', funcao: 'Membro' },
  ];

  // Agrupar por equipe
  const equipes = Array.from(new Set(membros.map(m => m.equipe)));

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Sobre o Evento</h1>

          {/* Introdução */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">{eventInfo.title}</h2>
            <p className="text-gray-600 mb-4">
              {eventInfo.description}
            </p>
          </section>

          {/* Objetivos */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">Objetivos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Promover a integração entre profissionais, pesquisadores e estudantes da área</li>
              <li>Discutir temas atuais e relevantes da Educação Física</li>
              <li>Fomentar a produção e divulgação de pesquisas científicas</li>
              <li>Proporcionar oportunidades de atualização profissional</li>
              <li>Estimular o desenvolvimento de práticas inovadoras na área</li>
            </ul>
          </section>

          {/* Público-Alvo */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">Público-Alvo</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Estudantes de graduação e pós-graduação em Educação Física</li>
              <li>Profissionais da área de Educação Física</li>
              <li>Pesquisadores e professores</li>
              <li>Interessados em temas relacionados à Educação Física</li>
            </ul>
          </section>

          {/* Comissão Organizadora */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">Comissão Organizadora</h2>
            {equipes.map(equipe => (
              <div key={equipe} className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-[#A68521]">{equipe}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {membros.filter(m => m.equipe === equipe).map((membro, idx) => (
                    <div key={membro.nome + idx} className="p-4 bg-gray-50 rounded-lg flex flex-col items-center text-center shadow">
                      {membro.foto && (
                        <Image src={membro.foto} alt={membro.nome} className="w-20 h-20 rounded-full object-cover border-2 border-[#A68521] mb-2 shadow" width={80} height={80} />
                      )}
                      <span className="font-semibold text-[#204F8C]">{membro.nome}</span>
                      <span className="text-[#A68521] text-sm font-medium">{membro.funcao}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Local e Data */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">Local e Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#A68521]">Data</h3>
                <p className="text-gray-600">23 a 27 de Junho de 2025</p>
                <p className="text-gray-600 mt-2">Prazo para inscrições: {new Date(eventInfo.registrationDeadline).toLocaleDateString('pt-BR')}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#A68521]">Contato</h3>
                <p className="text-gray-600">Email: {eventInfo.contact.email}</p>
                <p className="text-gray-600">Telefone: {eventInfo.contact.phone}</p>
              </div>
            </div>
          </section>

          {/* Logos */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#204F8C]">Instituições Envolvidas</h2>
            <div className="flex justify-center items-center space-x-8">
              <Image src={eventInfo.logos.ufgd} alt="Logo UFGD" className="h-20" width={80} height={80} />
              <Image src={eventInfo.logos.edFisica} alt="Logo Educação Física" className="h-20" width={80} height={80} />
              <Image src={eventInfo.logos.faed} alt="Logo FAED" className="h-20" width={80} height={80} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 