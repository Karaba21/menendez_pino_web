import { Clock, ShieldCheck, Lock, CalendarCheck } from 'lucide-react';

const benefits = [
  { icon: <Clock size={18} className="text-orange flex-shrink-0" />, text: 'Respuesta en 24 horas hábiles' },
  { icon: <ShieldCheck size={18} className="text-orange flex-shrink-0" />, text: 'Sin costos y sin compromiso' },
  { icon: <Lock size={18} className="text-orange flex-shrink-0" />, text: 'Tus datos están protegidos' },
];

export default function CTASection() {
  return (
    <section className="bg-navy py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — Heading + CTA */}
          <div className="flex flex-col items-start lg:items-start">
            {/* Sun icon */}
            <div className="mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="10" fill="#E87D2B" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                  <line
                    key={i}
                    x1="24"
                    y1="24"
                    x2={24 + 18 * Math.cos((deg * Math.PI) / 180)}
                    y2={24 + 18 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#E87D2B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                ))}
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-0.5 bg-orange" />
              <div className="w-5 h-0.5 bg-orange" />
              <p className="text-orange text-xs font-bold tracking-widest uppercase">
                DA EL PRIMER PASO HACIA TU AHORRO
              </p>
            </div>

            <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              Solicitá tu diagnóstico<br />solar gratuito
            </h2>
            <p className="text-blue-200 text-sm mb-6 max-w-sm">
              Es rápido, sin compromiso y puede cambiar la forma de consumir energía.
            </p>

          </div>

          {/* Right — Benefits list */}
          <div className="flex flex-col gap-4 lg:pl-10 lg:border-l border-blue-700">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center flex-shrink-0">
                  {b.icon}
                </div>
                <span className="text-blue-100 text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
