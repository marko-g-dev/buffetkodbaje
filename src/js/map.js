/**
 * Map — Google Maps embed initialization
 * Uses a simple iframe embed (no API key needed for basic embed).
 */

/**
 * Initialize map embed
 * Replace the query with the exact address once confirmed.
 */
export function initMap() {
  const mapContainer = document.querySelector('[data-map]');
  if (!mapContainer) return;

  // Using Google Maps embed with a search query
  // Update this query with the exact restaurant address
  const query = encodeURIComponent('Buffet Kod Baje, Drniš, Croatia');

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${query}`;
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = '0';
  iframe.style.borderRadius = '0.5rem';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.setAttribute('aria-label', 'Map showing Buffet Kod Baje location in Drniš');

  mapContainer.appendChild(iframe);
}

/**
 * Alternative: simple iframe embed without API key
 * Uses maps.google.com/maps?q= which works without a key
 */
export function initMapSimple() {
  const mapContainer = document.querySelector('[data-map]');
  if (!mapContainer) return;

  const query = encodeURIComponent('Drniš, Croatia');

  const iframe = document.createElement('iframe');
  iframe.src = `https://maps.google.com/maps?q=${query}&output=embed`;
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = '0';
  iframe.style.borderRadius = '0.5rem';
  iframe.loading = 'lazy';
  iframe.setAttribute('aria-label', 'Map showing Buffet Kod Baje location in Drniš');

  mapContainer.appendChild(iframe);
}
