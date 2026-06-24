import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqsCasas = [
  {
    question: '¿Necesito un techo especial para instalar paneles?',
    answer:
      'No necesariamente. Evaluamos la orientación, inclinación, superficie disponible y posibles sombras para determinar la viabilidad de la instalación. En general, los techos planos o con buena orientación hacia el norte suelen ser los más favorables.',
  },
  {
    question: '¿Los paneles funcionan en días nublados?',
    answer:
      'Sí, los paneles siguen generando energía en días nublados, aunque producen menos que en días soleados. El sistema se analiza considerando el comportamiento anual, no solamente un día puntual.',
  },
  {
    question: '¿Vale la pena instalar paneles si no estoy todo el día en casa?',
    answer:
      'Sí, puede valer la pena. Justamente, si durante el día consume poca energía, su casa puede estar generando mientras no está. Luego se analiza cómo aprovechar esa producción según su consumo, tarifa y el tipo de instalación más conveniente.',
  },
  {
    question: '¿Tengo que cambiar toda la instalación eléctrica de mi casa?',
    answer:
      'Normalmente, no. En muchos casos se puede integrar el sistema solar a la instalación existente, pero antes se revisan las condiciones eléctricas para asegurar que la solución sea segura y adecuada.',
  },
  {
    question: '¿Qué pasa con los trámites ante UTE?',
    answer:
      'Nos encargamos de toda la gestión ante UTE, incluyendo la solicitud de conexión, inspección y habilitación del sistema. No deberá realizar ningún trámite por su cuenta.',
  },
];

const faqsEmpresas = [
  {
    question: '¿Una empresa puede ahorrar con energía solar?',
    answer:
      'Sí, especialmente si tiene consumo eléctrico elevado durante el día. Comercios, industrias, oficinas, estaciones de servicio, depósitos, supermercados y otros negocios pueden tener buen potencial de ahorro si el consumo y el espacio disponible acompañan.',
  },
  {
    question: '¿Qué tipo de empresas son más adecuadas para instalar paneles solares?',
    answer:
      'Las empresas con consumo eléctrico constante, techos disponibles y facturas relevantes suelen ser buenas candidatas. También es interesante para negocios que buscan reducir costos operativos y aumentar margen.',
  },
  {
    question: '¿Puedo instalar paneles en un techo industrial o comercial?',
    answer:
      'Sí, siempre que la estructura sea apta y tenga espacio suficiente. Se evalúan aspectos como resistencia del techo, orientación, inclinación, sombras, accesos y seguridad de instalación.',
  },
  {
    question: '¿Puedo monitorear el funcionamiento del sistema?',
    answer:
      'Sí. Vas a poder ver la generación de tus paneles en tiempo real desde una app en tu celular. Además, nosotros también nos encargamos del seguimiento del sistema para acompañarte en la postventa y asegurar su correcto funcionamiento.',
  },
  {
    question: '¿Existen beneficios fiscales o incentivos para empresas?',
    answer:
      'Sí. Nuestro servicio incluye el apoyo de una contadora especializada para evaluar y postular el proyecto a posibles beneficios fiscales, además de la revisión anual del cumplimiento correspondiente.',
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-navy font-semibold text-sm sm:text-base leading-snug">{question}</span>
        <ChevronDown
          size={18}
          className={`text-orange flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function FAQColumn({ title, faqs }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-orange text-xs font-black tracking-widest uppercase">{title}</span>
        <div className="flex-1 h-px bg-orange/20" />
      </div>
      <div className="bg-gray-50 rounded-2xl px-6 divide-y divide-gray-100 flex-1">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="text-navy text-3xl sm:text-4xl font-extrabold leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Las dudas más comunes antes de dar el primer paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FAQColumn title="Casas" faqs={faqsCasas} />
          <FAQColumn title="Empresas" faqs={faqsEmpresas} />
        </div>
      </div>
    </section>
  );
}
