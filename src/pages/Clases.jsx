import { Link } from 'react-router-dom'
import './Clases.css'

const CLASES = [
  {
    tag: 'Fuerza',
    name: 'Halterofilia',
    desc: 'Técnica olímpica para desarrollar fuerza máxima y potencia explosiva.',
    img: 'https://i.pinimg.com/736x/6e/2c/0e/6e2c0e288240e7a677e55536505893e2.jpg',
  },
  {
    tag: 'Resistencia',
    name: 'Cardio',
    desc: 'Quema grasa y mejora tu resistencia cardiovascular con sesiones dinámicas.',
    img: 'https://i.pinimg.com/736x/ef/6b/7b/ef6b7b522f6264327ce795d83f72afa8.jpg',
  },
  {
    tag: 'Hipertrofia',
    name: 'Musculación',
    desc: 'Construye masa muscular con rutinas guiadas por nuestro entrenador personal.',
    img: 'https://i.pinimg.com/1200x/7f/1b/2d/7f1b2dc782728f9a0c3b2e14d14f5400.jpg',
  },
  {
    tag: 'Movilidad',
    name: 'Estiramiento',
    desc: 'Mejora tu flexibilidad y acelera la recuperación muscular entre sesiones.',
    img: 'https://i.pinimg.com/1200x/49/ed/0c/49ed0c2a45874d8ff47dd850950f68db.jpg',
  },
]

export default function Clases() {
  return (
    <main>
      <section className="clases-sec">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="sec-tag">Disciplinas</span>
          <h2 className="sec-h">Nuestras Clases</h2>
          <p className="sec-sub">Elige la disciplina que mejor se adapte a tus objetivos</p>
        </div>

        <div className="container clases-grid">
          {CLASES.map(({ tag, name, desc, img }) => (
            <div key={name} className="clase-card">
              <img src={img} alt={name} loading="lazy" />
              <div className="clase-overlay" />
              <div className="clase-info">
                <span className="clase-tag">{tag}</span>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Horarios */}
      <section className="schedule-sec">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="sec-tag">Horarios</span>
          <h2 className="sec-h">¿Cuándo entrenamos?</h2>
          <p className="sec-sub">Abrimos todos los días para que no pierdas ni un día</p>
          <div className="schedule-grid">
            {[
              { day: 'Lunes – Viernes', time: '6:00 AM – 10:00 PM' },
              { day: 'Sábado',          time: '7:00 AM – 8:00 PM'  },
              { day: 'Domingo',         time: '8:00 AM – 2:00 PM'  },
            ].map(({ day, time }) => (
              <div key={day} className="sch-card">
                <i className="bi bi-clock-fill"></i>
                <strong>{day}</strong>
                <span>{time}</span>
              </div>
            ))}
          </div>
          <Link to="/contacto" className="gym-btn" style={{ marginTop: 36, display: 'inline-block' }}>
            Reservar mi lugar
          </Link>
        </div>
      </section>
    </main>
  )
}