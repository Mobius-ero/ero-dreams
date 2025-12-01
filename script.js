// script.js - replace your current file with this

(function () {
  // Helper to apply/remove the theme class on both html and body
  function applyThemeClass(isLight) {
    const html = document.documentElement;
    const body = document.body;
    if (isLight) {
      html.classList.add('light-mode');
      if (body) body.classList.add('light-mode');
    } else {
      html.classList.remove('light-mode');
      if (body) body.classList.remove('light-mode');
    }
  }

  // Read saved preference synchronously (useful when called before DOMContentLoaded)
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    // apply immediately to html (if body not present yet, we'll also apply on DOMContentLoaded)
    document.documentElement.classList.add('light-mode');
  } else if (saved === 'dark') {
    document.documentElement.classList.remove('light-mode');
  }

  // Re-apply when the page is restored from back/forward cache
  window.addEventListener('pageshow', () => {
    const s = localStorage.getItem('theme');
    applyThemeClass(s === 'light');
  });

  // Once DOM is ready, ensure body also has the class and wire up the button
  document.addEventListener('DOMContentLoaded', () => {
    // Make sure body matches html (in case head-only script set html earlier)
    const htmlIsLight = document.documentElement.classList.contains('light-mode');
    applyThemeClass(htmlIsLight);

    // Wire up toggle button
    const toggleButton = document.getElementById('mode-toggle');
    if (!toggleButton) {
      // no button found — nothing to do
      return;
    }

    toggleButton.addEventListener('click', () => {
      const nowLight = !document.documentElement.classList.contains('light-mode');
      applyThemeClass(nowLight);

      // Persist
      localStorage.setItem('theme', nowLight ? 'light' : 'dark');
    });
  });
})();


let lastScrollTop = 0;
const header = document.querySelector(".header-bar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down → hide
    header.classList.add("hide");
  } else {
    // scrolling up → show
    header.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // prevent negative values
});



