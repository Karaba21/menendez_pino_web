import { Clock, ShieldCheck, BadgeCheck, Upload, ChevronDown, ArrowRight, Lock } from 'lucide-react';
import { useState } from 'react';

const zonas = [
  'Montevideo', 'Canelones', 'Maldonado', 'Colonia', 'San José',
  'Salto', 'Paysandú', 'Rivera', 'Tacuarembó', 'Otro',
];

const tiposVivienda = [
  'Casa individual', 'Apartamento', 'Casa en condominio', 'Chacra / Campo', 'Local comercial',
];

function DiagnosticForm() {
  const [form, setForm] = useState({
    nombre: '',
    whatsapp: '',
    zona: '',
    archivo: null,
    tipoVivienda: '',
  });
  const [fileName, setFileName] = useState('Ningún archivo seleccionado');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, archivo: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual only - no backend
    alert('¡Solicitud recibida! Nos contactaremos en 24 horas hábiles.');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
      {/* Header */}
      <h3 className="text-xl font-bold text-navy text-center mb-1">
        Solicitá tu diagnóstico gratuito
      </h3>
      <p className="text-sm text-gray-500 text-center mb-4">
        Completá tus datos y analizamos tu casa.
      </p>

      {/* Trust badges */}
      <div className="flex justify-around mb-5 border-b pb-4 border-gray-100">
        <div className="flex flex-col items-center gap-1">
          <Clock size={20} className="text-navy" />
          <span className="text-[10px] text-gray-600 font-medium text-center leading-tight">
            Diagnóstico en<br />24 horas hábiles
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <BadgeCheck size={20} className="text-navy" />
          <span className="text-[10px] text-gray-600 font-medium text-center leading-tight">
            Sin costo
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ShieldCheck size={20} className="text-navy" />
          <span className="text-[10px] text-gray-600 font-medium text-center leading-tight">
            Tus datos están<br />protegidos
          </span>
        </div>
      </div>

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

        {/* WhatsApp */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            value={form.whatsapp}
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
          <select
            name="zona"
            value={form.zona}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg pl-9 pr-8 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy appearance-none bg-white"
          >
            <option value="" disabled>Zona</option>
            {zonas.map((z) => (
              <option key={z} value={z}>{z}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Factura UTE */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Factura de UTE (subí tu última factura)
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="border border-gray-300 bg-gray-50 text-xs text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-1.5">
              <Upload size={13} />
              Seleccionar archivo
            </span>
            <span className="text-xs text-gray-400 truncate">{fileName}</span>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFile}
              className="hidden"
            />
          </label>
        </div>

        {/* Tipo de vivienda */}
        <div className="relative">
          <select
            name="tipoVivienda"
            value={form.tipoVivienda}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-lg pl-3 pr-8 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy appearance-none bg-white"
          >
            <option value="" disabled>Tipo de vivienda — Seleccioná una opción</option>
            {tiposVivienda.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
