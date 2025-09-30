// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateOnScroll = document.querySelectorAll('.service-card, .team-card, .testimonial-card, .about-content, .contact-wrapper');

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form Data:', data);

    // Show success message
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');

    // Reset form
    contactForm.reset();

    // In production, you would send this data to a server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    //     alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    //     contactForm.reset();
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    //     alert('Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.');
    // });
});

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.querySelector('input[type="email"]').value;

        console.log('Newsletter Email:', email);

        alert('¡Gracias por suscribirte a nuestro newsletter!');
        form.reset();
    });
});

// Counter Animation for Stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
};

// Observe stat cards and animate when visible
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = parseInt(statNumber.textContent);

            animateCounter(statNumber, targetValue);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section - removed to prevent overlap
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');

//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Service card hover effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Floating Chat Buttons
const chatToggle = document.getElementById('chatToggle');
const chatOptions = document.getElementById('chatOptions');

chatToggle.addEventListener('click', () => {
    chatToggle.classList.toggle('active');
    chatOptions.classList.toggle('active');
});

// Close chat options when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.floating-chat-buttons')) {
        chatToggle.classList.remove('active');
        chatOptions.classList.remove('active');
    }
});

// Lightbox Gallery
const galleryImages = [
    {
        src: 'http://chochopools.com/wp-content/uploads/2021/03/residential-pools.jpg',
        title: 'Residential Pool - Professional Maintenance Service'
    },
    {
        src: 'http://chochopools.com/wp-content/uploads/2021/03/Winter-Pools-1024x684.jpg',
        title: 'Winter Pool Care - Winterization Service'
    },
    {
        src: 'http://chochopools.com/wp-content/uploads/2021/03/Summerization-1024x683.jpg',
        title: 'Summer Ready - Pool Opening & Maintenance'
    },
    {
        src: 'http://chochopools.com/wp-content/uploads/2021/03/a-1024x684.jpg',
        title: 'Pool Renovation - Complete Transformation'
    },
    {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
        title: 'New Construction - Custom Pool Design'
    },
    {
        src: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800&q=80',
        title: 'Deep Cleaning - Professional Service'
    }
];

let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].title;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    currentLightboxIndex += direction;

    if (currentLightboxIndex < 0) {
        currentLightboxIndex = galleryImages.length - 1;
    } else if (currentLightboxIndex >= galleryImages.length) {
        currentLightboxIndex = 0;
    }

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[currentLightboxIndex].src;
    lightboxCaption.textContent = galleryImages[currentLightboxIndex].title;
}

// Close lightbox with ESC key and arrow keys
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        changeLightboxImage(-1);
    } else if (e.key === 'ArrowRight') {
        changeLightboxImage(1);
    }
});

// Close lightbox when clicking outside image
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

console.log('Chocho Pools - Website Loaded Successfully! 🏊‍♂️');
