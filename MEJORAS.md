# Propuesta de Mejoras — Corrientes Recicla

## Contexto

La app actual funciona correctamente como MVP: detecta la ubicación del usuario (ideal para el flujo desde QR en plazas), muestra los Puntos Verdes más cercanos, el cronograma de recolección por barrio y una guía de materiales reciclables.

El problema principal es que todos los datos están hardcodeados en el código fuente. Cualquier cambio operativo (cierre de un punto, cambio de horario, nuevo contenedor) requiere modificar el código y redesplegar la app. Esto la convierte en un folleto digital en lugar de una herramienta operativa real.

Las siguientes mejoras transforman la app en infraestructura digital municipal sostenible.

---

## Mejoras Prioritarias

### 1. Backend + Panel de Administración Municipal

**Problema:** los 9 Puntos Verdes y los 8 barrios están hardcodeados en `puntos-verdes.service.ts`. No hay forma de actualizarlos sin tocar el código.

**Solución:**
- Base de datos en la nube (Firebase Firestore o Supabase — ambos tienen tier gratuito)
- Panel de administración web para la municipalidad con:
  - CRUD de Puntos Verdes (agregar, editar, cerrar)
  - Marcar contenedor como "lleno temporalmente"
  - Publicar alertas operativas ("El PV de Plaza Vera cierra esta semana")
  - Gestión del cronograma de recolección por barrio

**Impacto:** convierte la app de estática a dinámica. La municipalidad gestiona sus propios datos sin depender de un desarrollador para cada cambio.

---

### 2. Mapa Interactivo

**Problema:** la página `/mapa` muestra una lista ordenada por distancia, pero no hay un mapa visual dentro de la app. El botón "Ver en Google Maps" abre una app externa.

**Solución:** integrar Leaflet.js (open source, sin API key ni costo):
- Mapa real de Corrientes con pins de los Puntos Verdes
- Marcador de la ubicación del usuario
- Popup al tocar un pin con nombre, horario, materiales aceptados y botón de navegación
- Diferenciación visual entre puntos activos y cerrados

**Impacto:** el elemento más visualmente impactante para una demo. Transforma la percepción de la app de lista de texto a herramienta geográfica real.

---

### 3. PWA Instalable (Progressive Web App)

**Problema:** el flujo principal depende de escanear un QR en la plaza y cargar la web. Si hay mala señal, la app no funciona. Tampoco hay forma de que el usuario vuelva a la app fácilmente después de la primera visita.

**Solución:** configurar la app como PWA con `@angular/pwa`:
- Instalable desde el navegador (ícono en el home screen del celular, sin pasar por App Store)
- Funciona offline con datos cacheados (Puntos Verdes y cronograma disponibles sin internet)
- Carga instantánea en visitas posteriores

**Impacto:** demuestra madurez técnica y resuelve el problema de conectividad en plazas. Es el argumento técnico más sólido frente a un cliente institucional.

---

### 4. Notificaciones de Recordatorio de Recolección

**Problema:** el usuario tiene que recordar revisar el cronograma. La app es reactiva (el usuario consulta) en lugar de proactiva (la app avisa).

**Solución:**
- El usuario selecciona su barrio
- Recibe una notificación push el día que pasa el camión de recolección (ej: "Hoy recolectan en Nicolini / Quilmes — horario 08:00 a 13:00")
- Requiere Service Workers (incluido en la PWA) + backend mínimo para persistir suscripciones

**Impacto:** es la funcionalidad más tangible para el ciudadano. La app pasa de ser consultada a ser útil sin esfuerzo.

---

### 5. Dashboard de Métricas para la Municipalidad

**Problema:** actualmente no hay forma de medir el uso de la app ni justificar su impacto ante las autoridades.

**Solución:** integrar analíticas (Google Analytics o Plausible) y construir una vista de reporte con:
- Cantidad de escaneos por QR (por plaza)
- Sesiones por día / hora / barrio
- Puntos Verdes más consultados
- Conversión: cuántos usuarios abrieron navegación GPS

**Impacto:** permite a la municipalidad presentar números concretos de adopción ciudadana. Es el argumento que cierra presupuestos.

---

### 6. Sistema de Reporte Ciudadano

**Solución:** botón "Reportar problema" en cada Punto Verde con opciones:
- Contenedor lleno
- Lugar en mal estado
- Punto cerrado inesperadamente

Los reportes llegan al panel de administración de la municipalidad con ubicación, hora y tipo de problema.

**Impacto:** convierte a los ciudadanos en sensores urbanos en tiempo real. Le da a la municipalidad datos operativos que hoy no tiene.

---

## Mejoras Menores

| Mejora | Esfuerzo | Impacto |
|--------|----------|---------|
| Foto de cada Punto Verde | Bajo | Alto (visual) |
| Compartir dirección por WhatsApp | Bajo | Medio |
| "Agregar al calendario" el día de recolección | Medio | Alto |
| Página 404 personalizada | Muy bajo | Bajo |
| Accesibilidad WCAG AA | Medio | Alto (institucional) |
| Soporte multi-idioma (español / guaraní) | Medio | Alto (político) |

---

## Estado Actual vs. Propuesta

| Aspecto | Hoy | Con mejoras |
|---------|-----|-------------|
| Datos | Hardcodeados en código | Base de datos gestionada por la municipalidad |
| Mapa | Lista con distancias | Mapa interactivo con pins |
| Disponibilidad offline | No | Sí (PWA) |
| Notificaciones | No | Push por barrio |
| Métricas de uso | No | Dashboard con analíticas |
| Reportes ciudadanos | No | Sistema integrado al panel de admin |
| Instalación | Solo desde browser | Instalable como app nativa |

---

## Priorización Sugerida para Demo

Para una presentación política con el mayor impacto en el menor tiempo:

1. **Mapa interactivo** — visual, implementable rápido, impresiona en demo en vivo
2. **PWA instalable** — demuestra profesionalismo técnico, diferencia de un sitio web común
3. **Backend + Panel de admin** — argumento de sostenibilidad a largo plazo, el más importante para cerrar un contrato

---

*Documento generado como propuesta de desarrollo para presentación institucional.*
