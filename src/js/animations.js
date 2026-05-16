/**
 * Animations — Scroll reveal using Intersection Observer
 * Adds 'visible' class to elements with 'reveal' class when they enter viewport.
 */

/**
 * Initialize scroll reveal animations
 */
export function initAnimations() {
  // Respect user preference for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Make all elements visible immediately
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Stop observing once revealed (animate only once)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Slightly before fully in view
    }
  );

  // Observe all elements with reveal class
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Simple parallax effect for hero section
 */
export function initParallax() {
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;

  // Disable on mobile (performance)
  if (window.innerWidth < 768) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
        ticking = false;
      });
      ticking = true;
    }
  });
}
