export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-cta-gradient rounded-3xl p-12 text-center">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Empezá a optimizar tu infraestructura hoy
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Conectá tu cuenta cloud y descubrí recursos ineficientes con el plan Freemium: hasta 3 recursos durante 60 días, sin tarjeta de crédito.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 bg-navy-900/30 border border-white/25 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-mint/60 focus:ring-2 focus:ring-mint/20 transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-navy-800 text-mint-bright font-semibold rounded-xl hover:bg-navy-900 transition-colors"
            >
              Crear cuenta gratis
            </button>
          </form>
          <p className="text-sm text-white/60 mt-4">
            Sin tarjeta de crédito. Sin agentes que instalar.
          </p>
        </div>

        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
