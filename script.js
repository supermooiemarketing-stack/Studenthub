// ===================================
// StudentHub Media - Interactive Scripts
// ===================================

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Scroll Animations (Simple AOS) =====
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form elements
        const submitBtn = this.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');
        const formMessage = document.getElementById('formMessage');

        // Form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        const consent = document.getElementById('consent').checked;

        // Basic validation
        if (!name || !email || !service || !message || !consent) {
            showFormMessage('Please fill in all required fields and agree to be contacted.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        submitBtn.disabled = true;

        // Simulate form submission (in production, this would send to a server)
        setTimeout(() => {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
            submitBtn.disabled = false;

            // Show success message
            showFormMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');

            // Reset form
            contactForm.reset();

            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 2000);
    });
}

// Helper function to show form messages
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Service Cards Hover Effect Enhancement =====
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Team Member Cards Hover Effect =====
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    member.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Dynamic Year in Footer =====
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear && footerYear.textContent.includes('2024')) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = footerYear.textContent.replace('2024', currentYear);
}

// ===== Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Video Lazy Loading Enhancement =====
const videoIframes = document.querySelectorAll('.video-wrapper iframe');
videoIframes.forEach(iframe => {
    // Add loading attribute for better performance
    iframe.setAttribute('loading', 'lazy');

    // Prevent autoplay
    const src = iframe.getAttribute('src');
    if (src && !src.includes('autoplay=0')) {
        iframe.setAttribute('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=0');
    }
});

// ===== Scroll to Top Button (Optional Enhancement) =====
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #2E8B57 0%, #1F6B4A 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(scrollBtn);

    // Show/hide scroll button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effect
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// ===== Form Input Focus Effects =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });

    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    entry.target.textContent = '0';
                    animateCounter(entry.target, number);
                    setTimeout(() => {
                        entry.target.textContent = text;
                    }, 2000);
                }
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// ===== Parallax Effect for Hero Background =====
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${rate}px)`;
    }
});

// ===== Active Page Highlighting in Navigation =====
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', highlightActivePage);

// ===== Console Welcome Message =====
console.log('%cWelcome to StudentHub Media!', 'color: #2E8B57; font-size: 20px; font-weight: bold;');
console.log('%cInterested in our code? We\'d love to work with you!', 'color: #3CB371; font-size: 14px;');
console.log('%cContact us at: info@studenthubmedia.nl', 'color: #2D2D2D; font-size: 14px;');

// ===== Performance: Preload Important Resources =====
function preloadResources() {
    const criticalResources = [
        'styles.css',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        link.href = resource;
        if (link.as === 'font') {
            link.crossOrigin = 'anonymous';
        }
    });
}

// ===== Accessibility: Keyboard Navigation Enhancement =====
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== FAQ Accordion (if you want to add this feature later) =====
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        if (question) {
            question.style.cursor = 'pointer';
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isOpen = answer.style.display === 'block';

                // Close all other answers
                document.querySelectorAll('.faq-item p').forEach(p => {
                    p.style.display = 'none';
                });

                // Toggle current answer
                answer.style.display = isOpen ? 'none' : 'block';
            });
        }
    });
}

// Initialize FAQ if on contact page
if (document.querySelector('.faq-section')) {
    document.addEventListener('DOMContentLoaded', initFAQAccordion);
}

// ===== Portfolio Video Click Analytics (Placeholder) =====
const portfolioVideos = document.querySelectorAll('.video-wrapper iframe');
portfolioVideos.forEach((video, index) => {
    video.addEventListener('load', function() {
        console.log(`Portfolio video ${index + 1} loaded successfully`);
    });
});

// ===== Error Handling for Images =====
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Image failed to load:', this.src);
    });
});

// ===== TESTIMONIALS CAROUSEL =====
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.testimonials-track');
    const slides = Array.from(track.children);
    const dotsNav = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoplayInterval;

    // Create dots
    if (dotsNav) {
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsNav.appendChild(dot);
        });
    }

    const dots = dotsNav ? Array.from(dotsNav.children) : [];

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        resetAutoplay();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }

    // Start autoplay
    startAutoplay();
}

// ===== PORTFOLIO FILTER SYSTEM =====
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length === 0 || portfolioItems.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = '';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ===== VIDEO MODAL/LIGHTBOX =====
function initVideoModal() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    let modal = document.getElementById('videoModal');

    // Create modal if it doesn't exist
    if (!modal && videoWrappers.length > 0) {
        modal = document.createElement('div');
        modal.id = 'videoModal';
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <button class="video-modal-close" aria-label="Close video">&times;</button>
                <div class="video-modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    if (!modal) return;

    const modalBody = modal.querySelector('.video-modal-body');
    const closeBtn = modal.querySelector('.video-modal-close');

    videoWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        if (!img) return;

        // Add click indicator
        wrapper.style.cursor = 'pointer';
        wrapper.setAttribute('title', 'Click to view full screen');

        wrapper.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = img.getAttribute('src');
            const imgAlt = img.getAttribute('alt') || 'Portfolio image';

            modalBody.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}" style="max-width: 90%; max-height: 90vh; border-radius: 10px;">`;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modalBody.innerHTML = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// ===== WHATSAPP CHAT WIDGET =====
function initWhatsAppWidget() {
    const whatsappWidget = document.createElement('div');
    whatsappWidget.className = 'whatsapp-widget';
    whatsappWidget.innerHTML = `
        <a href="https://wa.me/31501234567?text=Hi%20StudentHub%20Media!%20I'm%20interested%20in%20your%20services."
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Chat with us on WhatsApp"
           class="whatsapp-button">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.48 2.028 7.788L0 32l8.425-2.213A15.917 15.917 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333A13.277 13.277 0 0 1 8.96 27.28l-.477-.283-4.943 1.297 1.32-4.827-.311-.495A13.253 13.253 0 0 1 2.667 16c0-7.364 5.97-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
                <path d="M23.197 19.803c-.357-.179-2.116-1.044-2.443-1.163-.328-.119-.566-.179-.805.179-.238.357-.924 1.163-1.133 1.401-.209.238-.417.268-.774.089-.357-.179-1.508-.556-2.873-1.773-1.062-.947-1.779-2.117-1.988-2.474-.209-.357-.022-.55.157-.728.161-.161.357-.417.536-.626.179-.209.238-.357.357-.596.119-.238.06-.447-.03-.626-.089-.179-.805-1.94-1.103-2.653-.29-.694-.584-.6-.805-.611-.209-.011-.447-.013-.686-.013s-.626.089-.954.447c-.328.357-1.252 1.223-1.252 2.982s1.282 3.458 1.461 3.696c.179.238 2.521 3.85 6.107 5.397.853.368 1.52.587 2.039.751.857.272 1.636.234 2.252.142.687-.103 2.116-.865 2.414-1.701.298-.835.298-1.551.209-1.701-.089-.149-.328-.238-.686-.417z"/>
            </svg>
            <span>Chat with us</span>
        </a>
    `;
    document.body.appendChild(whatsappWidget);
}

// ===== NEWSLETTER SIGNUP HANDLING =====
function initNewsletterSignup() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const emailInput = this.querySelector('input[type="email"]');
        const submitBtn = this.querySelector('button[type="submit"]');
        const messageDiv = this.querySelector('.newsletter-message') || createMessageDiv(this);

        const email = emailInput.value.trim();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNewsletterMessage(messageDiv, 'Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Subscribing...</span>';
        submitBtn.disabled = true;

        // Simulate API call (replace with actual implementation)
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            showNewsletterMessage(messageDiv, 'Thanks for subscribing! Check your email for confirmation.', 'success');
            newsletterForm.reset();
        }, 1500);
    });

    function createMessageDiv(form) {
        const div = document.createElement('div');
        div.className = 'newsletter-message';
        form.appendChild(div);
        return div;
    }

    function showNewsletterMessage(div, message, type) {
        div.textContent = message;
        div.className = 'newsletter-message ' + type;
        div.style.display = 'block';

        setTimeout(() => {
            div.style.display = 'none';
        }, 5000);
    }
}

// ===== INITIALIZE ALL NEW FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsCarousel();
    initPortfolioFilters();
    initVideoModal();
    initWhatsAppWidget();
    initNewsletterSignup();
});
