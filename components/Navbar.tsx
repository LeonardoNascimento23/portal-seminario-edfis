import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            XI Seminário EdFis
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link href="/noticias" className="hover:text-blue-200 transition">
              Notícias
            </Link>
            <Link href="/oficinas" className="hover:text-blue-200 transition">
              Oficinas
            </Link>
            <Link href="/galeria" className="hover:text-blue-200 transition">
              Galeria
            </Link>
          </div>

          {/* Menu mobile */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 