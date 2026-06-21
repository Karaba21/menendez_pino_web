// Sección de testimonios — pendiente de contenido real.
// Está importada en App.jsx pero comentada hasta tener testimonios reales.

const testimonials = [
  {
    quote:
      'Texto del testimonio — pendiente de contenido real del cliente.',
    name: 'Nombre Apellido',
    location: 'Localidad, Uruguay',
    savings: '$ XX.XXX / año',
  },
  {
    quote:
      'Texto del testimonio — pendiente de contenido real del cliente.',
    name: 'Nombre Apellido',
    location: 'Localidad, Uruguay',
    savings: '$ XX.XXX / año',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            TESTIMONIOS
          </p>
          <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#E87D2B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-navy font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-orange font-bold text-sm">{t.savings}</p>
                  <p className="text-gray-400 text-xs">ahorro estimado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
