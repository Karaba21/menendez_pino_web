import { ArrowRight } from 'lucide-react';
import DiagnosticForm from './DiagnosticForm';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[600px] flex items-center"
      style={{
        background: 'linear-gradient(120deg, #0f1f45 0%, #1B2D5B 55%, #2a4a8a 100%)',
      }}
    >
      {/* Solar panel background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-orange text-xs font-bold tracking-widest uppercase">
                ENERGÍA LIMPIA
              </span>
              <span className="text-orange">•</span>
              <span className="text-orange text-xs font-bold tracking-widest uppercase">
                AHORRO REAL
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Descubrí si tu Casa/Empresa<br />
              puede ahorrar con<br />
              <span className="text-orange">energía solar</span>
            </h1>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange rounded mb-5" />

            {/* Description */}
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Completá el formulario y recibí una evaluación personalizada para tu hogar o establecimiento.
            </p>

            {/* CTA Button */}
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors mb-4 text-sm"
            >
              Recibí una evaluación personalizada sin compromiso
              <ArrowRight size={18} />
            </a>

            {/* Support text */}
            <p className="text-blue-200 text-sm">
              Completá tus datos y analizamos tu caso.
            </p>
          </div>

          {/* Right — Diagnostic Form */}
          <div className="flex justify-center lg:justify-end">
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </section>
  );
}
