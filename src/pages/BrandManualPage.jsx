export default function BrandManualPage() {
  const primaryColors = [
    { name: 'Primary 50', hex: '#f0f9ff', usage: 'Fondo muy claro' },
    { name: 'Primary 100', hex: '#e0f2fe', usage: 'Fondo claro' },
    { name: 'Primary 200', hex: '#bae6fd', usage: 'Bordes claros' },
    { name: 'Primary 300', hex: '#7dd3fc', usage: 'Acento claro' },
    { name: 'Primary 400', hex: '#38bdf8', usage: 'Iconos y texto destacado' },
    { name: 'Primary 500', hex: '#0ea5e9', usage: 'Color principal de la marca (botones, enlaces)' },
    { name: 'Primary 600', hex: '#0284c7', usage: 'Hover states' },
    { name: 'Primary 700', hex: '#0369a1', usage: 'Variantes más oscuras' },
    { name: 'Primary 800', hex: '#075985', usage: 'Usado en gradiente' },
    { name: 'Primary 900', hex: '#0c4a6e', usage: 'Más oscuro' },
  ]

  const darkColors = [
    { name: 'Dark 900', hex: '#0f172a', usage: 'Fondo principal de la página' },
    { name: 'Dark 800', hex: '#1e293b', usage: 'Cards y contenedores' },
    { name: 'Dark 700', hex: '#334155', usage: 'Variantes más claras' },
  ]

  const stateColors = [
    { name: 'Green 400', hex: '#4ade80', usage: 'Indicadores positivos, éxito' },
    { name: 'Green 500', hex: '#22c55e', usage: 'Indicadores positivos' },
    { name: 'Red 400', hex: '#f87171', usage: 'Alertas, errores, incrementos' },
    { name: 'Red 500', hex: '#ef4444', usage: 'Errores críticos' },
    { name: 'Yellow 400', hex: '#facc15', usage: 'Advertencias, GCP' },
    { name: 'Yellow 500', hex: '#eab308', usage: 'Advertencias' },
    { name: 'Blue 400', hex: '#60a5fa', usage: 'Azure brand' },
  ]

  const purpleColors = [
    { name: 'Purple 500', hex: '#8b5cf6', usage: 'Usado en gradiente de texto' },
    { name: 'Purple 600', hex: '#9333ea', usage: 'Usado en gradiente CTA' },
  ]

  const grayColors = [
    { name: 'Gray 400', hex: '#9ca3af', usage: 'Texto secundario' },
    { name: 'Gray 500', hex: '#6b7280', usage: 'Texto terciario' },
    { name: 'White', hex: '#ffffff', usage: 'Títulos, texto principal' },
  ]

  const whiteOpacities = [
    { name: 'White 5%', hex: 'rgba(255, 255, 255, 0.05)', usage: 'Bordes sutiles' },
    { name: 'White 10%', hex: 'rgba(255, 255, 255, 0.10)', usage: 'Fondos de contenedores' },
    { name: 'White 20%', hex: 'rgba(255, 255, 255, 0.20)', usage: 'Bordes hover' },
    { name: 'White 40%', hex: 'rgba(255, 255, 255, 0.40)', usage: 'Bordes focus' },
    { name: 'White 50%', hex: 'rgba(255, 255, 255, 0.50)', usage: 'Placeholder text' },
    { name: 'White 80%', hex: 'rgba(255, 255, 255, 0.80)', usage: 'Texto en CTA' },
  ]

  const gradients = [
    { 
      name: 'Gradiente Principal', 
      from: '#0ea5e9', 
      to: '#8b5cf6', 
      usage: 'Texto destacado, logo',
      css: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)'
    },
    { 
      name: 'CTA Gradiente', 
      from: '#0284c7', 
      to: '#9333ea', 
      usage: 'Call to action sections',
      css: 'linear-gradient(to right, #0284c7, #9333ea)'
    },
  ]

  const ColorCard = ({ name, hex, usage }) => (
    <div className="bg-dark-800 rounded-xl p-4 border border-white/5">
      <div 
        className="w-full h-20 rounded-lg mb-3"
        style={{ backgroundColor: hex }}
      />
      <h4 className="font-semibold text-white mb-1">{name}</h4>
      <p className="text-sm text-primary-400 font-mono mb-2">{hex}</p>
      <p className="text-xs text-gray-400">{usage}</p>
    </div>
  )

  const GradientCard = ({ name, from, to, usage, css }) => (
    <div className="bg-dark-800 rounded-xl p-4 border border-white/5">
      <div 
        className="w-full h-20 rounded-lg mb-3"
        style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
      />
      <h4 className="font-semibold text-white mb-1">{name}</h4>
      <p className="text-sm text-primary-400 font-mono mb-1">{from} → {to}</p>
      <p className="text-xs text-gray-500 font-mono mb-2 break-all">{css}</p>
      <p className="text-xs text-gray-400">{usage}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-dark-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Manual de <span className="gradient-text">Marca</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guía completa de colores y estilos visuales de InfraEye
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-2">Color Principal - Primary (Azul)</h2>
            <p className="text-gray-400 mb-8">
              Paleta de colores principales de la marca. Primary 500 es el color base.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {primaryColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Colores de Fondo - Dark</h2>
            <p className="text-gray-400 mb-8">
              Paleta de colores para fondos y superficies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {darkColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Gradientes</h2>
            <p className="text-gray-400 mb-8">
              Gradientes utilizados para crear impacto visual y destacar elementos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gradients.map((gradient) => (
                <GradientCard key={gradient.name} {...gradient} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Colores de Estado</h2>
            <p className="text-gray-400 mb-8">
              Colores para indicar estados, alertas y proveedores cloud.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stateColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Púrpura</h2>
            <p className="text-gray-400 mb-8">
              Colores púrpura usados en gradientes y acentos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {purpleColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Grises y Neutros</h2>
            <p className="text-gray-400 mb-8">
              Colores neutros para texto y elementos secundarios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {grayColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Opacidades de Blanco</h2>
            <p className="text-gray-400 mb-8">
              Variaciones de opacidad del color blanco para diferentes usos.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {whiteOpacities.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Tipografía</h2>
            <p className="text-gray-400 mb-8">
              Configuración de fuentes y estilos de texto.
            </p>
            <div className="bg-dark-800 rounded-xl p-8 border border-white/5">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Font Family</h3>
                  <p className="text-primary-400 font-mono">Inter, system-ui, sans-serif</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Fuente principal importada de Google Fonts
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Jerarquía de Texto</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">Título H1</span>
                      <span className="text-gray-500 text-sm">text-4xl/5xl/6xl font-bold</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl sm:text-4xl font-bold">Título H2</span>
                      <span className="text-gray-500 text-sm">text-3xl/4xl font-bold</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl font-semibold">Título H3</span>
                      <span className="text-gray-500 text-sm">text-xl font-semibold</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-lg text-gray-400">Texto cuerpo</span>
                      <span className="text-gray-500 text-sm">text-lg text-gray-400</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm text-gray-500">Texto pequeño</span>
                      <span className="text-gray-500 text-sm">text-sm text-gray-500</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Texto con Gradiente</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">
                    Ejemplo de texto con gradiente
                  </p>
                  <p className="text-gray-500 text-sm font-mono">
                    className="gradient-text"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Ejemplos de Uso</h2>
            <p className="text-gray-400 mb-8">
              Ejemplos prácticos de cómo aplicar los colores en componentes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-800 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold mb-4">Botones</h3>
                <div className="space-y-4">
                  <button className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-xl font-semibold transition-all">
                    Botón Principal
                  </button>
                  <button className="w-full px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold transition-all">
                    Botón Secundario
                  </button>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-semibold transition-all">
                    Botón con Gradiente
                  </button>
                </div>
              </div>

              <div className="bg-dark-800 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold mb-4">Cards</h3>
                <div className="bg-dark-900 rounded-xl p-4 border border-white/5">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Card de Feature</h4>
                  <p className="text-gray-400 text-sm">
                    Ejemplo de card con icono y contenido
                  </p>
                </div>
              </div>

              <div className="bg-dark-800 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold mb-4">Indicadores de Estado</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-gray-400">Estado positivo</span>
                    <span className="text-green-400">↓ 12%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <span className="text-gray-400">Estado negativo</span>
                    <span className="text-red-400">↑ 8%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <span className="text-gray-400">Estado de advertencia</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-xl p-6 border border-white/5">
                <h3 className="text-xl font-semibold mb-4">Proveedores Cloud</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-400">AWS</span>
                    <span className="text-gray-400">$12,450.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400">Azure</span>
                    <span className="text-gray-400">$8,230.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400">GCP</span>
                    <span className="text-gray-400">$4,120.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
