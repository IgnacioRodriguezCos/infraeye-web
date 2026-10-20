const steps = [
  {
    number: '01',
    title: 'Conectá tu cuenta',
    description: 'Vinculá tu cuenta de Huawei Cloud en minutos. Sin agentes de terceros: la información se obtiene directamente desde las APIs del proveedor.',
  },
  {
    number: '02',
    title: 'Análisis inteligente',
    description: 'Isolation Forest analiza las métricas de utilización de CPU, RAM y disco, y detecta recursos mal dimensionados y comportamientos anómalos.',
  },
  {
    number: '03',
    title: 'Revisá y aplicá',
    description: 'Recibí recomendaciones explicables junto con el código Terraform optimizado. Ningún cambio se aplica sin tu aprobación.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Empieza en <span className="gradient-text">3 pasos simples</span>
        </h2>
        <p className="text-cloud-muted max-w-2xl mx-auto">
          De la observación a la acción: un flujo que combina análisis de utilización, detección de ineficiencias y generación de recomendaciones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="text-6xl font-bold font-mono text-navy-600 mb-4">{step.number}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-cloud-muted">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-32 h-px bg-gradient-to-r from-primary-500 to-transparent" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-navy-700 rounded-2xl border border-brand p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold font-mono gradient-text mb-2">5 min</div>
            <p className="text-cloud-muted">Para conectar tu cuenta y obtener el primer análisis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-mono gradient-text mb-2">100%</div>
            <p className="text-cloud-muted">De los cambios sujetos a tu revisión y aprobación</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-mono gradient-text mb-2">0</div>
            <p className="text-cloud-muted">Agentes de terceros sobre tu infraestructura</p>
          </div>
        </div>
      </div>
    </section>
  )
}
