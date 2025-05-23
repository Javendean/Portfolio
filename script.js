// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu li a"); // Get all nav links

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    // Ensure this targets links within the slide-out menu specifically if that's the intent
    if (navLinks && navMenu && hamburger) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                // Check if the menu is active (typically meaning it's in mobile view and open)
                if (navMenu.classList.contains("active")) {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            });
        });
    }

    // Set current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- NEW: Function to adjust hero section padding ---
    function adjustHeroPadding() {
        const navbar = document.querySelector('.navbar');
        const heroSection = document.querySelector('.hero-section');

        if (navbar && heroSection) {
            const navbarHeight = navbar.offsetHeight;
            const extraSpacing = 30; // Add a little extra space (in pixels) below the navbar
            heroSection.style.paddingTop = (navbarHeight + extraSpacing) + 'px';
        }
    }

    // Adjust padding on initial load
    adjustHeroPadding();

    // Adjust padding on window resize (in case navbar height changes, e.g., due to text wrapping)
    // Debounce or throttle this for performance if resize events become an issue,
    // but for this use case, it's likely fine.
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustHeroPadding, 100); // Adjust delay as needed
    });
    // --- END NEW ---
});