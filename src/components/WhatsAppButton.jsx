import './WhatsAppButton.css'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  )
}

export default WhatsAppButton