// ============================================================
//  SYNAPSE GRID — Shared JavaScript
// ============================================================

(function () {
  'use strict';

  // ── Theme Toggle ─────────────────────────────────────────
  const THEME_KEY = 'sg-theme';
  const root = document.documentElement;

  function getTheme() {
    return localStorage.getItem(THEME_KEY) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const label = document.getElementById('themeLabel');
    if (label) label.textContent = theme === 'dark' ? '☀' : '☾';
  }

  function toggleTheme() {
    applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Apply saved theme again after DOM loads (for label)
    applyTheme(getTheme());

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

    // ── Navbar Scroll ───────────────────────────────────────
    const navbar = document.getElementById('navbar');
    function onScroll() {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Mobile Menu ─────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });
    }

    // ── Active Nav Link ─────────────────────────────────────
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
      const href = a.getAttribute('href');
      if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    // ── Scroll Reveal ───────────────────────────────────────
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('revealed'); });
    }
  });
})();
