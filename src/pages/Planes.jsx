import { Link } from 'react-router-dom'
import './Planes.css'

const PLANES = [
  {
    name: 'Básico',
    price: 60,
    features: ['Acceso al gimnasio', 'Uso de máquinas', 'Rutina básica'],
    missing: ['Clases grupales', 'Entrenador personal', 'Plan nutricional'],
    featured: false,
  },
  {
    name: 'Pro',
    price: 100,
    badge: '🔥 Más popular',
    features: ['Acceso al gimnasio', 'Uso de máquinas', 'Rutina personalizada', 'Clases grupales', 'Seguimiento mensual'],
    missing: ['Plan nutricional'],
    featured: true,
  },
  {
    name: 'Premium',
    price: 150,
    features: ['Acceso total VIP', 'Entrenador personal', 'Plan nutricional', 'Seguimiento semanal', 'Clases grupales', 'Acceso zona exclusiva'],
    missing: [],
    featured: false,
  },
]

export default function Planes() {
  return (
    <main>
      <section className="planes-hero">
        <div className="container planes-hero-inner">
          <span className="sec-tag light">Membresías</span>
          <h2 className="sec-h" style={{ color: '#fff' }}>Elige tu plan</h2>
          <p className="sec-sub">Sin contratos. Sin excusas. Solo resultados. 💪</p>

          <div className="plans-grid">
            {PLANES.map(({ name, price, badge, features, missing, featured }) => (
              <div key={name} className={`plan-card${featured ? ' featured' : ''}`}>
                {badge && <div className="plan-badge">{badge}</div>}
                <div className="plan-name">{name}</div>
                <div className="plan-price">
                  S/.{price}<span>/mes</span>
                </div>
                <ul className="plan-ul">
                  {features.map(f => (
                    <li key={f} className="plan-li included">
                      <i className="bi bi-check-circle-fill"></i>{f}
                    </li>
                  ))}
                  {missing.map(f => (
                    <li key={f} className="plan-li excluded">
                      <i className="bi bi-x-circle"></i>{f}
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className={`gym-btn plan-btn${featured ? '' : ' outline-dark'}`}>
                  Elegir plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="compare-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="sec-tag">¿Tienes dudas?</span>
          <h2 className="sec-h">Todos los planes incluyen</h2>
          <p className="sec-sub">Beneficios base para cualquier miembro de Power Flex</p>
          <div className="perks-grid">
            {[
              { icon: 'bi-wifi',             text: 'Vestidores y duchas' },
              { icon: 'bi-droplet-fill',     text: 'Agua purificada' },
              { icon: 'bi-music-note-beamed',text: 'Ambiente con música' },
              { icon: 'bi-shield-check',     text: 'Ambiente seguro' },
            ].map(({ icon, text }) => (
              <div key={text} className="perk-item">
                <i className={`bi ${icon}`}></i>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <Link to="/contacto" className="gym-btn" style={{ marginTop: 32, display: 'inline-block' }}>
            Hablar con un asesor
          </Link>
        </div>
      </section>
    </main>
  )
}