const steps = [
  {
    number: '01',
    title: 'Conecta tus cuentas',
    description: 'Integra AWS, Azure o Google Cloud en minutos con nuestra configuración sin código.',
  },
  {
    number: '02',
    title: 'Configura tus preferencias',
    description: 'Define presupuestos, umbrales de alerta y las métricas que quieres monitorear.',
  },
  {
    number: '03',
    title: 'Analiza y optimiza',
    description: 'Recibe insights accionables y recomendaciones para reducir tus costos.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Empieza en <span className="gradient-text">3 pasos simples</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Configurar InfraEye es rápido y sencillo. Sin complicaciones, sin código.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="text-6xl font-bold text-dark-700 mb-4">{step.number}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-32 h-px bg-gradient-to-r from-primary-500 to-transparent" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-dark-800 rounded-2xl border border-white/5 p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5 min</div>
            <p className="text-gray-400">Tiempo promedio de configuración</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <p className="text-gray-400">Datos seguros y encriptados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <p className="text-gray-400">Costos ocultos o sorpresas</p>
          </div>
        </div>
      </div>
    </section>
  )
}