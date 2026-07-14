const plans = [
  {
    name: 'Starter',
    price: '0',
    description: 'Ideal para proyectos pequeños y startups',
    features: [
      'Hasta 3 cuentas cloud',
      'Dashboards básicos',
      'Alertas por email',
      'Datos de los últimos 30 días',
      'Soporte por comunidad',
    ],
    cta: 'Comenzar gratis',
    popular: false,
  },
  {
    name: 'Pro',
    price: '49',
    description: 'Para equipos en crecimiento',
    features: [
      'Cuentas cloud ilimitadas',
      'Dashboards avanzados',
      'Alertas en tiempo real',
      'Datos de los últimos 12 meses',
      'Reportes personalizados',
      'Integración con Slack & Teams',
      'Soporte prioritario',
    ],
    cta: 'Prueba 14 días gratis',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'Para grandes organizaciones',
    features: [
      'Todo lo de Pro',
      'SSO y SAML',
      'Roles y permisos avanzados',
      'Datos históricos ilimitados',
      'API dedicada',
      'SLA garantizado',
      'Soporte 24/7 dedicado',
      'Onboarding personalizado',
    ],
    cta: 'Contactar ventas',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Planes simples y <span className="gradient-text">transparentes</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sin sorpresas. Sin costos ocultos. Elige el plan que mejor se adapte a tus necesidades.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border ${
              plan.popular
                ? 'bg-gradient-to-b from-primary-500/10 to-dark-800 border-primary-500/50'
                : 'bg-dark-800 border-white/5'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-500 rounded-full text-sm font-medium">
                Más popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-400">/mes</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-primary-500 hover:bg-primary-600'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
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