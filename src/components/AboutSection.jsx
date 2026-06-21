export default function AboutSection() {
  return (
    <section id="quienes-somos" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Image placeholder */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Equipo Menéndez Pino"
                className="w-full h-72 sm:h-96 object-cover"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-orange text-white rounded-2xl px-5 py-4 shadow-lg text-center">
              <span className="text-3xl font-black leading-none block">+10</span>
              <span className="text-xs font-semibold leading-tight block mt-0.5">años de<br />experiencia</span>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
              QUIÉNES SOMOS
            </p>
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Un equipo técnico con experiencia en proyectos solares en Uruguay.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {/* Placeholder — texto final a definir con el cliente */}
              Somos Menéndez Pino, una empresa uruguaya especializada en el diseño e instalación de sistemas fotovoltaicos para hogares, comercios y establecimientos productivos.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {/* Placeholder — texto final a definir con el cliente */}
              Trabajamos con un equipo técnico propio, instaladores habilitados ante UTE y nos comprometemos con cada proyecto desde el análisis inicial hasta el soporte post-instalación.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="text-center sm:text-left">
                <span className="text-navy text-3xl font-black">+XX</span>
                <p className="text-gray-500 text-xs mt-0.5">proyectos instalados</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-navy text-3xl font-black">XX</span>
                <p className="text-gray-500 text-xs mt-0.5">departamentos de Uruguay</p>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-navy text-3xl font-black">XX kWp</span>
                <p className="text-gray-500 text-xs mt-0.5">de capacidad instalada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
