import { BadgeCheck, ShieldCheck, Award, Users } from 'lucide-react';

const signals = [
  {
    icon: <BadgeCheck size={28} className="text-orange" />,
    title: 'Instaladores habilitados ante UTE',
    description: 'Trabajamos con instaladores certificados por UTE para garantizar una conexión a red segura y legal.',
  },
  {
    icon: <Award size={28} className="text-orange" />,
    title: 'Equipos de marcas líderes',
    description: 'Utilizamos paneles e inversores de fabricantes con respaldo internacional y garantía extendida.',
  },
  {
    icon: <ShieldCheck size={28} className="text-orange" />,
    title: 'Firma técnica profesional',
    description: 'Cada proyecto cuenta con firma de ingeniero habilitado para trámites ante organismos competentes.',
  },
  {
    icon: <Users size={28} className="text-orange" />,
    title: 'Equipo técnico propio',
    description: 'No tercerizamos la instalación. Nuestro equipo es el que diseña, instala y da soporte post-venta.',
  },
];

export default function TrustSignalsSection() {
  return (
    <section className="bg-navy py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            POR QUÉ CONFIAR EN NOSOTROS
          </p>
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight">
            Señales de confianza
          </h2>
          <p className="text-blue-200 text-sm mt-3 max-w-md mx-auto">
            Antes de invertir, necesitás saber con quién estás trabajando.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-3 bg-white/5 border border-blue-700 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                {signal.icon}
              </div>
              <h3 className="text-white font-bold text-sm leading-tight">{signal.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
