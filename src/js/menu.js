/**
 * Menu — Renders menu items dynamically from menu.json
 * Supports bilingual content. Listens for language changes via i18n callback.
 */

import menuData from '../data/menu.json';
import { getLang, onLangChange } from './i18n.js';

/**
 * Render all menu cards into the grid
 */
export function renderMenu(lang) {
  const grid = document.querySelector('[data-menu-grid]');
  const featured = document.querySelector('[data-menu-featured]');
  if (!grid) return;

  lang = lang || getLang();

  // Clear existing cards
  grid.innerHTML = '';

  menuData.categories.forEach((category) => {
    category.items.forEach((item) => {
      // Render featured item (pršut) into its dedicated container
      if (item.featured && featured) {
        renderFeaturedItem(featured, item, lang);
        return;
      }

      const card = createMenuCard(item, lang);
      grid.appendChild(card);
    });
  });
}

/**
 * Create a single menu card element
 */
function createMenuCard(item, lang) {
  const card = document.createElement('div');
  card.className = 'menu-card reveal visible';
  card.setAttribute('data-menu-item', item.id);

  card.innerHTML = `
    <div class="aspect-[4/3] img-placeholder mb-4">
      <span>${lang === 'hr' ? 'Fotografija dolazi uskoro' : 'Photo coming soon'}</span>
    </div>
    <h3 class="font-heading text-lg text-brown mb-1">${item.name[lang]}</h3>
    <p class="text-brown-muted text-sm">${item.description[lang]}</p>
    ${item.price ? `<p class="text-terracotta font-medium mt-2">${item.price}</p>` : ''}
  `;

  return card;
}

/**
 * Render the featured item (pršut) into its dedicated container
 */
function renderFeaturedItem(container, item, lang) {
  const nameEl = container.querySelector('[data-featured-name]');
  const descEl = container.querySelector('[data-featured-desc]');

  if (nameEl) nameEl.textContent = item.name[lang];
  if (descEl) descEl.textContent = item.description[lang];
}

/**
 * Register for language changes.
 * Called from main.js after both i18n and menu are initialized.
 */
export function initMenuLangListener() {
  onLangChange((newLang) => {
    renderMenu(newLang);
  });
}
