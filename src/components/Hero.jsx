export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-primary-400">Monitoreo en tiempo real</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Controla tus costos
          <br />
          <span className="gradient-text">sin perder visibilidad</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          InfraEye te ayuda a monitorear, analizar y optimizar los costos de tu infraestructura cloud en AWS, Azure y Google Cloud.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Prueba gratis
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition-all"
          >
            Ver demo
          </a>
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-dark-800 rounded-2xl border border-white/10 p-4 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="bg-dark-900 rounded-xl p-6 font-mono text-sm">
              <p className="text-gray-500 mb-4">// Resumen de costos este mes</p>
              <div className="space-y-2">
                <p><span className="text-primary-400">AWS</span> <span className="text-gray-400">$12,450.00</span> <span className="text-red-400">↑ 8%</span></p>
                <p><span className="text-blue-400">Azure</span> <span className="text-gray-400">$8,230.00</span> <span className="text-green-400">↓ 3%</span></p>
                <p><span className="text-yellow-400">GCP</span> <span className="text-gray-400">$4,120.00</span> <span className="text-green-400">↓ 12%</span></p>
                <p className="pt-2 border-t border-white/10 mt-4">
                  <span className="text-gray-400">Total estimado:</span> <span className="text-white font-bold">$24,800.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold gradient-text">98%</div>
          <div className="text-gray-400 mt-1">Precisión en datos</div>
        </div>
        <div>
          <div className="text-3xl font-bold gradient-text">50K+</div>
          <div className="text-gray-400 mt-1">Recursos monitoreados</div>
        </div>
        <div>
          <div className="text-3xl font-bold gradient-text">30%</div>
          <div className="text-gray-400 mt-1">Ahorro promedio</div>
        </div>
        <div>
          <div className="text-3xl font-bold gradient-text">24/7</div>
          <div className="text-gray-400 mt-1">Monitoreo continuo</div>
        </div>
      </div>
    </section>
  )
}