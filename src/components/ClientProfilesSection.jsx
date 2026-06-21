import { Home, Building2, Tractor } from 'lucide-react';

const profiles = [
  {
    icon: <Home size={32} className="text-orange" />,
    title: 'Hogar',
    subtitle: 'Consumo medio-alto',
    description:
      'Si tu factura de UTE supera los $3.000–$4.000 mensuales, probablemente la energía solar tenga sentido económico para vos.',
    highlight: 'Ideal para consumos desde 300 kWh/mes',
  },
  {
    icon: <Building2 size={32} className="text-orange" />,
    title: 'Comercio o empresa',
    subtitle: 'Consumo comercial o industrial',
    description:
      'Locales, oficinas y pequeñas industrias con consumo diurno son los perfiles con mejor retorno en energía solar.',
    highlight: 'Más ahorro cuando el consumo es de día',
  },
  {
    icon: <Tractor size={32} className="text-orange" />,
    title: 'Establecimiento productivo',
    subtitle: 'Agro, ganadería, agroindustria',
    description:
      'Bombeo, refrigeración y uso rural son aplicaciones ideales para sistemas solares con o sin conexión a la red.',
    highlight: 'Soluciones con o sin conexión a UTE',
  },
];

export default function ClientProfilesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            ¿ESTO ES PARA VOS?
          </p>
          <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight">
            Trabajamos con hogares, comercios<br className="hidden sm:block" /> y establecimientos productivos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                {profile.icon}
              </div>
              <div>
                <h3 className="text-navy font-extrabold text-lg leading-tight">{profile.title}</h3>
                <p className="text-orange text-xs font-semibold mt-0.5">{profile.subtitle}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{profile.description}</p>
              <div className="border-t border-gray-100 pt-4">
                <span className="text-navy text-xs font-semibold">{profile.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
