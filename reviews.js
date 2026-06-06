// ============================================================
//  Restaurante La Paella — Módulo de reseñas
//  ------------------------------------------------------------
//  - Toma las reseñas de window.LP_REVIEWS (reviews-data.js)
//  - Muestra SOLO las de 4 y 5 estrellas
//  - Ordena de la más reciente a la más antigua
//  - Renderiza las tarjetas y genera datos estructurados
//    (Schema.org Review) para que Google y los chats de IA
//    las indexen y puedan mostrarlas.
// ============================================================

(function () {
  const data = (window.LP_REVIEWS || [])
    .filter(r => Number(r.rating) >= 4)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // ---------- 1. Render visual ----------
  const grid = document.querySelector('[data-reviews-grid]');
  if (grid && data.length) {
    const MAX = Number(grid.getAttribute('data-reviews-max')) || data.length;
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    grid.innerHTML = data.slice(0, MAX).map(r => {
      const stars = '★★★★★'.slice(0, r.rating) + '☆☆☆☆☆'.slice(0, 5 - r.rating);
      const d = new Date(r.date);
      const when = isNaN(d) ? '' : months[d.getMonth()].replace(/^./, c => c.toUpperCase()) + ' ' + d.getFullYear();
      const link = r.url
        ? `<a href="${r.url}" target="_blank" rel="noopener">Ver en Google</a>`
        : '';
      return `<article class="review reveal in">
        <div class="stars" aria-label="${r.rating} de 5 estrellas">${stars}</div>
        <blockquote>“${r.text}”</blockquote>
        <div class="who"><strong>${r.author}</strong>${when}</div>
        ${link}
      </article>`;
    }).join('');
  }

  // ---------- 2. Datos estructurados (SEO + IA) ----------
  // Inserta reseñas y valoración agregada en el JSON-LD del restaurante.
  const ratings = data.map(r => Number(r.rating));
  const avg = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length) : 0;

  const reviewSchema = data.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.author },
    "datePublished": r.date,
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 },
    "reviewBody": r.text
  }));

  // Busca el bloque LocalBusiness existente y le añade las reseñas
  document.querySelectorAll('script[type="application/ld+json"]').forEach(node => {
    let json;
    try { json = JSON.parse(node.textContent); } catch (e) { return; }
    const isBiz = json && (json["@type"] === "Restaurant" || json["@type"] === "LocalBusiness");
    if (!isBiz) return;
    if (data.length) {
      json.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": avg.toFixed(1),
        "reviewCount": data.length,
        "bestRating": 5
      };
      json.review = reviewSchema;
      node.textContent = JSON.stringify(json, null, 2);
    }
  });
})();
