// Main JavaScript for academic website functionality
class AcademicWebsite {
    constructor() {
        this.currentSection = 'about';
        this.mobileMenuOpen = false;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
                this.initializeContent();
            });
        } else {
            this.setupEventListeners();
            this.initializeContent();
        }
    }

    setupEventListeners() {
        // Navigation click handlers
        this.setupNavigation();
        
        // Mobile menu toggle
        this.setupMobileMenu();
        
        // Window resize handler
        window.addEventListener('resize', () => this.handleResize());
        
        // Smooth scrolling for anchor links
        this.setupSmoothScrolling();
        
        // Profile image error handling
        this.setupImageErrorHandling();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const sectionId = link.getAttribute('data-section');
                if (sectionId) {
                    this.showSection(sectionId);
                    this.setActiveNavLink(link);
                    
                    // Close mobile menu if open
                    this.closeMobileMenu();
                    
                    // Update URL hash
                    window.history.replaceState(null, null, `#${sectionId}`);
                }
            });
        });

        // Handle initial hash navigation
        this.handleInitialHash();
        
        // Handle hash changes (back/forward buttons)
        window.addEventListener('hashchange', () => {
            this.handleHashChange();
        });
    }

    setupMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (this.mobileMenuOpen && 
                    !navMenu.contains(e.target) && 
                    !mobileMenuToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });
        }
    }

    setupSmoothScrolling() {
        // Enable smooth scrolling for any remaining anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupImageErrorHandling() {
        const profileImg = document.getElementById('profile-img');
        if (profileImg) {
            profileImg.addEventListener('error', () => {
                // Create a placeholder if image fails to load
                profileImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRTVFN0VCIi8+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0zMCA5MEMzMCA3NCA0My44NSA2MCA2MCA2MEM3Ni4xNSA2MCA5MCA3NCA5MCA5MEgzMFoiIGZpbGw9IiM5QjlCQTAiLz4KPC9zdmc+';
                profileImg.alt = 'Profile placeholder';
            });
        }
    }

    handleInitialHash() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            this.showSection(hash);
            this.setActiveNavLinkBySection(hash);
        } else {
            // Default to about section
            this.showSection('about');
            this.setActiveNavLinkBySection('about');
        }
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash && document.getElementById(hash)) {
            this.showSection(hash);
            this.setActiveNavLinkBySection(hash);
        }
    }

    showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;
            
            // Load content for the section if i18n is available
            if (window.i18n && typeof window.i18n.loadSectionContent === 'function') {
                window.i18n.loadSectionContent(sectionId);
            }
            
            // Scroll to top of main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
        }
    }

    setActiveNavLink(activeLink) {
        // Remove active class from all nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        activeLink.classList.add('active');
    }

    setActiveNavLinkBySection(sectionId) {
        const navLink = document.querySelector(`[data-section="${sectionId}"]`);
        if (navLink) {
            this.setActiveNavLink(navLink);
        }
    }

    toggleMobileMenu() {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (navMenu && mobileMenuToggle) {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            navMenu.classList.toggle('active', this.mobileMenuOpen);
            
            // Update toggle icon
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !this.mobileMenuOpen);
                icon.classList.toggle('fa-times', this.mobileMenuOpen);
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
        }
    }

    closeMobileMenu() {
        if (this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }

    handleResize() {
        // Close mobile menu on resize to larger screen
        if (window.innerWidth > 768 && this.mobileMenuOpen) {
            this.closeMobileMenu();
        }
    }

    initializeContent() {
        // Load initial content
        this.loadInitialContent();
        
        // Set up intersection observer for animations
        this.setupAnimations();
    }

    loadInitialContent() {
        // Load About section content immediately
        if (window.i18n && typeof window.i18n.loadAboutContent === 'function') {
            window.i18n.loadAboutContent();
        }
        
        // Update last modified date
        this.updateLastModified();
    }

    updateLastModified() {
        const lastUpdatedElement = document.getElementById('last-updated');
        if (lastUpdatedElement) {
            const now = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            const monthNamesZh = ["一月", "二月", "三月", "四月", "五月", "六月",
                "七月", "八月", "九月", "十月", "十一月", "十二月"];
            
            if (window.i18n && window.i18n.currentLang === 'zh') {
                lastUpdatedElement.textContent = `${now.getFullYear()}年${monthNamesZh[now.getMonth()]}`;
            } else {
                lastUpdatedElement.textContent = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
            }
        }
    }

    setupAnimations() {
        // Create intersection observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate
        const animateElements = document.querySelectorAll('.card, .timeline-item, .achievement-item');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Utility functions
    showLoading(container) {
        if (container) {
            container.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
        }
    }

    hideLoading() {
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => el.remove());
    }

    // Error handling
    handleError(error, container) {
        console.error('Website error:', error);
        if (container) {
            container.innerHTML = `<div class="error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Sorry, there was an error loading this content. Please try refreshing the page.</p>
            </div>`;
        }
    }

    // Performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.startTime = performance.now();
        this.init();
    }

    init() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            this.measurePageLoad();
        });
    }

    measurePageLoad() {
        const loadTime = performance.now() - this.startTime;
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // You can add analytics tracking here if needed
        if (loadTime > 3000) {
            console.warn('Page load time is slower than expected');
        }
    }
}

// Initialize website functionality
const website = new AcademicWebsite();
const performanceMonitor = new PerformanceMonitor();

// Export for external access
window.academicWebsite = website;