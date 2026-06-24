import { ArrowRight, Lock } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = '59893350714';

function DiagnosticForm() {
  const [form, setForm] = useState({
    nombre: '',
    whatsapp: '',
    zona: '',
    tipoVivienda: '',
    facturaUTE: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje =
      `Hola, quiero solicitar un diagnóstico gratuito de energía solar.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Zona:* ${form.zona}\n` +
      `*Tipo de vivienda:* ${form.tipoVivienda}\n` +
      `*Monto factura UTE:* $${form.facturaUTE}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
      {/* Header */}
      <h3 className="text-xl font-bold text-navy text-center mb-4">
        Solicitá tu diagnóstico gratuito
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Nombre */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </span>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre y apellido"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          />
        </div>



        {/* Zona */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <input
            type="text"
            name="zona"
            placeholder="Zona o ciudad (ej: Montevideo)"
            value={form.zona}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          />
        </div>

        {/* Tipo */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
            </svg>
          </span>
          <select
            name="tipoVivienda"
            value={form.tipoVivienda}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy bg-white appearance-none"
          >
            <option value="" disabled>Tipo (Vivienda o Empresa)</option>
            <option value="Vivienda">Vivienda</option>
            <option value="Empresa">Empresa</option>
          </select>
        </div>

        {/* Monto factura UTE */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">$</span>
          <input
            type="number"
            name="facturaUTE"
            placeholder="Monto aproximado de tu factura UTE"
            value={form.facturaUTE}
            onChange={handleChange}
            required
            min="0"
            className="w-full border border-gray-200 rounded-lg pl-7 pr-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-dark transition-colors text-sm mt-1"
        >
          Enviar solicitud
          <ArrowRight size={16} />
        </button>

        {/* Privacy note */}
        <p className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1">
          <Lock size={11} />
          No compartimos tu información.{' '}
          <a href="#" className="underline hover:text-gray-600">Ver más</a>
        </p>
      </form>
    </div>
  );
}

export default DiagnosticForm;
