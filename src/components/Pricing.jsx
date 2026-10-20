const plans = [
  {
    name: 'Freemium',
    price: '0',
    description: 'Para evaluar la plataforma sin inversión',
    features: [
      '1 cuenta cloud',
      'Hasta 3 recursos',
      'Durante 60 días',
      'Recomendaciones básicas',
    ],
    cta: 'Empezar gratis',
    popular: false,
  },
  {
    name: 'Starter',
    price: '10',
    description: 'Para pequeñas y medianas empresas',
    features: [
      'Hasta 10 recursos cloud',
      'Análisis ilimitados',
      'Historial de recomendaciones',
      'Generación de Terraform optimizado',
    ],
    cta: 'Elegir Starter',
    popular: false,
  },
  {
    name: 'Professional',
    price: '50',
    description: 'Para infraestructuras en crecimiento',
    features: [
      'Todo lo de Starter',
      'Hasta 25 recursos cloud',
      'Exportación de informes',
      'Análisis programados automáticos',
      'Estadísticas históricas de utilización',
    ],
    cta: 'Elegir Professional',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Para grandes organizaciones',
    features: [
      'Recursos ilimitados',
      'Múltiples proyectos y organizaciones',
      'Acceso mediante API',
      'Soporte técnico prioritario',
      'Auditoría avanzada',
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Planes simples y <span className="gradient-text">transparentes</span>
        </h2>
        <p className="text-cloud-muted max-w-2xl mx-auto">
          Empezá gratis y escalá a medida que crece tu infraestructura. Sin agentes que instalar y sin costos ocultos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
              plan.popular
                ? 'bg-navy-700 border-primary-500/50 shadow-glow-mint hover:-translate-y-1'
                : 'bg-navy-700 border-brand hover:border-brand-hover hover:-translate-y-1'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-gradient text-navy-800 rounded-full text-sm font-bold shadow-glow-mint">
                Más popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-cloud-muted text-sm">{plan.description}</p>
            </div>
            <div className="mb-6">
              {plan.price !== null ? (
                <>
                  <span className="text-4xl font-extrabold font-mono">${plan.price}</span>
                  <span className="text-cloud-muted">/mes</span>
                </>
              ) : (
                <span className="text-4xl font-extrabold font-mono">Custom</span>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-cloud-muted">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-brand-gradient text-navy-800 shadow-glow-mint hover:brightness-110 hover:-translate-y-0.5'
                  : 'bg-cloud/5 hover:bg-mint/10 border border-mint/20 hover:border-mint/40'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
