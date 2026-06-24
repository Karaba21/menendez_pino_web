import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Inicio',               to: '/'              },
  { label: 'Cómo funciona',        to: '/como-funciona' },
  { label: 'Casas',                to: '/casas'         },
  { label: 'Empresas',             to: '/empresas'      },
  { label: 'Preguntas frecuentes', to: '/faq'           },
  { label: 'Contacto',             to: '/contacto'      },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/logo2.png" alt="Menéndez Pino" className="h-10 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-gray-700 hover:text-navy font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <Link
                to="/contacto"
                className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
              >
                <MessageCircle size={16} />
                Solicitar diagnóstico
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - fixed, no empuja el contenido */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 bg-white shadow-lg border-t border-gray-100 px-4 pb-6 pt-2 space-y-1 transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-navy font-medium py-3 border-b border-gray-50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-3">
          <Link
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-3 rounded-lg w-full justify-center hover:bg-navy-light transition-colors"
          >
            <MessageCircle size={16} />
            Solicitar diagnóstico
          </Link>
        </div>
      </div>
    </>
  );
}
