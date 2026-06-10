import { Zap, Coins, CalendarCheck2, Leaf } from 'lucide-react';

const stats = [
  {
    icon: <Zap size={28} className="text-orange" />,
    label: 'Sistema instalado',
    value: '5,5 kWp',
    unit: null,
  },
  {
    icon: <Coins size={28} className="text-orange" />,
    label: 'Ahorro anual estimado',
    value: '$ 49.000',
    unit: 'pesos uruguayos',
  },
  {
    icon: <CalendarCheck2 size={28} className="text-orange" />,
    label: 'Retorno estimado',
    value: '4,5 años',
    unit: null,
  }
];

export default function StatsSection() {
  return (
    <section className="bg-navy py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Left label block */}
          <div className="lg:col-span-1 flex flex-col justify-center pr-6 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-blue-700">
            <span className="text-orange text-xs font-bold tracking-widest uppercase mb-2">
              CASO REAL
            </span>
            <h2 className="text-white text-2xl font-bold leading-tight mb-2">
              Ejemplo de ahorro estimado
            </h2>
            <p className="text-blue-200 text-xs">
              Vivienda en Canelones · Consumo promedio 550 kWh/mes
            </p>
            <p className="text-blue-400 text-[11px] mt-2">
              *Los valores son estimados y pueden variar según el consumo y las condiciones de cada vivienda.
            </p>
          </div>

          {/* Stats */}
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-6 lg:py-0 px-4 ${
                i < stats.length - 1 ? 'border-b sm:border-b-0 lg:border-r border-blue-700' : ''
              }`}
            >
              {stat.icon}
              <span className="text-blue-200 text-xs mt-2 mb-1 text-center">{stat.label}</span>
              <span className="text-white text-3xl font-extrabold leading-tight text-center">
                {stat.value}
              </span>
              {stat.unit && (
                <span className="text-blue-300 text-xs mt-0.5">{stat.unit}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
