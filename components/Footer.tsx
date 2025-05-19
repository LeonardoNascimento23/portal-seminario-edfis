import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#132B4C] to-[#204F8C] text-gray-100 border-t-4 border-[#A68521] shadow-2xl">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start md:col-span-1 mb-6 md:mb-0">
            <img
              src="/images/logo-educacao-fisica-ufgd.png"
              alt="Logo Educação Física UFGD"
              className="w-24 h-24 rounded-full border-4 border-[#A68521] bg-white shadow-lg mb-4"
            />
            <span className="text-lg font-bold text-white text-center md:text-left drop-shadow">Educação Física<br />UFGD</span>
          </div>

          {/* Sobre */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#A68521] drop-shadow">Sobre o Evento</h3>
            <p className="text-gray-200 mb-4">
              O XI Seminário de Educação Física é um evento acadêmico que reúne profissionais e
              estudantes para discutir temas relevantes da área.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#A68521] drop-shadow">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/noticias" className="hover:text-[#A68521] transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/oficinas" className="hover:text-[#A68521] transition-colors">
                  Oficinas
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-[#A68521] transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#inscricao" className="hover:text-[#A68521] transition-colors">
                  Inscrições
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#A68521] drop-shadow">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:contato@univxyz.edu" className="hover:text-white transition-colors">
                  contato@univxyz.edu
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+550012345678" className="hover:text-white transition-colors">
                  (00) 1234-5678
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#A68521] drop-shadow">Localização</h3>
            <address className="not-italic">
              <p className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Av. Principal, 1234</span>
              </p>
              <p className="ml-7">Bairro Universitário</p>
              <p className="ml-7">Cidade - Estado</p>
              <p className="ml-7">CEP: 12345-678</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-[#A68521] text-center">
          <p className="text-gray-200 drop-shadow">
            &copy; {new Date().getFullYear()} XI Seminário de Educação Física. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
