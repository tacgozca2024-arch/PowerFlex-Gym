# 💪 Gym Power Flex — Sitio Web Oficial

Sitio web completo del **Gimnasio Power Flex**, ubicado en Monsefú, Lambayeque, Perú. Desarrollado como proyecto final del curso de Frontend, utilizando **React + Vite**.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| [React 18](https://react.dev/) | Librería principal de UI |
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [React Router v6](https://reactrouter.com/) | Navegación SPA entre páginas |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Íconos (vía CDN) |
| [Google Fonts](https://fonts.google.com/) | Tipografías Bebas Neue + Barlow |
| CSS Modules | Estilos por componente |

---

## 📁 Estructura del proyecto

```
gym-power-flex/
├── public/
│   └── images/              # Imágenes del gimnasio y logo
│       ├── logo.jpg
│       ├── gym1.jpg
│       └── ...
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── WhatsAppButton.jsx
│   │   └── WhatsAppButton.css
│   ├── pages/               # Páginas principales
│   │   ├── Home.jsx         # Inicio: carrusel, stats, beneficios, galería
│   │   ├── Home.css
│   │   ├── Planes.jsx       # Membresías: Básico, Pro, Premium
│   │   ├── Planes.css
│   │   ├── Clases.jsx       # Disciplinas y horarios
│   │   ├── Clases.css
│   │   ├── Contacto.jsx     # Formulario + info de contacto
│   │   └── Contacto.css
│   ├── App.jsx              # Rutas principales (React Router)
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Estilos globales y variables CSS
├── index.html               # HTML base
├── vite.config.js           # Configuración de Vite
├── package.json
└── README.md
```

---

## 📄 Páginas

### 🏠 Home (`/`)
- Carrusel hero automático con 3 slides y puntos de navegación
- Barra de estadísticas animadas (contador al hacer scroll)
- Sección de beneficios con 6 cards
- Galería de instalaciones con 8 fotos reales
- CTA final con enlace a WhatsApp

### 💳 Planes (`/planes`)
- 3 planes de membresía: Básico (S/.60), Pro (S/.100), Premium (S/.150)
- Plan "Más popular" destacado con borde rojo
- Features incluidas y excluidas con íconos visuales
- Sección de beneficios comunes a todos los planes

### 🏋️ Clases (`/clases`)
- 4 disciplinas: Halterofilia, Cardio, Musculación, Estiramiento
- Cards con imagen de fondo, tag de categoría y descripción
- Sección de horarios: Lun–Vie, Sáb y Dom

### 📬 Contacto (`/contacto`)
- Formulario con nombre, teléfono/email y selección de plan
- Al enviar, abre WhatsApp con el mensaje prellenado automáticamente
- Información de contacto: teléfono, dirección, email y horarios
- Íconos de redes sociales


---

## 🖋️ Tipografía

- **Bebas Neue** — Títulos y display (carrusel, nombres de planes, headings)
- **Barlow** — Texto general, párrafos, botones

Ambas cargadas desde Google Fonts en `index.css`.

---

## 📱 Responsive

El sitio es totalmente responsive con breakpoints en:
- `768px` — tablets y móviles medianos (menú hamburguesa, grid de 1 columna)
- `600px` — móviles pequeños (stats en 2 columnas)
- `480px` — galería en 1 columna

---

## 🔧 Funcionalidades destacadas

- **Carrusel automático** — cambia de slide cada 4.5 segundos
- **Contador animado** — las estadísticas se animan al hacer scroll con `IntersectionObserver`
- **Menú hamburguesa** — navegación móvil con apertura/cierre animado
- **NavLink activo** — el enlace de la página actual se resalta automáticamente
- **Formulario con WhatsApp** — al enviar el formulario abre WhatsApp con el mensaje prellenado
- **Botón flotante WhatsApp** — visible en todas las páginas
- **Hover en galería** — overlay rojo al pasar el mouse sobre las fotos

---

## 📞 Contacto del gimnasio

- 📍 Quiñones N°007, Monsefú, Lambayeque, Perú
- 📞 +51 977 874 754
- 🌐 Entrenador personal: **Víctor Pereyra**

---

## 👨‍💻 Autor

Proyecto desarrollado como **proyecto final** del curso de Desarrollo Frontend.
> Eduardo Adolfo Gozalo Campos - Desarrollador Frontend
> *Gym Power Flex — El templo de la Musculación* 💪
