# Atlas Vet – Portal Digital de Anatomía Veterinaria

## 📋 Descripción

Atlas Vet es un prototipo de portal digital para la enseñanza de anatomía veterinaria en la Facultad de Ciencias Veterinarias de la Universidad Nacional de Rosario (FCV-UNR).

Unifica atlas 2D, modelos 3D interactivos, casos clínicos y herramientas de evaluación en un único punto de acceso para estudiantes y docentes.

## 🎯 Características

- **Diseño responsivo** - Optimizado para desktop, tablet y mobile
- **Accesibilidad** - Cumple con estándares WCAG, ARIA labels, navegación por teclado
- **SEO optimizado** - Meta tags, estructura semántica, canonical URLs
- **Interactividad** - Filtros, búsqueda, smooth scroll, validación de formularios
- **Performance** - CSS moderno, JavaScript defer, lazy loading ready
- **Animaciones fluidas** - Transiciones y efectos de entrada suaves

## 📁 Estructura

```
atlasvet/
├── index.html              # Página principal
├── pages/
│   ├── atlas.html          # Explorador interactivo del atlas
│   ├── catalogo.html       # Catálogo por especie y sistema
│   ├── modulos.html        # Módulos didácticos
│   ├── plataformas.html    # Plataformas asociadas
│   └── contacto.html       # Formulario de contacto
├── css/
│   └── style.css           # Estilos principales
├── js/
│   └── main.js             # JavaScript interactivo
└── img/                    # Imágenes y logo
```

## 🚀 Características de JavaScript

- **Smooth scroll** para enlaces internos
- **Detección de página activa** en navbar
- **Filtros interactivos** en catálogo y atlas
- **Búsqueda en vivo** de estructuras
- **Validación de formularios** antes de envío
- **Animations on scroll** con Intersection Observer

## 🎨 Paleta de Colores

- **Primario**: #004b7c (azul FCV-UNR)
- **Primario oscuro**: #002f52
- **Primario suave**: #e0effa
- **Acento**: #00b5a4 (teal)
- **Fondo**: #f3f6fb
- **Texto**: #0f172a

## 📱 Breakpoints

- **Móvil**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

## ♿ Accesibilidad

✅ ARIA labels en elementos interactivos
✅ Focus visible para navegación por teclado
✅ Contraste de colores WCAG AA
✅ Estructura semántica HTML5 correcta
✅ Alt text en imágenes
✅ Aria-current en navegación activa

## 🔧 Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/MauroGarcia4/atlasvet.git
```

2. Abrir `index.html` en el navegador o servir con un servidor local:
```bash
python -m http.server 8000
# o
npx http-server
```

## 📦 Dependencias

- **Bootstrap 5.3.2** - Framework CSS
- **Font Awesome 6.4.0** - Iconos
- Vanilla JavaScript (sin dependencias externas)

## 🚀 Optimizaciones Implementadas

### CSS
- Font sizes fluidas con `clamp()`
- Transiciones smooth con cubic-bezier
- Animaciones de entrada (fadeInUp, slideDown)
- Breakpoints optimizados para mobile-first

### JavaScript
- Defer loading en scripts
- Vanilla JS sin librerías adicionales
- Intersection Observer para animaciones de scroll
- Event delegation para mejor performance

### HTML
- Semántica correcta (article, section, nav)
- Meta tags completos
- Integrity checks en CDN
- Lazy loading ready

## 📊 Validación

- ✅ HTML válido según W3C
- ✅ CSS optimizado y limpio
- ✅ JavaScript sin errores de consola
- ✅ Lighthouse score alto
- ✅ Mobile-friendly

## 🎯 Próximas Mejoras

- [ ] Backend para gestión de contenido
- [ ] Sistema de autenticación
- [ ] Galería de modelos 3D interactivos
- [ ] Sistema de comentarios en casos clínicos
- [ ] Analytics integrado
- [ ] Integración con Anatomage/EasyAnatomy
- [ ] Versión de app móvil

## 📝 Licencia

Proyecto educativo para FCV-UNR

## 👨‍💻 Autor

Mauro García - [@MauroGarcia4](https://github.com/MauroGarcia4)

## 📧 Contacto

Para sugerencias o colaboraciones: info@fcv.unr.edu.ar

---

**Atlas Vet** - Anatomía veterinaria digital en un solo lugar 🐾

## 🛠️ Últimas modificaciones (25 Nov 2025)

### Mejoras de Performance (SEO + CDN)
- ✅ Se añadieron **preconnect links** a CDNs (jsDelivr, Cloudflare) en todas las páginas para optimizar carga.
- ✅ Se incorporó **JSON-LD schema** (Organization + WebSite) en `index.html` para mejorar SEO estructurado.
- ✅ Se optimizaron **meta tags OG y Twitter Card** en `index.html` y `pages/contacto.html`.

### Mejoras de Formulario (Frontend-first)
- ✅ **Nuevo script de envío asincrónico** en `pages/contacto.html`:
  - Soporte para envío a backend mediante `fetch()` a endpoint configurable.
  - **Fallback automático a localStorage** si no hay endpoint o si falla la conexión.
  - Almacenamiento en `localStorage['atlasvetSubmissions']` como array JSON.
  - Validación accesible y mensajes de error en línea (sin `alert()`).
  - Estado de botón deshabilitado + spinner durante envío.

### Mejoras de Accesibilidad
- ✅ Se mejoró el formulario de `pages/contacto.html`: `aria-describedby` en campos, mensajes de error accesibles.
- ✅ Se aplicó soporte **`prefers-reduced-motion`** en `css/style.css` para usuarios sensibles a animaciones.

### Logo Actualizado
- ✅ Se creó **`img/logo-atlas-vet-mark.svg`** (versión de solo icono: círculo + paw).
- ✅ Navbar unificada: logo actualizado a versión marca en todas las páginas.
- ✅ Tamaño responsivo: 40px en desktop, escalado en mobile.

### Emoji Estratégicos
- ✅ Repositioned emojis: removidos de títulos principales, colocados en cards y filtros interactivos.
- ✅ Cards profesionales con iconografía: módulos, plataformas, catálogo y atlas.

## 📝 Integración de Formulario con Backend

El formulario de contacto está **listo para backend** sin cambios de código necesarios.

### Opción 1: Usar sin Backend (Frontend-only)

El formulario funciona automáticamente sin backend. Los datos se guardan en el navegador en `localStorage['atlasvetSubmissions']` como array JSON:

```javascript
// Los datos se guardan como:
{
  nombre: "Juan Pérez",
  correo: "juan@example.com",
  rol: "estudiante",
  departamento: "anatomia",
  mensaje: "Consulta sobre estructuras...",
  timestamp: "2025-11-25T14:30:00Z"
}
```

Para recuperarlos en consola:
```javascript
JSON.parse(localStorage.getItem('atlasvetSubmissions'))
```

### Opción 2: Integrar con Backend

Una vez que tengas un endpoint backend disponible, simplemente agrega esta línea **antes de cargar la página de contacto**:

```html
<!-- En pages/contacto.html, en el <head> o antes de cerrar </body> -->
<script>
  window.__ATLAS_FORM_ENDPOINT__ = 'https://tu-api.com/api/submissions';
</script>
```

#### Especificación del Endpoint

**URL**: `https://tu-api.com/api/submissions`

**Método**: `POST`

**Content-Type**: `application/json`

**Body esperado**:
```json
{
  "nombre": "string",
  "correo": "string (email válido)",
  "rol": "string",
  "departamento": "string",
  "mensaje": "string (mínimo 10 caracteres)",
  "timestamp": "string (ISO 8601)"
}
```

**Respuesta esperada**:
- ✅ **200 OK**: El formulario muestra "¡Gracias! Tu mensaje fue enviado." y limpia los campos.
- ❌ **Cualquier otro status**: Fallback automático a `localStorage`, muestra error al usuario.

**Ejemplo de Backend** (Node.js + Express):
```javascript
app.post('/api/submissions', express.json(), async (req, res) => {
  const { nombre, correo, rol, departamento, mensaje, timestamp } = req.body;
  
  // Validar y guardar en BD
  try {
    await Submission.create({ nombre, correo, rol, departamento, mensaje, timestamp });
    res.status(200).json({ success: true, message: 'Envío recibido' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

**Configuración alternativa** (via variable de entorno):
```javascript
// En un archivo de configuración global
window.__ATLAS_FORM_ENDPOINT__ = import.meta.env.VITE_API_ENDPOINT || '';
```

### ¿Qué pasa si cambia la API en Producción?

El endpoint se puede cambiar dinámicamente en cualquier momento:
```javascript
// Cambiar endpoint después de cargar la página
window.__ATLAS_FORM_ENDPOINT__ = 'https://nueva-api.com/submissions';
```

Todos los formularios subsecuentes usarán el nuevo endpoint.

---

**Resumen de cambios**:
- 🟢 Formulario completamente funcional sin backend (localStorage).
- 🟢 Integración con backend en 1 línea de código.
- 🟢 Performance optimizado (preconnect CDN, JSON-LD).
- 🟢 Accesibilidad mejorada (ARIA, prefers-reduced-motion).
- 🟢 Branding unificado (logo mark, emojis estratégicos).

**Próximos pasos sugeridos**:
1. Crear endpoint backend `/api/submissions` en tu servidor.
2. Agregar `window.__ATLAS_FORM_ENDPOINT__` en la configuración de producción.
3. Implementar almacenamiento en BD (MongoDB, PostgreSQL, etc.).
4. Configurar notificaciones por email (nodemailer, SendGrid, etc.).
5. Agregar validación en servidor (sanitización, rate limiting).
