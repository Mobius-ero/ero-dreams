// Wait for the entire document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle button element using its ID
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    // --- A. Check Saved Preference on Load ---
    const savedMode = localStorage.getItem('theme');
    
    // Set the initial theme based on the saved preference
    if (savedMode === 'light') {
        body.classList.add('light-mode');
        // Update the SVG icon to reflect the dark background (moon) if needed
        // (Since your SVG is a sun/light icon, we can swap it in the HTML later if you want a moon icon)
        
    } else {
        // If no preference or preference is 'dark', ensure base dark mode is active
        body.classList.remove('light-mode');
    }

    // --- B. Handle the Button Click ---
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Toggle the 'light-mode' class on the body
            body.classList.toggle('light-mode');

            // Save the new preference to browser storage
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

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


