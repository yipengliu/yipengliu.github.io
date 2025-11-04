// JavaScript for anchor navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that point to sections on the current page
    const navLinks = document.querySelectorAll('.greedy-nav .visible-links a[href^="#"]');
    const sections = document.querySelectorAll('h1[id]');
    
    // Function to remove active class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
    }
    
    // Function to add active class to current section's nav link
    function addActiveClass(id) {
        removeActiveClasses();
        const activeLink = document.querySelector(`.greedy-nav .visible-links a[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Intersection Observer to detect which section is currently visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.querySelector('a[id]').getAttribute('id');
                addActiveClass(id);
            }
        });
    }, {
        rootMargin: '-100px 0px -70% 0px' // Account for fixed header and show when section is 30% visible
    });
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Handle click events for smooth navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate the offset to account for fixed header
                const headerHeight = document.querySelector('.masthead').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 30; // Increased offset
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state
                addActiveClass(targetId);
                
                // Update URL hash without jumping
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // Set initial active state based on current hash
    if (window.location.hash) {
        const initialId = window.location.hash.substring(1);
        addActiveClass(initialId);
    } else {
        // If no hash, activate the first link based on page language
        if (window.location.pathname.includes('/en/')) {
            addActiveClass('biography');
        } else {
            addActiveClass('个人简介');
        }
    }
});