import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const BASE = import.meta.env.BASE_URL

const SLIDES = [
  { img: `${BASE}images/carrusel1.jpg`, title: 'EL TEMPLO DE', highlight: 'LA MUSCULACIÓN', sub: 'Transforma tu cuerpo. Supera tus límites.' },
  { img: `${BASE}images/carrusel2.jpg`, title: 'ENTRENA CON', highlight: 'PROPÓSITO', sub: 'Rutinas personalizadas. Resultados reales.' },
  { img: `${BASE}images/gym7.jpeg`, title: 'MONSEFÚ,', highlight: 'LAMBAYEQUE', sub: 'Tu gimnasio de confianza. Desde S/.19/mes.' },
]

function Hero() {
  const [cur, setCur] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setCur(c => (c + 1) % SLIDES.length), 4500)
    return () => clearInterval(t)
  }, [])
  const s = SLIDES[cur]
  return (
    <section className="hero">
      {SLIDES.map((sl, i) => (
        <div key={i} className={`hero-slide${i === cur ? ' on' : ''}`}
          style={{ backgroundImage: `url(${sl.img})` }} />
      ))}
      <div className="hero-overlay" />
      <div className="hero-caption container">
        <h1>{s.title}<br /><span>{s.highlight}</span></h1>
        <p>{s.sub}</p>
        <div className="hero-btns">
          <Link to="/planes" className="gym-btn">Ver planes</Link>
          <Link to="/contacto" className="gym-btn outline">Contáctanos</Link>
        </div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button key={i} className={`hdot${i === cur ? ' on' : ''}`} onClick={() => setCur(i)} aria-label={`Slide ${i+1}`} />
        ))}
      </div>
    </section>
  )
}


function useCounter(end, duration = 1400, started = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!started) return
    let frame = 0
    const total = Math.ceil(duration / 16)
    const t = setInterval(() => {
      frame++
      setVal(Math.round((frame / total) * end))
      if (frame >= total) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [end, duration, started])
  return val
}

const STATS = [
  { end: 500, suffix: '+', label: 'Miembros activos' },
  { end: 5,   suffix: '+', label: 'Años de experiencia' },
  { end: 10,  suffix: '+', label: 'Máquinas disponibles' },
  { end: 20,  suffix: '+', label: 'Clases por semana' },
]

function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div className="stats" ref={ref}>
      <div className="stats-grid container">
        {STATS.map(({ end, suffix, label }) => {
          const val = useCounter(end, 1400, started)
          return (
            <div key={label} className="stat-item">
              <span className="stat-n">{val}{suffix}</span>
              <span className="stat-l">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}


const BENEFITS = [
  { icon: 'bi-trophy-fill',       title: 'Equipamiento completo',    desc: 'Más de 10 máquinas profesionales para todos los grupos musculares.' },
  { icon: 'bi-person-fill',       title: 'Entrenador personal',      desc: 'Víctor Pereyra, trainer certificado, te guía paso a paso.' },
  { icon: 'bi-clock-fill',        title: 'Horarios flexibles',       desc: 'Abrimos todos los días con amplio horario para que no faltes.' },
  { icon: 'bi-currency-dollar',   title: 'Planes desde S/.60',       desc: 'Sin contratos forzosos. Elige el plan que se adapta a ti.' },
  { icon: 'bi-heart-pulse-fill',  title: 'Rutinas personalizadas',   desc: 'Cada miembro recibe una rutina adaptada a sus objetivos.' },
  { icon: 'bi-geo-alt-fill',      title: 'Ubicación céntrica',       desc: 'Quiñones N°007, Monsefú. Acceso fácil y ambiente familiar.' },
]

function Benefits() {
  return (
    <section className="benefits">
      <div className="container" style={{ textAlign:'center' }}>
        <span className="sec-tag">Por qué elegirnos</span>
        <h2 className="sec-h">Tu transformación empieza aquí</h2>
        <p className="sec-sub">Todo lo que necesitas para alcanzar tus metas fitness</p>
      </div>
      <div className="container ben-grid">
        {BENEFITS.map(({ icon, title, desc }) => (
          <div key={title} className="ben-card">
            <i className={`bi ${icon} ben-icon`}></i>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


const GALLERY = [
  `${BASE}images/gym1.jpeg`, `${BASE}images/gym2.jpeg`, `${BASE}images/gym3.jpeg`,
  `${BASE}images/gym4.jpeg`, `${BASE}images/gym5.jpeg`, `${BASE}images/gym6.jpeg`,
  `${BASE}images/gym7.jpeg`, `${BASE}images/gym8.jpeg`,
]

function Gallery() {
  return (
    <section className="gallery">
      <div className="container" style={{ textAlign:'center' }}>
        <span className="sec-tag light">Instalaciones</span>
        <h2 className="sec-h" style={{ color:'#fff' }}>El ambiente que mereces</h2>
        <p className="sec-sub">Equipamiento rojo y negro, espejos y buena vibra</p>
      </div>
      <div className="container gal-grid">
        {GALLERY.map((src, i) => (
          <div key={i} className="gal-item">
            <img src={src} alt={`Instalación ${i+1}`} loading="lazy" />
            <div className="gal-overlay">Ver más</div>
          </div>
        ))}
      </div>
    </section>
  )
}


function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <h2 className="sec-h" style={{ color:'#fff' }}>¿Listo para empezar?</h2>
        <p>Únete hoy mismo y comienza tu transformación. Sin excusas.</p>
        <div className="cta-btns">
          <Link to="/planes" className="gym-btn">Ver planes</Link>
          <a href="https://wa.me/51977874754" target="_blank" rel="noreferrer" className="gym-btn outline">
            <i className="bi bi-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Benefits />
      <Gallery />
      <CTA />
    </main>
  )
}