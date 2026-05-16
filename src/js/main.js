/**
 * Main entry point
 * Imports and initializes all modules.
 */

import '../css/main.css';
import { initI18n } from './i18n.js';
import { initAnimations, initParallax } from './animations.js';
import { initMapSimple } from './map.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Language system
  initI18n();

  // Scroll animations
  initAnimations();

  // Hero parallax
  initParallax();

  // Map embed
  initMapSimple();

  // Mobile menu toggle
  initMobileMenu();
});

/**
 * Mobile hamburger menu
 */
function initMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('max-h-96');
    nav.classList.toggle('max-h-0', isOpen);
    nav.classList.toggle('max-h-96', !isOpen);
    toggle.setAttribute('aria-expanded', !isOpen);
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.add('max-h-0');
      nav.classList.remove('max-h-96');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
