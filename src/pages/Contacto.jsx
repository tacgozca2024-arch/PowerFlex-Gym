import { useState } from 'react'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', contacto: '', servicio: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hola! Me llamo ${form.nombre}. Quiero info sobre: ${form.servicio}. Contacto: ${form.contacto}`
    window.open(`https://wa.me/51977874754?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
  }

  return (
    <main>
      <section className="contact-sec">
        <div className="container contact-wrap">

          <div className="c-left">
            <span className="sec-tag" style={{ alignSelf: 'flex-start' }}>Contáctanos</span>
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Construyamos<br />Tu Futuro Fitness
            </h2>
            <p>¿Listo para comenzar tu transformación? Escríbenos y te asesoramos sin costo.</p>

            <div className="c-info-list">
              {[
                { icon: 'bi-telephone-fill', text: '+51 977 874 754' },
                { icon: 'bi-geo-alt-fill',   text: 'Quiñones N°007, Monsefú, Lambayeque' },
                { icon: 'bi-envelope-fill',  text: 'victorp@gyppowerflex.com' },
                { icon: 'bi-clock-fill',     text: 'Lun–Vie 6am–10pm · Sáb 7am–8pm · Dom 8am–2pm' },
              ].map(({ icon, text }) => (
                <div key={text} className="c-info-item">
                  <i className={`bi ${icon}`}></i>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            
            <div className="c-socials">
              {[
                { icon: 'bi-facebook',  href: 'https://web.facebook.com/GymPowerflex1', label: 'Facebook' },
                { icon: 'bi-instagram', href: '#',                              label: 'Instagram' },
                { icon: 'bi-tiktok',    href: '#',                              label: 'TikTok' },
                { icon: 'bi-whatsapp',  href: 'https://wa.me/977874754',      label: 'WhatsApp' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="c-social" aria-label={label}>
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="c-right">
            {sent ? (
              <div className="sent-msg">
                <i className="bi bi-check-circle-fill"></i>
                <h3>¡Mensaje enviado!</h3>
                <p>Te redirigimos a WhatsApp. Nos pondremos en contacto contigo muy pronto.</p>
                <button className="gym-btn" style={{ background: '#0f0f0f', marginTop: 16 }} onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="c-form" onSubmit={handleSubmit}>
                <div className="c-form-group">
                  <label htmlFor="nombre">Tu nombre</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Nombre completo"
                    value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="c-form-group">
                  <label htmlFor="contacto">Teléfono / Email</label>
                  <input id="contacto" name="contacto" type="text" placeholder="Email o WhatsApp"
                    value={form.contacto} onChange={handleChange} required />
                </div>
                <div className="c-form-group">
                  <label htmlFor="servicio">Servicio de interés</label>
                  <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange} required>
                    <option value="" disabled>Selecciona un plan</option>
                    <option>Plan Básico — S/.60/mes</option>
                    <option>Plan Pro — S/.100/mes</option>
                    <option>Plan Premium — S/.150/mes</option>
                    <option>Entrenamiento personal</option>
                    <option>Clases grupales</option>
                  </select>
                </div>
                <button type="submit" className="gym-btn c-send">
                  <i className="bi bi-whatsapp"></i> Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  )
}