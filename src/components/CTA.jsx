export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-12 text-center">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Empieza a monitorear tus costos hoy
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Únete a más de 500 empresas que ya están optimizando su gasto cloud con InfraEye.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/40"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Solicitar demo
            </button>
          </form>
          <p className="text-sm text-white/60 mt-4">
            Sin tarjeta de crédito. Configuración en 5 minutos.
          </p>
        </div>

        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}