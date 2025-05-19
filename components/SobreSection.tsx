import Link from 'next/link';

export default function SobreSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#204F8C]">Sobre o Evento</h2>
        <p className="text-gray-700 mb-6">O XI Seminário de Educação Física é um evento acadêmico que reúne profissionais, pesquisadores e estudantes para discutir temas relevantes da área, promover integração e atualização profissional.</p>
        <Link href="/sobre" className="btn btn-accent">Saiba mais</Link>
      </div>
    </section>
  );
} 