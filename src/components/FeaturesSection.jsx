import { CheckCircle2 } from 'lucide-react';

const bullets = [
  'Tu consumo mensual y estacional',
  'Potencia contratada y tarifa',
  'Superficie, orientación e inclinación del techo',
  'Sombras y estructuras cercanas',
  'Ahorro esperado y retorno de inversión',
];

const labels = [
  { text: 'Orientación\ne inclinación', position: 'top-[10%] left-[5%]', icon: '🧭' },
  { text: 'Sombras\ny entorno',         position: 'top-[10%] right-[3%]', icon: '🌿' },
  { text: 'Consumo\ny tarifa',          position: 'bottom-[15%] left-[5%]', icon: '📊' },
  { text: 'Ahorro\nestimado',           position: 'bottom-[15%] right-[3%]', icon: '💰' },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
              + PROPUESTA PERSONALIZADA PARA TU HOGAR
            </p>
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              No todas las casas son iguales.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Analizamos factores clave para diseñar el sistema ideal
              para vos y tu familia.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-orange flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — House diagram */}
          <div className="relative h-80 sm:h-96 flex items-center justify-center">
            {/* Dashed circle border */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-orange/30" />

            {/* House image */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=80"
              alt="Casa con paneles solares"
              className="relative z-10 w-52 sm:w-64 h-40 sm:h-48 object-cover rounded-2xl shadow-xl"
            />

            {/* Labels */}
            {labels.map((label) => (
              <div
                key={label.text}
                className={`absolute ${label.position} flex flex-col items-center gap-1 z-20`}
              >
                {/* Dot connector */}
                <div className="w-2 h-2 rounded-full bg-orange" />
                <div className="bg-white border border-gray-100 rounded-xl shadow-md px-3 py-2 text-center max-w-[90px]">
                  <span className="text-lg">{label.icon}</span>
                  <p className="text-navy text-[10px] font-semibold leading-tight whitespace-pre-line mt-0.5">
                    {label.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
