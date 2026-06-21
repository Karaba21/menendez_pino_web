import { MessageSquare, Search, HardHat, FileCheck, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <MessageSquare size={24} className="text-orange" />,
    title: 'Nos contás tu situación',
    description: 'Completás el formulario con tu zona, tipo de propiedad y factura de UTE.',
  },
  {
    number: '02',
    icon: <Search size={24} className="text-orange" />,
    title: 'Analizamos tu caso',
    description: 'Evaluamos tu consumo, techo y tarifa para diseñar el sistema adecuado.',
  },
  {
    number: '03',
    icon: <HardHat size={24} className="text-orange" />,
    title: 'Coordinamos la instalación',
    description: 'Nuestro equipo técnico instala el sistema en los plazos acordados.',
  },
  {
    number: '04',
    icon: <FileCheck size={24} className="text-orange" />,
    title: 'Gestionamos los trámites ante UTE',
    description: 'Nos encargamos de toda la habilitación y conexión a la red.',
  },
  {
    number: '05',
    icon: <Zap size={24} className="text-orange" />,
    title: 'Empezás a ahorrar',
    description: 'Tu sistema entra en operación y empezás a ver el impacto en tu factura.',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            EL PROCESO
          </p>
          <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight">
            Cómo funciona
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Del primer contacto a tu primer mes de ahorro, en 5 pasos simples.
          </p>
        </div>

        {/* Desktop: horizontal / Mobile: vertical */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 relative pb-8 md:pb-0">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-1/2 w-full h-px bg-orange/20" />
              )}
              {/* Connector line (mobile) */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-7 top-16 w-px h-full bg-orange/20" />
              )}

              {/* Icon circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-navy/5 border-2 border-orange/20 flex items-center justify-center flex-shrink-0">
                {step.icon}
              </div>

              {/* Text */}
              <div className="md:text-center flex-1">
                <span className="text-orange text-xs font-black tracking-widest">{step.number}</span>
                <h3 className="text-navy font-bold text-sm mt-0.5 mb-1 leading-tight">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
