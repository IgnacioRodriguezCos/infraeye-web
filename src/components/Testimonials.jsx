const testimonials = [
  {
    quote: 'InfraEye nos ayudó a reducir nuestros costos de AWS en un 35% en solo 3 meses. Las alertas automáticas son fundamentales para nuestro equipo.',
    author: 'María González',
    role: 'CTO en TechStart',
    avatar: 'MG',
  },
  {
    quote: 'Antes teníamos visibilidad cero de nuestros gastos cloud. Ahora tenemos dashboards claros y podemos tomar decisiones informadas.',
    author: 'Carlos Ruiz',
    role: 'DevOps Lead en FinanceApp',
    avatar: 'CR',
  },
  {
    quote: 'La integración con Azure fue instantánea. En 10 minutos ya teníamos todos nuestros servicios monitoreados.',
    author: 'Ana Martínez',
    role: 'Engineering Manager en ScaleUp',
    avatar: 'AM',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Lo que dicen nuestros <span className="gradient-text">clientes</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Empresas de todos los tamaños confían en InfraEye para controlar sus costos cloud.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-dark-800 rounded-2xl border border-white/5"
          >
            <svg className="w-10 h-10 text-primary-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-300 mb-6">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 font-semibold">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}