import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <nav className="f-links">
          {['Nosotros','Blog','Consejos','Términos y condiciones','Nutrición'].map(item => (
            <a key={item} href="#" className="f-link">{item}</a>
          ))}
        </nav>

        <div className="f-icons">
          {[
            { cls: 'bi-facebook',  href: 'https://web.facebook.com/GymPowerflex1' },
            { cls: 'bi-instagram', href: '#' },
            { cls: 'bi-tiktok',    href: '#' },
            { cls: 'bi-whatsapp',  href: 'https://wa.me/51977874754' },
          ].map(({ cls, href }) => (
            <a key={cls} href={href} target="_blank" rel="noreferrer" className="f-icon">
              <i className={`bi ${cls}`}></i>
            </a>
          ))}
        </div>

        <p className="f-copy">
          © {new Date().getFullYear()} Gym Power Flex — El templo de la Musculación
        </p>

      </div>
    </footer>
  )
}