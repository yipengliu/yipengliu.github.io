// JavaScript for anchor navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that include an in-page hash (both visible and hidden lists)
    const navLinks = Array.from(document.querySelectorAll('.greedy-nav a[href*="#"]'));
    // Watch all heading levels; IDs may be on the heading or an <a> child
    const sectionNodes = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    
    // Function to remove active class from all nav links
    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
    }
    
    // Function to add active class to current section's nav link
    function addActiveClass(id) {
        if (!id) return;
        removeActiveClasses();
        // Search both visible and hidden links
        const activeLink = navLinks.find(link => {
            const href = link.getAttribute('href');
            if (!href) return false;
            const hashIdx = href.indexOf('#');
            if (hashIdx < 0) return false;
            const linkHash = href.substring(hashIdx + 1);
            return linkHash === id;
        });
        if (activeLink) activeLink.classList.add('active');
    }
    
    // Build section targets for scroll spy
    function getHeaderHeight() {
        const mh = document.querySelector('.masthead');
        return mh ? mh.offsetHeight : 0;
    }

    function getIdFromHeading(node) {
        const inner = node.querySelector && node.querySelector('a[id]');
        return node.getAttribute && node.getAttribute('id') ? node.getAttribute('id') : (inner ? inner.getAttribute('id') : null);
    }

    let targets = [];
    // Restrict targets only to ids that appear in navigation (improves accuracy)
    const navIds = new Set(navLinks.map(l => {
        const href = l.getAttribute('href') || '';
        const idx = href.indexOf('#');
        return idx >= 0 ? href.substring(idx + 1) : null;
    }).filter(Boolean));

    function collectTargets() {
        targets = sectionNodes
            .map(node => {
                const id = getIdFromHeading(node);
                if (!id || !navIds.has(id)) return null;
                const el = document.getElementById(id);
                if (!el) return null;
                return { id, el };
            })
            .filter(Boolean)
            .map(t => ({ id: t.id, el: t.el, top: t.el.getBoundingClientRect().top + window.pageYOffset }))
            .sort((a, b) => a.top - b.top);
    }
    collectTargets();
    
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
                addActiveClass(targetId);
                // Update URL hash without causing jump
                history.pushState(null, '', `#${targetId}`);
            }
        });
    });

    // Scroll spy using current scroll position and computed tops
    let ticking = false;
    function onScroll() {
        if (ticking) return;
        window.requestAnimationFrame(() => {
            if (!targets.length) return;
            const headerHeight = getHeaderHeight();
            // Middle of viewport gives more stable highlighting when sections are tall
            const viewportMiddle = window.pageYOffset + (window.innerHeight / 2);
            // Find the last target whose top is above the middle minus header
            let current = targets[0];
            for (let i = 0; i < targets.length; i++) {
                if (targets[i].top - headerHeight <= viewportMiddle) {
                    current = targets[i];
                } else {
                    break;
                }
            }
            addActiveClass(current.id);
            ticking = false;
        });
        ticking = true;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { collectTargets(); onScroll(); });
    
    // Set initial active state based on current hash
    function defaultSectionId() {
        return window.location.pathname.includes('/zh') ? '科研经历' : 'Experience';
    }

    if (window.location.hash) {
        const initialId = window.location.hash.substring(1);
        if (navIds.has(initialId)) addActiveClass(initialId);
    } else {
        const defId = defaultSectionId();
        if (navIds.has(defId)) {
            const defEl = document.getElementById(defId);
            if (defEl) {
                defEl.scrollIntoView({ behavior: 'instant', block: 'start' });
                addActiveClass(defId);
                history.replaceState(null, '', `#${defId}`);
            }
        }
    }

    // Kick off initial scroll spy state
    onScroll();
});