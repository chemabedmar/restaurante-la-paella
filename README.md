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
| `reviews-data.js` | **Tus reseñas** (edita aquí para añadir / cambiar) |
| `reviews.js` | Módulo que muestra las reseñas de 4 y 5 estrellas |
| `sitemap.xml`, `robots.txt`, `llms.txt` | SEO / indexación en Google e IA |

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

Tu ID de Google Analytics **`G-TLWJNW33TY`** ya está configurado en `cookies.js`.

El visitante puede cambiar su decisión en cualquier momento desde el enlace **"Configurar cookies"** del pie de página.

## Reseñas (4 y 5 estrellas)

La página de inicio muestra automáticamente **solo las reseñas de 4 y 5 estrellas**, ordenadas de la más reciente a la más antigua.

Para añadir o editar reseñas, abre **`reviews-data.js`** y modifica la lista. Cada reseña tiene este formato:

```js
{
  rating: 5,                       // estrellas (1-5); las de 1-3 no se muestran
  author: "Nombre del cliente",
  date: "2025-06-18",              // AAAA-MM-DD (sirve para ordenar)
  text: "Texto de la reseña.",
  url: "https://maps.app.goo.gl/..." // enlace a Google (opcional)
}
```

Las reseñas también se incluyen como **datos estructurados (Schema.org)**, de modo que Google puede mostrar las estrellas en los resultados de búsqueda y los asistentes de IA pueden citarlas.

## SEO e indexación en Google y chats de IA

El sitio está optimizado para aparecer en buscadores y ser citado por asistentes de IA (ChatGPT, Gemini, Perplexity, Claude…):

- **Datos estructurados Schema.org** (`Restaurant`, `WebSite`, `FAQPage` + reseñas con valoración agregada) en el `<head>` del inicio.
- **Meta etiquetas** optimizadas: título, descripción, palabras clave, Open Graph (para redes sociales) y Twitter Card en todas las páginas.
- **Geolocalización** del negocio (Alicante / San Vicente del Raspeig).
- **`sitemap.xml`** y **`robots.txt`** para que los buscadores rastreen el sitio (con permiso explícito a los bots de IA).
- **`llms.txt`**: ficha resumida del restaurante en el formato que leen los asistentes de IA.

> Tras publicar, da de alta el sitio en [Google Search Console](https://search.google.com/search-console) y envía el `sitemap.xml` para acelerar la indexación. Mantén también actualizada tu ficha de **Google Business Profile** (Google Maps): es la fuente principal de las reseñas y del posicionamiento local.

© Restaurante La Paella 2025
