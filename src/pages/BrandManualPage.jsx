export default function BrandManualPage() {
  const primaryColors = [
    { name: 'Primary 50', hex: '#E6FDF4', usage: 'Fondo muy claro con tinte menta' },
    { name: 'Primary 100', hex: '#C3F9E4', usage: 'Fondo claro' },
    { name: 'Primary 200', hex: '#8DF2CD', usage: 'Bordes claros' },
    { name: 'Primary 300', hex: '#4AE9B2', usage: 'Acento claro' },
    { name: 'Primary 400', hex: '#05F29B', usage: 'Iconos y texto destacado' },
    { name: 'Primary 500', hex: '#03C098', usage: 'Color principal de la marca (botones, enlaces)' },
    { name: 'Primary 600', hex: '#038C5A', usage: 'Hover states' },
    { name: 'Primary 700', hex: '#078279', usage: 'Teal de acento' },
    { name: 'Primary 800', hex: '#055E56', usage: 'Variantes más oscuras' },
    { name: 'Primary 900', hex: '#043D39', usage: 'Más oscuro' },
  ]

  const navyColors = [
    { name: 'Navy 900', hex: '#071F38', usage: 'Fondo de navbar y footer' },
    { name: 'Navy 800', hex: '#0B2E4F', usage: 'Fondo principal de la página' },
    { name: 'Navy 700', hex: '#0E3659', usage: 'Cards y contenedores' },
    { name: 'Navy 600', hex: '#124469', usage: 'Superficies hover' },
    { name: 'Navy 500', hex: '#164A78', usage: 'Variantes más claras' },
  ]

  const mintColors = [
    { name: 'Mint', hex: '#00FFB8', usage: 'Acento brillante, indicadores, glows' },
    { name: 'Mint Bright', hex: '#05F29B', usage: 'Éxito, estados positivos' },
  ]

  const stateColors = [
    { name: 'Success', hex: '#05F29B', usage: 'Indicadores positivos, éxito' },
    { name: 'Warning', hex: '#FFC857', usage: 'Advertencias, estados pendientes' },
    { name: 'Critical', hex: '#FF6B6B', usage: 'Alertas, errores, anomalías' },
    { name: 'High', hex: '#FF8A5C', usage: 'Severidad alta' },
  ]

  const textColors = [
    { name: 'Cloud', hex: '#F4F8FB', usage: 'Títulos, texto principal' },
    { name: 'Cloud Muted', hex: '#9FBED6', usage: 'Texto secundario' },
    { name: 'Cloud Tertiary', hex: '#6E93B4', usage: 'Texto terciario, placeholders' },
  ]

  const brandOpacities = [
    { name: 'Mint 10%', hex: 'rgba(0, 255, 184, 0.10)', usage: 'Bordes de cards (border-brand)' },
    { name: 'Mint 18%', hex: 'rgba(0, 255, 184, 0.18)', usage: 'Bordes hover' },
    { name: 'Mint 25%', hex: 'rgba(0, 255, 184, 0.25)', usage: 'Bordes de iconos y logo' },
    { name: 'Primary 10%', hex: 'rgba(3, 192, 152, 0.10)', usage: 'Fondos de iconos y badges' },
    { name: 'Primary 35%', hex: 'rgba(3, 192, 152, 0.35)', usage: 'Glow de botones y scrollbar' },
    { name: 'Primary 14%', hex: 'rgba(3, 192, 152, 0.14)', usage: 'Radial glow de fondo' },
  ]

  const gradients = [
    {
      name: 'Gradiente Principal',
      from: '#00FFB8',
      to: '#078279',
      usage: 'Texto destacado, botones primarios, logo',
      css: 'linear-gradient(135deg, #00FFB8 0%, #05F29B 35%, #03C098 70%, #078279 100%)'
    },
    {
      name: 'CTA Gradiente',
      from: '#03C098',
      to: '#078279',
      usage: 'Call to action sections',
      css: 'linear-gradient(to right, #03C098, #078279)'
    },
  ]

  const ColorCard = ({ name, hex, usage }) => (
    <div className="bg-navy-700 rounded-xl p-4 border border-brand">
      <div
        className="w-full h-20 rounded-lg mb-3"
        style={{ backgroundColor: hex }}
      />
      <h4 className="font-semibold text-cloud mb-1">{name}</h4>
      <p className="text-sm text-primary-400 font-mono mb-2">{hex}</p>
      <p className="text-xs text-cloud-muted">{usage}</p>
    </div>
  )

  const GradientCard = ({ name, from, to, usage, css }) => (
    <div className="bg-navy-700 rounded-xl p-4 border border-brand">
      <div
        className="w-full h-20 rounded-lg mb-3"
        style={{ background: css }}
      />
      <h4 className="font-semibold text-cloud mb-1">{name}</h4>
      <p className="text-sm text-primary-400 font-mono mb-1">{from} → {to}</p>
      <p className="text-xs text-cloud-tertiary font-mono mb-2 break-all">{css}</p>
      <p className="text-xs text-cloud-muted">{usage}</p>
    </div>
  )

  return (
    <div className="min-h-screen text-cloud py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Manual de <span className="gradient-text">Marca</span>
          </h1>
          <p className="text-cloud-muted text-lg max-w-2xl mx-auto">
            Guía completa de colores y estilos visuales de InfraEye
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-2">Color Principal - Primary (Menta / Teal)</h2>
            <p className="text-cloud-muted mb-8">
              Paleta de colores principales de la marca. Primary 500 (#03C098) es el color base.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {primaryColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Colores de Fondo - Navy</h2>
            <p className="text-cloud-muted mb-8">
              Paleta navy para fondos y superficies, con glows radiales menta sobre Navy 800.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {navyColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Acentos - Mint</h2>
            <p className="text-cloud-muted mb-8">
              Acentos brillantes de la marca para indicadores, glows y estados positivos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mintColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Gradientes</h2>
            <p className="text-cloud-muted mb-8">
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
            <p className="text-cloud-muted mb-8">
              Colores para indicar estados, alertas y severidad de anomalías.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {stateColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Texto y Neutros</h2>
            <p className="text-cloud-muted mb-8">
              Colores de texto sobre fondos navy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {textColors.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Opacidades de Marca</h2>
            <p className="text-cloud-muted mb-8">
              Variaciones de opacidad de menta y primary para bordes, fondos y glows.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {brandOpacities.map((color) => (
                <ColorCard key={color.name} {...color} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Tipografía</h2>
            <p className="text-cloud-muted mb-8">
              Configuración de fuentes y estilos de texto.
            </p>
            <div className="bg-navy-700 rounded-xl p-8 border border-brand">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Font Families</h3>
                  <p className="text-primary-400 font-mono">Inter, system-ui, sans-serif</p>
                  <p className="text-cloud-muted text-sm mt-1">
                    Fuente principal importada de Google Fonts
                  </p>
                  <p className="text-primary-400 font-mono mt-3">JetBrains Mono, monospace</p>
                  <p className="text-cloud-muted text-sm mt-1">
                    Fuente monoespaciada para métricas, números y terminales
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Jerarquía de Texto</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Título H1</span>
                      <span className="text-cloud-tertiary text-sm">text-4xl/5xl/6xl font-extrabold tracking-tight</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl sm:text-4xl font-bold">Título H2</span>
                      <span className="text-cloud-tertiary text-sm">text-3xl/4xl font-bold</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl font-semibold">Título H3</span>
                      <span className="text-cloud-tertiary text-sm">text-xl font-semibold</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-lg text-cloud-muted">Texto cuerpo</span>
                      <span className="text-cloud-tertiary text-sm">text-lg text-cloud-muted</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm text-cloud-tertiary">Texto pequeño</span>
                      <span className="text-cloud-tertiary text-sm">text-sm text-cloud-tertiary</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Texto con Gradiente</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">
                    Ejemplo de texto con gradiente
                  </p>
                  <p className="text-cloud-tertiary text-sm font-mono">
                    className="gradient-text"
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-2">Ejemplos de Uso</h2>
            <p className="text-cloud-muted mb-8">
              Ejemplos prácticos de cómo aplicar los colores en componentes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-navy-700 rounded-xl p-6 border border-brand">
                <h3 className="text-xl font-semibold mb-4">Botones</h3>
                <div className="space-y-4">
                  <button className="w-full px-6 py-3 bg-brand-gradient text-navy-800 rounded-xl font-semibold shadow-glow-mint transition-all hover:brightness-110">
                    Botón Principal
                  </button>
                  <button className="w-full px-6 py-3 bg-cloud/5 hover:bg-mint/10 border border-mint/20 hover:border-mint/40 rounded-xl font-semibold transition-all">
                    Botón Secundario
                  </button>
                  <button className="w-full px-6 py-3 bg-cta-gradient text-white rounded-xl font-semibold transition-all">
                    Botón CTA
                  </button>
                </div>
              </div>

              <div className="bg-navy-700 rounded-xl p-6 border border-brand">
                <h3 className="text-xl font-semibold mb-4">Cards</h3>
                <div className="bg-navy-800 rounded-xl p-4 border border-brand">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/25 rounded-xl flex items-center justify-center text-primary-400 mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Card de Feature</h4>
                  <p className="text-cloud-muted text-sm">
                    Ejemplo de card con icono y contenido
                  </p>
                </div>
              </div>

              <div className="bg-navy-700 rounded-xl p-6 border border-brand">
                <h3 className="text-xl font-semibold mb-4">Indicadores de Estado</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-mint-bright shadow-[0_0_8px_#00FFB8]"></div>
                    <span className="text-cloud-muted">Estado positivo</span>
                    <span className="text-mint-bright">↓ 12%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-critical"></div>
                    <span className="text-cloud-muted">Estado negativo</span>
                    <span className="text-critical">↑ 8%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-warning"></div>
                    <span className="text-cloud-muted">Estado de advertencia</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-700 rounded-xl p-6 border border-brand">
                <h3 className="text-xl font-semibold mb-4">Métricas (JetBrains Mono)</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-primary-400">CPU</span>
                    <span className="text-cloud-muted">42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-300">RAM</span>
                    <span className="text-cloud-muted">68%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-warning">Disco</span>
                    <span className="text-cloud-muted">31%</span>
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
