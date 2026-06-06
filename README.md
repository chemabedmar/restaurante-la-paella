# Restaurante La Paella — Sitio web

Réplica estática del sitio web de **Restaurante La Paella** (Alicante), lista para alojarse de forma gratuita en **GitHub Pages**.

## Páginas

| Archivo | Página |
|---|---|
| `index.html` | Inicio |
| `nuestra-esencia.html` | Nuestra esencia |
| `contacto.html` | Contacto (con mapa) |
| `terminos.html` | Términos y Condiciones |
| `privacidad.html` | Política de privacidad |
| `styles.css` | Estilos compartidos |
| `script.js` | Menú móvil y animaciones |
| `cookies.js` | Banner de consentimiento de cookies + analítica |

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `restaurante-la-paella`).
2. Sube **todos los archivos** de esta carpeta a la raíz del repositorio.
3. En el repositorio, ve a **Settings → Pages**.
4. En **Source**, elige la rama `main` y la carpeta `/ (root)`. Guarda.
5. En unos minutos tu web estará disponible en `https://TU-USUARIO.github.io/restaurante-la-paella/`.

### Dominio propio (opcional)
Si quieres usar `restaurantelapaella.com`, en **Settings → Pages → Custom domain** introduce el dominio y configura los DNS según las instrucciones de GitHub. Tendrás que apuntar el dominio desde tu proveedor actual.

## Notas importantes

- **Fotografías:** todas las imágenes están guardadas en la carpeta `img/` del repositorio, por lo que el sitio es **totalmente independiente de Wix**. Para cambiar una foto, sustituye el archivo correspondiente dentro de `img/` manteniendo el mismo nombre.
- **Textos legales:** las páginas de Términos y Privacidad son una **plantilla orientativa**. Revísalas con tu asesor antes de publicarlas.
- **Reservas:** el sitio es estático; las reservas se gestionan por teléfono (`+34 965 670 550`) y email (`info@restaurantelapaella.com`).

## Cookies y analítica (Google Analytics)

El sitio incluye un **banner de consentimiento de cookies** conforme al RGPD: la analítica **solo se carga si el usuario pulsa "Aceptar"**.

Para activar tu propia analítica:
1. Crea una propiedad en [analytics.google.com](https://analytics.google.com) y copia tu **ID de medición** (formato `G-XXXXXXXXXX`).
2. Abre el archivo `cookies.js` y sustituye `G-XXXXXXXXXX` por tu ID real en la línea `const GA_MEASUREMENT_ID = '...'`.
3. ¡Listo! Mientras no pongas tu ID, el banner funciona pero no se carga ninguna analítica.

El visitante puede cambiar su decisión en cualquier momento desde el enlace **"Configurar cookies"** del pie de página.

© Restaurante La Paella 2025
