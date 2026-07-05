/**
 * Menu — Renders menu items dynamically from menu.json
 * Text-only layout (no photos), grouped by category. Supports bilingual content.
 * Listens for language changes via i18n callback.
 */

import menuData from '../data/menu.json';
import { getLang, onLangChange } from './i18n.js';

/**
 * Render all menu items into the grid, grouped by category
 */
export function renderMenu(lang) {
  const grid = document.querySelector('[data-menu-grid]');
  const featured = document.querySelector('[data-menu-featured]');
  if (!grid) return;

  lang = lang || getLang();

  // Clear existing content
  grid.innerHTML = '';

  menuData.categories.forEach((category) => {
    // Render the featured item (pršut) into its dedicated showcase container
    const featuredItem = category.items.find((item) => item.featured);
    if (featuredItem && featured) {
      renderFeaturedItem(featured, featuredItem, lang);
    }

    const nonFeaturedItems = category.items.filter((item) => !item.featured);
    if (nonFeaturedItems.length === 0) return;

    grid.appendChild(createCategorySection(category, nonFeaturedItems, lang));
  });
}

/**
 * Create a category section: a heading with decorative rule lines,
 * followed by a divided list of its items (no images).
 */
function createCategorySection(category, items, lang) {
  const section = document.createElement('div');
  section.className = 'reveal visible';
  section.setAttribute('data-menu-category', category.id);

  const heading = document.createElement('h3');
  heading.className = 'menu-category-title';
  heading.textContent = category.name[lang];
  section.appendChild(heading);

  const list = document.createElement('div');
  list.className = 'divide-y divide-beige';

  items.forEach((item) => {
    list.appendChild(createMenuItem(item, lang));
  });

  section.appendChild(list);
  return section;
}

/**
 * Create a single menu item row (text-only, no image)
 */
function createMenuItem(item, lang) {
  const row = document.createElement('div');
  row.className = 'menu-item';
  row.setAttribute('data-menu-item', item.id);

  row.innerHTML = `
    <div class="flex items-baseline justify-between gap-4">
      <h4 class="font-heading text-lg text-brown">${item.name[lang]}</h4>
      ${item.price ? `<span class="text-terracotta font-medium whitespace-nowrap">${item.price}</span>` : ''}
    </div>
    <p class="text-brown-muted text-sm mt-1 leading-relaxed">${item.description[lang]}</p>
  `;

  return row;
}

/**
 * Render the featured item (pršut) into its dedicated showcase container
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
