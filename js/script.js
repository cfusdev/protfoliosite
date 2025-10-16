document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default jump action for hash links
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element (offset adjusted for fixed header)
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 2. Navigation Active State (Highlighting the Current Section) ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to update the active link based on scroll position
    const updateActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            // Check if the user is scrolling within the section bounds
            if (pageYOffset >= sectionTop - 150) { 
                current = section.getAttribute('id');
            }
        });

        // Remove 'active' class from all links and add it to the current link
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href contains the current section ID
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    // Listen for the scroll event
    window.addEventListener('scroll', updateActiveLink);
    // Call once on load to set the initial state
    updateActiveLink();

    
    // --- 3. Contact Form Submission Handler ---
    // The form submission is now handled by the 'action' attribute in the HTML
    // and relies on an external service like Formspree for storage.
    // No JavaScript is needed here for basic function.
});