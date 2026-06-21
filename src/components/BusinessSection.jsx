import { ArrowRight, BarChart3, FileText, Handshake } from 'lucide-react';

const benefits = [
  {
    icon: <BarChart3 size={20} className="text-orange" />,
    text: 'Análisis de rentabilidad adaptado al flujo de caja del negocio',
  },
  {
    icon: <FileText size={20} className="text-orange" />,
    text: 'Documentación técnica y legal para financiamiento bancario',
  },
  {
    icon: <Handshake size={20} className="text-orange" />,
    text: 'Acompañamiento en gestión ante UTE y organismos públicos',
  },
];

export default function BusinessSection() {
  return (
    <section id="para-empresas" className="bg-navy-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
              PARA EMPRESAS Y PERSONAS JURÍDICAS
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Si representás una empresa,<br />tenemos una propuesta para vos.
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-md">
              {/* Placeholder — mensaje final a definir */}
              Los proyectos solares para empresas tienen lógica diferente: mayor consumo, posibilidad de financiamiento y beneficios fiscales. Trabajamos con SAs, SRLs y cooperativas de producción.
            </p>
            <ul className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {b.icon}
                  </div>
                  <span className="text-blue-100 text-sm leading-relaxed">{b.text}</span>
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm">
              Consultar para mi empresa
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right — visual accent */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
                alt="Instalación solar comercial — placeholder"
                className="w-full h-64 sm:h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
