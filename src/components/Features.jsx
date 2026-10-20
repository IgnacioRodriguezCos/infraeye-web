const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Detección de anomalías con ML',
    description: 'El algoritmo Isolation Forest analiza las métricas de CPU, RAM y disco para identificar instancias sobredimensionadas, ociosas o con patrones de uso ineficientes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3 3 0 0116.5 19.4H7.5a3 3 0 01-2.122-.883l-.548-.547z" />
      </svg>
    ),
    title: 'Recomendaciones accionables',
    description: 'Rightsizing, eliminación de recursos ociosos y ajuste de configuraciones, con los datos que justifican cada recomendación.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Infraestructura como Código',
    description: 'Las recomendaciones se materializan en una versión optimizada de tu infraestructura en Terraform, lista para revisar, versionar e integrar a tus procesos DevOps.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: 'Sin agentes de terceros',
    description: 'Obtenemos la información directamente desde las APIs del proveedor cloud, sin instalar componentes adicionales en tus entornos productivos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Vos mantenés el control',
    description: 'El sistema propone, explica y espera tu aprobación: ningún cambio se aplica a tu infraestructura sin tu revisión explícita.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Historial y reportes',
    description: 'Consultá el historial de análisis y recomendaciones, y exportá informes para compartir los hallazgos con tu equipo.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Todo lo que necesitás para <span className="gradient-text">optimizar tus recursos</span>
        </h2>
        <p className="text-cloud-muted max-w-2xl mx-auto">
          Una plataforma especializada en detectar recursos mal dimensionados y convertirlos en acciones concretas, pensada para administradores de infraestructura y equipos DevOps.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 bg-navy-700 rounded-2xl border border-brand overflow-hidden transition-all duration-300 hover:border-primary-500/40 hover:-translate-y-1 hover:shadow-card group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/25 rounded-xl flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-cloud-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
