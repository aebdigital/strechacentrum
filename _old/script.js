// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Load global navigation
    loadNavigation();
    
    // Load global footer
    loadFooter();
    
    function loadNavigation() {
        const navigationHTML = `
            <!-- Scroll Progress Indicator -->
            <div class="scroll-progress">
                <div class="scroll-progress-bar"></div>
            </div>

            <!-- Transparent Navigation -->
            <nav class="navbar navbar-transparent">
                <div class="nav-container">
                    <div class="nav-logo">
                        <a href="/" class="logo-link">
                            <img src="logo.png" alt="KSK Trading" class="logo-image">
                        </a>
                        <img src="cech-strecharov-slovenska.png" alt="Čech strechárov Slovenska" class="nav-cech-logo">
                    </div>
                    <ul class="nav-menu">
                        <li><a href="/" class="nav-link">Domov</a></li>
                        <li><a href="produkty-sluzby" class="nav-link">Produkty a služby</a></li>
                        <li><a href="strechy-na-mieru" class="nav-link">Strechy na mieru</a></li>
                        <li><a href="referencie" class="nav-link">Referencie</a></li>
                        <li><a href="kontakt" class="nav-link">Kontakt</a></li>
                    </ul>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        `;
        
        const navigationContainer = document.getElementById('navigation-container');
        if (navigationContainer) {
            navigationContainer.innerHTML = navigationHTML;
            
            // Set active nav link based on current page
            setActiveNavLink();
        }
    }
    
    function setActiveNavLink() {
        const currentPage = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Home page matching
            if ((currentPage === '/' || currentPage === '/index.html' || currentPage.includes('index.html')) && href === '/') {
                link.classList.add('active');
            }
            // Match clean URLs (without .html extension)
            else if (href !== '/' && currentPage === href) {
                link.classList.add('active');
            }
            // Match URLs with leading slash
            else if (href !== '/' && currentPage === '/' + href) {
                link.classList.add('active');
            }
            // Handle trailing slash
            else if (href !== '/' && currentPage === href + '/') {
                link.classList.add('active');
            }
        });
    }
    
    function loadFooter() {
        const footerHTML = `
            <footer id="footer" class="footer">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-cta-content">
                            <h2>Potrebujete novú strechu alebo rekonštrukciu?</h2>
                            <p>Kontaktujte nás a my Vám radi poradíme s výberom vhodného riešenia pre vašu strechu</p>
                        </div>
                        <div class="footer-cta-button">
                            <a href="kontakt.html" class="footer-btn">Kontakt</a>
                        </div>
                    </div>
                    
                    <div class="footer-divider"></div>
                    
                    <div class="footer-content">
                        <div class="footer-section footer-contact">
                            <h3>KSK Trading s.r.o.</h3>
                            <p><strong>Adresa:</strong> <a href="https://maps.google.com/?q=Tolstého+2785/7,+066+01+Humenné" target="_blank" rel="noopener" style="text-decoration: underline; color: #F5821E;">Tolstého 2785/7, 066 01 Humenné</a></p>
                            <p><strong>IČO:</strong> 45495629</p>
                            <p><strong>IČ-DPH:</strong> SK 2023011210</p>
                            
                            <div style="margin-top: 20px;">
                                <p><strong>Ing. Čerevka Ivan</strong></p>
                                <p><strong>Tel.:</strong> <a href="tel:+421917799650">+421 917 799 650</a></p>
                                <p><strong>Tel.:</strong> <a href="tel:+421917927680">+421 917 927 680</a></p>
                                <p><strong>E-mail:</strong> <a href="mailto:cerevka@strechacentrum.sk">cerevka@strechacentrum.sk</a></p>
                            </div>
                            
                            <div class="footer-hours">
                                <h4>Pracovné hodiny</h4>
                                <p>Pondelok – Piatok</p>
                                <p>08:00 – 17:00</p>
                            </div>
                        </div>
                        
                        <div class="footer-section footer-navigation">
                            <div class="footer-nav-columns">
                                <div class="footer-nav-column">
                                    <h4>Navigácia</h4>
                                    <ul>
                                        <li><a href="/">Domov</a></li>
                                        <li><a href="produkty-sluzby">Produkty a služby</a></li>
                                        <li><a href="strechy-na-mieru.html">Strechy na mieru</a></li>
                                        <li><a href="realizacie.html">Realizácie</a></li>
                                        <li><a href="kontakt.html">Kontakt</a></li>
                                    </ul>
                                </div>
                                <div class="footer-nav-column">
                                    <h4>Služby</h4>
                                    <ul>
                                        <li><a href="produkty-sluzby">Tvrdé krytiny</a></li>
                                        <li><a href="produkty-sluzby">Plechové krytiny</a></li>
                                        <li><a href="produkty-sluzby">Rovné krytiny</a></li>
                                        <li><a href="produkty-sluzby">Odkvapový systém</a></li>
                                        <li><a href="produkty-sluzby">Strešné okná</a></li>
                                        <li><a href="strechy-na-mieru.html">Strechy na mieru</a></li>
                                    </ul>
                                </div>
                                <div class="footer-nav-column footer-privacy">
                                    <h4>Ochrana údajov</h4>
                                    <ul>
                                        <li><a href="#" id="privacy-policy-link">Ochrana osobných údajov</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="footer-website-credit">
                            <span>Tvorba stránky - <a href="https://aebdigital.com" target="_blank" rel="noopener">AEB Digital</a></span>
                        </div>
                        <div class="footer-copyright">
                            <p>&copy; 2024 KSK Trading s.r.o. Všetky práva vyhradené.</p>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Privacy Policy Popup -->
            <div id="privacy-popup" class="privacy-popup">
                <div class="privacy-popup-content">
                    <div class="privacy-popup-header">
                        <h2>Ochrana osobných údajov</h2>
                        <button class="privacy-popup-close" onclick="closePrivacyPopup()">&times;</button>
                    </div>
                    <div class="privacy-popup-body">
                        <div class="company-info">
                            <strong>KSK Trading s.r.o.</strong><br>
                            <a href="https://maps.google.com/?q=Tolstého+2785/7,+066+01+Humenné" target="_blank" rel="noopener" style="text-decoration: underline; color: #F5821E;">Tolstého 2785/7, 066 01 Humenné</a><br>
                            Slovenská republika<br>
                            IČO: 45495629<br>
                            IČ-DPH: SK 2023011210<br>
                            E-mail: cerevka@strechacentrum.sk<br>
                            Tel.: +421 917 799 650, +421 917 927 680
                        </div>
                        
                        <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>
                        
                        <h3>I. Kontaktný formulár</h3>
                        <p>Na stránke www.strechacentrum.sk prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
                        <p>Položiť otázku k našim produktom a službám<br>
                        Požiadať o cenovú ponuku</p>
                        
                        <p><strong>Rozsah spracúvaných údajov:</strong></p>
                        <p>Meno a priezvisko<br>
                        E-mailová adresa<br>
                        Telefónne číslo<br>
                        Správu</p>
                        
                        <p><strong>Účel spracovania:</strong><br>
                        Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                        
                        <p><strong>Právny základ:</strong><br>
                        Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                        
                        <p><strong>Doba uchovávania:</strong><br>
                        Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                        
                        <h3>II. Súbory cookies</h3>
                        <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                        <p>Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).<br>
                        Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</p>
                        
                        <p><strong>Správa súhlasov:</strong><br>
                        Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>
                        
                        <h3>III. Práva dotknutej osoby</h3>
                        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                        <p>Prístup k osobným údajom, ktoré spracúvame<br>
                        Oprava nepresných alebo neúplných údajov<br>
                        Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ<br>
                        Obmedzenie spracovania<br>
                        Prenosnosť údajov<br>
                        Odvolanie súhlasu – stane sa účinným dňom odvolania<br>
                        Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</p>
                        
                        <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na cerevka@strechacentrum.sk alebo telefónnom čísle +421 917 799 650.</p>
                        
                        <p><strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong></p>
                    </div>
                </div>
            </div>
        `;
        
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
            
            // Add privacy policy click handler
            const privacyLink = document.getElementById('privacy-policy-link');
            if (privacyLink) {
                privacyLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    openPrivacyPopup();
                });
            }
        }
    }
    // Mobile Navigation
    const hamburgers = document.querySelectorAll('.hamburger');
    const navMenus = document.querySelectorAll('.nav-menu');

    hamburgers.forEach((hamburger, index) => {
        hamburger.addEventListener('click', function() {
            // Always toggle menu and hamburger state immediately
            navMenus[index].classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Check the new state after toggle and pass it directly
            const isNowActive = hamburger.classList.contains('active');
            
            // Add/remove mobile-menu-open class to navbar
            const navbar = document.querySelector('.navbar-transparent');
            if (isNowActive) {
                navbar.classList.add('mobile-menu-open');
            } else {
                navbar.classList.remove('mobile-menu-open');
            }
            
            updateNavbarBasedOnState(isNowActive);
        });
    });

    // Function to update navbar based on current state
    function updateNavbarBasedOnState(hamburgerActive = null) {
        const scrollPosition = window.scrollY;
        const currentPage = window.location.pathname;
        let triggerPoint;
        
        // Check if we're on the home page (index.html or root)
        const isHomePage = currentPage === '/' || currentPage.includes('index.html') || currentPage === '/index.html';
        
        if (isHomePage) {
            // Home page: 30vh trigger point
            triggerPoint = window.innerHeight * 0.3; // 30vh
        } else {
            // Subpages (kontakt.html, sluzby.html, realizacie.html, etc.): 10vh trigger point
            triggerPoint = window.innerHeight * 0.1; // 10vh
        }
        
        if (scrollPosition > triggerPoint) {
            // Below trigger point - add scrolled class to make navbar black
            transparentNavbar.classList.add('scrolled');
        } else {
            // In hero section - remove scrolled class to keep transparent
            transparentNavbar.classList.remove('scrolled');
        }
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenus.forEach(menu => menu.classList.remove('active'));
            hamburgers.forEach(hamburger => hamburger.classList.remove('active'));
            
            // Remove mobile-menu-open class from navbar
            const navbar = document.querySelector('.navbar-transparent');
            navbar.classList.remove('mobile-menu-open');
            
            // Update navbar based on new state (hamburger is now inactive)
            updateNavbarBasedOnState(false);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    // Navbar scroll effect - transparent to scrolled
    const transparentNavbar = document.querySelector('.navbar-transparent');
    

    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar based on current state (check DOM for scroll events)
        updateNavbarBasedOnState();
    });
    
    // Hero background image cycling
    const heroImages = document.querySelectorAll('.hero-bg-image');
    let currentImageIndex = 0;
    
    function cycleHeroImages() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Cycle images every 5 seconds
    setInterval(cycleHeroImages, 5000);

    // Hero testimonials cycling
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentTestimonialIndex = 0;
    
    function cycleTestimonials() {
        if (testimonialSlides.length > 0) {
            testimonialSlides[currentTestimonialIndex].classList.remove('active');
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialSlides.length;
            testimonialSlides[currentTestimonialIndex].classList.add('active');
        }
    }
    
    // Cycle testimonials every 6 seconds (slightly different from images)
    if (testimonialSlides.length > 0) {
        setInterval(cycleTestimonials, 6000);
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .gallery-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Animate counters when hero stats section is visible
    const heroStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const numberElement = stat.childNodes[0];
                    const target = parseInt(numberElement.textContent);
                    if (!isNaN(target)) {
                        animateCounter(numberElement, target);
                    }
                });
                heroStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // Animate counters when about stats section is visible
    const aboutStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent.replace('+', ''));
                    if (!isNaN(target)) {
                        animateCounter(stat, target);
                        // Add back the + sign after animation
                        setTimeout(() => {
                            stat.textContent = stat.textContent + '+';
                        }, 2000);
                    }
                });
                aboutStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe about stats
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        aboutStatsObserver.observe(aboutStats);
    }

    // Animate section title on scroll
    const sectionTitleObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Animate section title fill on scroll (middle of viewport)
    const sectionTitleFillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fill-animate');
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px 0px 0px'
    });

    // Observe section title
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) {
        sectionTitleObserver.observe(sectionTitle);
        sectionTitleFillObserver.observe(sectionTitle);
    }

    // Animate services title on scroll
    const servicesTitle = document.querySelector('.services-title');
    if (servicesTitle) {
        sectionTitleObserver.observe(servicesTitle);
        sectionTitleFillObserver.observe(servicesTitle);
    }

    // Animate about title on scroll
    const aboutTitle = document.querySelector('.about-title');
    if (aboutTitle) {
        sectionTitleObserver.observe(aboutTitle);
        sectionTitleFillObserver.observe(aboutTitle);
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const messageDiv = document.getElementById('form-message');
            const submitBtn = this.querySelector('.contact-submit-btn');
            
            // Disable submit button and show loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Odosiela sa...';
            
            fetch('send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                messageDiv.style.display = 'block';
                if (data.success) {
                    messageDiv.className = 'form-message success';
                    messageDiv.textContent = data.message;
                    this.reset();
                } else {
                    messageDiv.className = 'form-message error';
                    messageDiv.textContent = data.message;
                }
            })
            .catch(error => {
                messageDiv.style.display = 'block';
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Nastala chyba pri odosielaní správy. Skúste to prosím neskôr.';
                console.error('Error:', error);
            })
            .finally(() => {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Odoslať správu';
            });
        });
    }

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                alert('Ďakujeme za prihlásenie k odberu!');
                this.reset();
            } else {
                alert('Prosím, zadajte váš email.');
            }
        });
    }

    // Gallery image modal disabled - items now link to portfolio page
    // const galleryItems = document.querySelectorAll('.gallery-item');
    // Gallery modal functionality removed to allow direct navigation to portfolio page

    // Services carousel functionality
    let currentSlide = 0;
    const carousel = document.querySelector('.services-carousel');
    const cards = document.querySelectorAll('.services-carousel .service-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (carousel && cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 40; // card width + gap
        const maxSlides = Math.max(0, cards.length - 3); // Show 3 cards at a time, 4th partially visible
        
        function updateCarousel() {
            const translateX = -(currentSlide * cardWidth);
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlides;
        }
        
        function nextSlide() {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardWidth = cards[0].offsetWidth + 40;
            if (newCardWidth !== cardWidth) {
                location.reload(); // Simple solution for responsive updates
            }
        });
    }

    // Continuous slider animation (no pause on hover)
});

// Privacy Policy Popup Functions
function openPrivacyPopup() {
    const popup = document.getElementById('privacy-popup');
    if (popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyPopup() {
    const popup = document.getElementById('privacy-popup');
    if (popup) {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close popup when clicking outside
document.addEventListener('click', function(e) {
    const popup = document.getElementById('privacy-popup');
    if (popup && e.target === popup) {
        closePrivacyPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePrivacyPopup();
    }
});

// Gallery modal styles removed - no longer needed
// Modal functionality disabled in favor of direct portfolio navigation 

// Back to Top Button - Mobile Only
function createBackToTopButton() {
    // Only create on mobile devices
    if (window.innerWidth <= 768) {
        // Check if button already exists
        if (!document.querySelector('.back-to-top')) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Späť na vrch');
            
            // Add click event
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            document.body.appendChild(backToTopBtn);
        }
    }
}

// Show/hide back to top button based on scroll position
function toggleBackToTopButton() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn && window.innerWidth <= 768) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
}

// Initialize back to top button
createBackToTopButton();

// Add scroll event listener for back to top button
window.addEventListener('scroll', toggleBackToTopButton);

// Handle window resize - create/remove button as needed
window.addEventListener('resize', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (window.innerWidth <= 768) {
        createBackToTopButton();
    } else if (backToTopBtn) {
        backToTopBtn.remove();
    }
});

// FAQ functionality - now static, no toggle needed
// FAQ items are always visible in the new design