// JavaScript for anchor navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that include an in-page hash (both visible and hidden lists)
    const navLinks = Array.from(document.querySelectorAll('.greedy-nav a[href*="#"]'));
    // Watch all heading levels; IDs may be on the heading or an <a> child
    const sectionNodes = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    
    // Note: We intentionally remove automatic highlighting (no 'active' class toggling)
    
    // Build section targets for scroll spy
    function getHeaderHeight() {
        const mh = document.querySelector('.masthead');
        return mh ? mh.offsetHeight : 0;
    }

    function getIdFromHeading(node) {
        const inner = node.querySelector && node.querySelector('a[id]');
        return node.getAttribute && node.getAttribute('id') ? node.getAttribute('id') : (inner ? inner.getAttribute('id') : null);
    }

    // No scroll targets needed since auto-highlighting is disabled
    
    // Handle click events for smooth navigation
    function getHashFromHref(href) {
        try {
            // If absolute or root-relative with hash
            const idx = href.indexOf('#');
            return idx >= 0 ? href.substring(idx + 1) : '';
        } catch { return ''; }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = getHashFromHref(this.getAttribute('href'));
            if (!targetId) return; // let default behavior proceed

            e.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Prefer CSS scroll-margin-top; use scrollIntoView
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update URL hash without causing jump
                history.pushState(null, '', `#${targetId}`);
            }
        });
    });

    // Removed scroll spy: no automatic highlighting based on scroll position
    
    // Set initial active state based on current hash
    function defaultSectionId() {
        return window.location.pathname.includes('/zh') ? '科研经历' : 'Experience';
    }

    if (!window.location.hash) {
        // Optionally keep default scroll but do not add any active class
        const defId = defaultSectionId();
        const defEl = document.getElementById(defId);
        if (defEl) {
            defEl.scrollIntoView({ behavior: 'instant', block: 'start' });
            history.replaceState(null, '', `#${defId}`);
        }
    }

    // No initial highlight
});