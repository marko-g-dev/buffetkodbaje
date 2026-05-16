/**
 * i18n — Language toggle module
 * Swaps all text content based on data-i18n attributes.
 * Stores preference in localStorage.
 */

import content from '../data/content.json';

const STORAGE_KEY = 'bkb-lang';
const DEFAULT_LANG = 'hr';
const SUPPORTED = ['hr', 'en'];

let currentLang = DEFAULT_LANG;

/**
 * Get saved language or detect from browser
 */
function getInitialLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved)) return saved;

  // Try to detect from browser
  const browserLang = navigator.language?.slice(0, 2);
  if (browserLang === 'hr') return 'hr';

  return DEFAULT_LANG;
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = content[key];

    if (translation && translation[lang]) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = translation[lang];
      } else {
        el.textContent = translation[lang];
      }
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update meta tags
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && content['meta.description']) {
    metaDesc.content = content['meta.description'][lang];
  }

  const title = content['meta.title'];
  if (title) {
    document.title = title[lang];
  }
}

/**
 * Toggle between languages
 */
export function toggleLang() {
  currentLang = currentLang === 'hr' ? 'en' : 'hr';
  localStorage.setItem(STORAGE_KEY, currentLang);
  applyTranslations(currentLang);
  updateToggleButton();
}

/**
 * Update the toggle button text
 */
function updateToggleButton() {
  const btn = document.querySelector('[data-lang-toggle]');
  if (btn) {
    btn.textContent = currentLang === 'hr' ? 'EN' : 'HR';
    btn.setAttribute('aria-label',
      currentLang === 'hr' ? 'Switch to English' : 'Prebaci na hrvatski'
    );
  }
}

/**
 * Get current language
 */
export function getLang() {
  return currentLang;
}

/**
 * Initialize i18n system
 */
export function initI18n() {
  currentLang = getInitialLang();
  applyTranslations(currentLang);
  updateToggleButton();

  // Bind toggle button
  const btn = document.querySelector('[data-lang-toggle]');
  if (btn) {
    btn.addEventListener('click', toggleLang);
  }
}
