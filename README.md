# 🌿 Corrientes Recicla

App oficial de la Municipalidad de Corrientes para localizar Puntos Verdes de reciclaje.

## ✨ Funcionalidades

- **📍 GPS automático**: Al escanear el QR, detecta la ubicación del vecino y muestra el Punto Verde más cercano
- **🗺️ Navegación directa**: Botón "Llevarme ahí con GPS" abre Google Maps con ruta ya calculada
- **📅 Cronograma**: Días y horarios de recolección por barrio
- **♻️ Guía de reciclaje**: Qué materiales se aceptan en cada categoría
- **📱 Mobile-first**: Diseñada para celulares, funciona desde el navegador al escanear el QR

## 🚀 Deploy en Vercel

```bash
# 1. Instalá las dependencias
npm install

# 2. Build de producción
npm run build:prod

# 3. Deploy en Vercel
# - Conectá tu repositorio en vercel.com
# - O instalá la CLI: npm i -g vercel && vercel
```

Vercel detecta automáticamente Angular gracias al `vercel.json` incluido.

## 📱 Generación del QR

Una vez deployada la app (ej: https://corrientes-recicla.vercel.app):

1. Entrá a [qr-code-generator.com](https://www.qr-code-generator.com) o [qrcode-monkey.com](https://www.qrcode-monkey.com)
2. Pegá la URL de tu app deployada
3. Personalizá con los colores verdes de la municipalidad
4. Descargá en alta resolución para imprimir en las plazas

## 🗂️ Estructura del proyecto

```
src/
├── app/
│   ├── components/navbar/     # Barra de navegación
│   ├── models/                # Interfaces TypeScript
│   ├── pages/
│   │   ├── home/              # Pantalla principal (QR landing)
│   │   ├── map/               # Lista de todos los puntos verdes
│   │   ├── schedule/          # Cronograma por barrio
│   │   └── info/              # Guía de qué reciclar
│   ├── pipes/                 # Pipes Angular
│   └── services/
│       ├── geolocalizacion.service.ts  # API de geolocalización
│       └── puntos-verdes.service.ts    # Datos y lógica de negocio
├── styles.css                 # Estilos globales y tokens de diseño
└── index.html
```

## 📊 Datos de Puntos Verdes

Los datos están en `src/app/services/puntos-verdes.service.ts`. 
Para actualizar coordenadas, horarios o agregar nuevos puntos, editá el array `puntosVerdes`.

## 🛠️ Tecnologías

- Angular 18 (Standalone Components)
- TypeScript 5.4
- Geolocation API (nativa del navegador)
- Google Maps (redirección externa)
- Fuentes: Syne + DM Sans (Google Fonts)

---

*Municipalidad de Corrientes · Secretaría de Ambiente · 2025*
