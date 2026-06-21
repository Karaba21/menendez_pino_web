import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Inicio',               href: '#inicio'        },
  { label: 'Cómo funciona',        href: '#como-funciona' },
  { label: 'Quiénes somos',        href: '#quienes-somos' },
  { label: 'Para empresas',        href: '#para-empresas' },
  { label: 'Preguntas frecuentes', href: '#faq'           },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex flex-col items-center leading-tight">
              <span className="text-2xl font-black text-navy tracking-wider">MP</span>
              <span className="text-[8px] font-semibold text-navy tracking-widest uppercase leading-none">
                MIENDEZ PINO
              </span>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-700 hover:text-navy font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:block">
            <a
              href="#diagnostico"
              className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-navy-light transition-colors"
            >
              <MessageCircle size={16} />
              Solicitar diagnóstico
            </a>
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray-700 hover:text-navy font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#diagnostico"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2.5 rounded-lg w-full justify-center"
          >
            <MessageCircle size={16} />
            Solicitar diagnóstico
          </a>
        </div>
      )}
    </nav>
  );
}
