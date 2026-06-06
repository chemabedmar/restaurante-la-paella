// ============================================================
//  Restaurante La Paella — Consentimiento de cookies + Analytics
//  Conforme al RGPD: la analítica SOLO se carga si el usuario acepta.
// ============================================================

// 🔧 CONFIGURA AQUÍ tu ID de medición de Google Analytics 4
//    (formato G-XXXXXXXXXX, lo obtienes en analytics.google.com)
const GA_MEASUREMENT_ID = 'G-TLWJNW33TY';

(function () {
  const KEY = 'lapaella_cookie_consent'; // 'accepted' | 'rejected'

  function loadAnalytics() {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-TLWJNW33TY') return;
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML =
      '<div>' +
        '<h4>Usamos cookies</h4>' +
        '<p>Utilizamos cookies propias y de terceros con fines analíticos para mejorar tu experiencia. ' +
        'Puedes aceptarlas o rechazarlas. Más información en nuestra ' +
        '<a href="privacidad.html">Política de privacidad</a>.</p>' +
      '</div>' +
      '<div class="cookie-actions">' +
        '<button class="btn btn-cookie-reject" type="button" data-cookie="reject">Rechazar</button>' +
        '<button class="btn btn-primary" type="button" data-cookie="accept">Aceptar</button>' +
      '</div>';
    document.body.appendChild(banner);

    requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add('show')));

    function decide(choice) {
      try { localStorage.setItem(KEY, choice); } catch (e) {}
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 500);
      if (choice === 'accepted') loadAnalytics();
    }

    banner.querySelector('[data-cookie="accept"]').addEventListener('click', () => decide('accepted'));
    banner.querySelector('[data-cookie="reject"]').addEventListener('click', () => decide('rejected'));
  }

  let consent = null;
  try { consent = localStorage.getItem(KEY); } catch (e) {}

  if (consent === 'accepted') {
    loadAnalytics();
  } else if (consent !== 'rejected') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', buildBanner);
    } else {
      buildBanner();
    }
  }

  // Permite reabrir la configuración desde un enlace con id="cookie-settings"
  document.addEventListener('click', function (e) {
    const t = e.target.closest('#cookie-settings');
    if (!t) return;
    e.preventDefault();
    try { localStorage.removeItem(KEY); } catch (err) {}
    if (!document.querySelector('.cookie-banner')) buildBanner();
  });
})();
