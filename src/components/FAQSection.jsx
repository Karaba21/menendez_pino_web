import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto cuesta un sistema solar fotovoltaico?',
    answer:
      'El costo depende del tamaño del sistema, que a su vez depende de tu consumo. Un sistema típico para un hogar uruguayo puede costar entre USD X.XXX y USD XX.XXX. En el diagnóstico gratuito te damos una estimación precisa para tu caso.',
  },
  {
    question: '¿En cuánto tiempo recupero la inversión?',
    answer:
      'El retorno promedio en Uruguay está entre 4 y 7 años, dependiendo del consumo, la tarifa y el tipo de sistema. En nuestro análisis calculamos el período de retorno específico para tu caso antes de que tomes ninguna decisión.',
  },
  {
    question: '¿Necesito un techo especial para instalar paneles?',
    answer:
      'No necesariamente. Evaluamos la orientación, inclinación y superficie disponible de tu techo para determinar si es viable. La mayoría de los techos planos o inclinados hacia el norte son aptos.',
  },
  {
    question: '¿Qué pasa con los trámites ante UTE?',
    answer:
      'Nos encargamos de toda la gestión: solicitud de conexión, inspección y habilitación. Vos no tenés que hacer ningún trámite de forma individual.',
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

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
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

        <div className="bg-gray-50 rounded-2xl px-6 divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
