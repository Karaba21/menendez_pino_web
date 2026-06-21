import { ClipboardList, Wrench, TrendingUp } from 'lucide-react';

const items = [
  {
    icon: <ClipboardList size={28} className="text-orange" />,
    title: 'Análisis personalizado',
    description:
      'Evaluamos tu consumo real, las condiciones de tu techo y tu tarifa de UTE para dimensionar el sistema que mejor se adapta a vos.',
  },
  {
    icon: <Wrench size={28} className="text-orange" />,
    title: 'Proceso completo sin complicaciones',
    description:
      'Nos encargamos de todo: diseño, instalación, trámites ante UTE y habilitación. Vos no tenés que gestionar nada.',
  },
  {
    icon: <TrendingUp size={28} className="text-orange" />,
    title: 'Retorno económico demostrable',
    description:
      'Antes de invertir, te mostramos los números: ahorro estimado, costo del sistema y plazo de recuperación.',
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            POR QUÉ ELEGIRNOS
          </p>
          <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight">
            No vendemos paneles.<br />Diseñamos proyectos solares rentables.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-navy font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
