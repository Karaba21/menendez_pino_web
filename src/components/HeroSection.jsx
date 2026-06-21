import { CheckCircle2, CalendarCheck } from 'lucide-react';

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
              Descubrí si tu casa<br />
              puede ahorrar con<br />
              <span className="text-orange">energía solar</span>
            </h1>

            {/* Divider */}
            <div className="w-12 h-1 bg-orange rounded mb-5" />

            {/* Description */}
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Analizamos tu factura de UTE, las condiciones de tu techo
              y tu consumo para estimar tu ahorro y el retorno de inversión.
              Diagnóstico gratuito, sin compromiso y en 24 horas hábiles.
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors mb-6 text-sm">
              <CalendarCheck size={18} />
              Solicitar diagnóstico gratuito
            </button>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#E87D2B" className="mr-0.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4,9/5</span>
              <span className="text-blue-200 text-sm">
                • Basado en <span className="underline cursor-pointer">opiniones</span> reales de nuestros clientes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
