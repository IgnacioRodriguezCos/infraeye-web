export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/25 rounded-full mb-8">
          <span className="w-2 h-2 bg-mint rounded-full shadow-[0_0_8px_#00FFB8] animate-pulse-dot"></span>
          <span className="text-sm text-primary-400">Monitoreo y optimización cloud</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Optimizá tu infraestructura cloud
          <br />
          <span className="gradient-text">con machine learning</span>
        </h1>

        <p className="text-lg sm:text-xl text-cloud-muted max-w-2xl mx-auto mb-10">
          InfraEye detecta recursos mal dimensionados con el algoritmo Isolation Forest, genera recomendaciones de optimización y las traduce a código Terraform para que reduzcas costos sin perder el control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-brand-gradient text-navy-800 rounded-xl font-semibold text-lg shadow-glow-mint transition-all hover:-translate-y-0.5 hover:shadow-glow-mint-lg hover:brightness-110"
          >
            Empezar gratis
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-cloud/5 hover:bg-mint/10 border border-mint/20 hover:border-mint/40 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5"
          >
            Cómo funciona
          </a>
        </div>
      </div>
    </section>
  )
}
