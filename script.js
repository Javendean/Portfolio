document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(navLink => {
            navLink.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }


    // Active Navigation Link Highlighting on Scroll
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function changeNav() {
        let index = sections.length;
        const offset = 70; // Offset for navbar height + a little extra

        while (--index >= 0 && window.scrollY + offset < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        
        if (index >= 0) { // Check if a section is active
            const activeNavLink = document.querySelector(`.nav-menu a[href="#${sections[index].id}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add('active');
            }
        } else if (window.scrollY < sections[0].offsetTop - offset) {
            // If scrolled to the very top, no section might be "active" by the logic above.
            // You could choose to make the first nav link active or none.
            // For now, let's try to make the first link active if it corresponds to the first section
            if (sections.length > 0) {
                const firstSectionId = sections[0].id;
                const firstNavLink = document.querySelector(`.nav-menu a[href="#${firstSectionId}"]`);
                 // Check if hero section is visible
                const heroSection = document.getElementById('hero');
                if (heroSection && window.scrollY < heroSection.offsetHeight - offset) {
                    const heroNavLink = document.querySelector('.nav-menu a[href="#hero"]') || document.querySelector('.nav-logo[href="#hero"]');
                    if (heroNavLink && !heroNavLink.classList.contains('nav-logo')) { // Don't highlight logo as "active page"
                         // heroNavLink.classList.add('active'); // This logic needs refinement if "Home" is separate
                    }
                }
            }
        }
    }

    // Initial call in case the page is loaded on a scrolled position
    if (sections.length > 0) { // Only run if sections exist
        changeNav();
        window.addEventListener('scroll', changeNav);
    }


    // Update footer year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Hide "no writing" message if there are writing cards
    const writingGrid = document.querySelector('.writing-grid');
    const noWritingMessage = document.querySelector('.no-writing');
    if (writingGrid && noWritingMessage) {
        if (writingGrid.children.length > 0) {
            noWritingMessage.style.display = 'none';
        } else {
            noWritingMessage.style.display = 'block';
        }
    }

    // Smooth scroll for hero CTA button (and any other internal links if not handled by CSS html {scroll-behavior: smooth;})
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a valid ID selector and not just "#"
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});